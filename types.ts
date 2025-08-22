// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Motorcycle types
export interface Motorcycle extends CosmicObject {
  type: 'motorcycles';
  metadata: {
    model_name: string;
    category: {
      key: string;
      value: string;
    };
    starting_price: string;
    description?: string;
    key_features?: string;
    specifications?: Record<string, any>;
    main_image?: {
      url: string;
      imgix_url: string;
    };
    gallery_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    available_colors?: any;
    featured?: boolean;
  };
}

// Parts & Accessories types
export interface Part extends CosmicObject {
  type: 'parts';
  metadata: {
    part_name: string;
    category: {
      key: string;
      value: string;
    };
    part_number: string;
    price: string;
    description?: string;
    compatible_models?: Motorcycle[];
    product_image?: {
      url: string;
      imgix_url: string;
    };
    installation_instructions?: any;
  };
}

// Apparel types
export interface Apparel extends CosmicObject {
  type: 'apparel';
  metadata: {
    product_name: string;
    category: {
      key: string;
      value: string;
    };
    type: {
      key: string;
      value: string;
    };
    price: string;
    description?: string;
    available_sizes?: string[];
    available_colors?: any;
    product_image?: {
      url: string;
      imgix_url: string;
    };
    gallery_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
  };
}

// Services types
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    category: {
      key: string;
      value: string;
    };
    description?: string;
    starting_price?: string;
    duration?: string;
    service_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Dealers types
export interface Dealer extends CosmicObject {
  type: 'dealers';
  metadata: {
    dealer_name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    phone_number: string;
    website?: string;
    services_offered?: Service[];
    hours?: Record<string, string>;
    store_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Promotions types
export interface Promotion extends CosmicObject {
  type: 'promotions';
  metadata: {
    promotion_title: string;
    type: {
      key: string;
      value: string;
    };
    description: string;
    terms_conditions?: string;
    start_date: string;
    end_date: string;
    applicable_models?: Motorcycle[];
    promotion_image?: {
      url: string;
      imgix_url: string;
    };
    active: boolean;
  };
}

// News types
export interface News extends CosmicObject {
  type: 'news';
  metadata: {
    headline: string;
    category: {
      key: string;
      value: string;
    };
    summary: string;
    content: string;
    publish_date: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    related_motorcycles?: Motorcycle[];
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type literals for select-dropdown values (matching content model exactly)
export type MotorcycleCategory = 'touring' | 'cruiser' | 'trike' | 'adventure' | 'sport';
export type PartCategory = 'engine' | 'exhaust' | 'wheels' | 'lighting' | 'seats' | 'handlebars' | 'storage';
export type ApparelCategory = 'mens' | 'womens' | 'accessories';
export type ApparelType = 'jacket' | 'shirt' | 'tank' | 'pants' | 'hat' | 'gloves';
export type ServiceCategory = 'maintenance' | 'repair' | 'training' | 'customization' | 'insurance' | 'financing';
export type PromotionType = 'financing' | 'discount' | 'rebate' | 'gift_card' | 'trade_in';
export type NewsCategory = 'product_news' | 'events' | 'company' | 'community';

// Type guards
export function isMotorcycle(obj: CosmicObject): obj is Motorcycle {
  return obj.type === 'motorcycles';
}

export function isPart(obj: CosmicObject): obj is Part {
  return obj.type === 'parts';
}

export function isApparel(obj: CosmicObject): obj is Apparel {
  return obj.type === 'apparel';
}

export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isDealer(obj: CosmicObject): obj is Dealer {
  return obj.type === 'dealers';
}

export function isPromotion(obj: CosmicObject): obj is Promotion {
  return obj.type === 'promotions';
}

export function isNews(obj: CosmicObject): obj is News {
  return obj.type === 'news';
}