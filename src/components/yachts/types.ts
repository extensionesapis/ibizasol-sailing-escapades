
export interface Yacht {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  price: string;
  description: string;
  descriptionEs?: string;
  capacity: number;
  length: number;
  highlights?: string[];
  highlightsEs?: string[];
  duration?: string;
  route?: string;
}

// Keep the original type for backward compatibility
export type YachtType = Yacht;
