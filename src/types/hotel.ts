export interface Hotel {
  id: string;
  name: string;
  city: string;
  checkIn: {
    date: string;
    time: string;
  };
  checkOut: {
    date: string;
    time: string;
  };
  nights: number;
  websiteUrl: string;
  imageUrl?: string;
  rating?: number;
  amenities?: string[];
}

export interface HotelStay {
  hotels: Hotel[];
}
