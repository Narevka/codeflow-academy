
export interface StripeCheckoutParams {
  planId: string;
  billingCycle: "monthly" | "yearly";
  userId: string;
  customerEmail: string;
  successUrl: string;
  cancelUrl: string;
}

export interface StripeCheckoutResponse {
  url: string;
}
