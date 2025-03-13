
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno";

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Define pricing plan details
const PLANS = {
  basic: {
    monthly: {
      name: "Basic Monthly",
      price: 19900, // 199 PLN in cents
      interval: "month",
    },
    yearly: {
      name: "Basic Yearly",
      price: 199000, // 1990 PLN in cents
      interval: "year",
    },
  },
  standard: {
    monthly: {
      name: "Standard Monthly",
      price: 24900, // 249 PLN in cents
      interval: "month",
    },
    yearly: {
      name: "Standard Yearly",
      price: 249000, // 2490 PLN in cents
      interval: "year",
    },
  },
  premium: {
    monthly: {
      name: "Premium VIP Monthly",
      price: 89500, // 895 PLN in cents
      interval: "month",
    },
    yearly: {
      name: "Premium VIP Yearly",
      price: 895000, // 8950 PLN in cents
      interval: "year",
    },
  },
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { planId, billingCycle, userId, customerEmail, successUrl, cancelUrl } = await req.json();

    // Validate input
    if (!planId || !billingCycle || !successUrl || !cancelUrl) {
      return new Response(
        JSON.stringify({ error: "Missing required parameters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if plan exists
    const planDetails = PLANS[planId as keyof typeof PLANS]?.[billingCycle as "monthly" | "yearly"];
    if (!planDetails) {
      return new Response(
        JSON.stringify({ error: "Invalid plan or billing cycle" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Creating checkout session for plan: ${planId} (${billingCycle}), user: ${userId}`);

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pln",
            product_data: {
              name: `CodeFlow Academy - ${planDetails.name}`,
              description: `Subskrypcja ${billingCycle === "monthly" ? "miesięczna" : "roczna"} planu ${planId}`,
            },
            unit_amount: planDetails.price,
            recurring: {
              interval: planDetails.interval as "month" | "year",
            },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: successUrl,
      cancel_url: cancelUrl,
      client_reference_id: userId,
      customer_email: customerEmail,
      metadata: {
        userId,
        planId,
        billingCycle,
      },
    });

    // Return the checkout session URL
    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
