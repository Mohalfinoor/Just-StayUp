export interface CampaignKPIs {
  estimatedReach: string;
  engagementRate: string;
  kpiGoalDescription: string;
}

export interface DesignDeliverable {
  id: number;
  title: string;
  format: string; // e.g., 'Carousel', 'Single Feed'
  visualConcept: string;
  caption: string;
  tacticGoal: string; // e.g., 'Edukasi', 'Leads', 'Engagement'
  slideBreakdown?: string[];
}

export interface VideoDeliverable {
  id: number;
  title: string;
  hook: string;
  storyboard: string;
  audio: string;
  visualDirection: string;
}

export interface StoryDeliverable {
  id: number;
  title: string;
  creativeIdea: string;
  sticker: string; // e.g., "Poll Link", "Question Box"
  cta: string;
}

export interface FullProposalStrategy {
  summaryOverview: string;
  campaignKPIs: CampaignKPIs;
  designs: DesignDeliverable[];
  videos: VideoDeliverable[];
  stories: StoryDeliverable[];
}

export interface AgencyProfile {
  name: string;
  tagline: string;
  description: string;
  logoColor: string;
  keySpecialties: string[];
  contactEmail: string;
  contactPhone: string;
  instagram: string;
  website: string;
}

export interface ClientProfile {
  name: string;
  project: string;
  developer: string;
  city: string;
  description: string;
  uspPoints: string[];
}

export interface ProposalPricing {
  basePrice: number;
  discountRate: number; // in percentage e.g., 10
  addOns: {
    id: string;
    name: string;
    description: string;
    price: number;
    enabled: boolean;
  }[];
}
