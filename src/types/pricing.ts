
export interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: PricingFeature[];
  popularChoice?: boolean;
  ctaText: string;
}
