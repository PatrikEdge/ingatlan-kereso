export interface Property {
    id: number;
    title: string;
    description: string;
    price: number;
    size: number;
    rooms: number;
    images: string[];
    location: string;
    isFavorite?: boolean;
  }
  