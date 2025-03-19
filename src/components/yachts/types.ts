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
}

// Keep the original type for backward compatibility
export type YachtType = Yacht;
