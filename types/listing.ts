export interface ListingPhoto {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

export interface Amenity {
  id: string;
  name: string;
  iconName: string;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  stayDuration?: string;
  text: string;
}

export interface ListingData {
  title: string;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  location: string;
  nightlyPrice: number;
}
