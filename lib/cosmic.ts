import { createBucketClient } from '@cosmicjs/sdk'
import { Motorcycle, Part, Apparel, Service, Dealer, Promotion, News, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch motorcycles
export async function getMotorcycles(limit: number = 10): Promise<Motorcycle[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'motorcycles' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const motorcycles = response.objects as Motorcycle[];
    return motorcycles.sort((a, b) => {
      // Sort featured first, then by price
      if (a.metadata.featured && !b.metadata.featured) return -1;
      if (!a.metadata.featured && b.metadata.featured) return 1;
      return 0;
    }).slice(0, limit);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch motorcycles');
  }
}

// Fetch single motorcycle
export async function getMotorcycle(slug: string): Promise<Motorcycle | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'motorcycles',
      slug
    }).depth(1);
    
    return response.object as Motorcycle;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Fetch parts
export async function getParts(limit: number = 10): Promise<Part[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'parts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return (response.objects as Part[]).slice(0, limit);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch parts');
  }
}

// Fetch apparel
export async function getApparel(limit: number = 10): Promise<Apparel[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'apparel' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return (response.objects as Apparel[]).slice(0, limit);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch apparel');
  }
}

// Fetch services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Service[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch services');
  }
}

// Fetch dealers
export async function getDealers(): Promise<Dealer[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'dealers' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Dealer[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch dealers');
  }
}

// Fetch promotions
export async function getPromotions(): Promise<Promotion[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'promotions' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const promotions = response.objects as Promotion[];
    // Filter active promotions
    return promotions.filter(promo => promo.metadata.active);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch promotions');
  }
}

// Fetch news
export async function getNews(limit: number = 10): Promise<News[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'news' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const news = response.objects as News[];
    return news.sort((a, b) => {
      const dateA = new Date(a.metadata.publish_date).getTime();
      const dateB = new Date(b.metadata.publish_date).getTime();
      return dateB - dateA;
    }).slice(0, limit);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch news');
  }
}

// Fetch single news article
export async function getNewsArticle(slug: string): Promise<News | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'news',
      slug
    }).depth(1);
    
    return response.object as News;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}