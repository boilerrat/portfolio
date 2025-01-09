// src/utils/api.ts

const API_KEY = import.meta.env.VITE_CG_API_KEY;

export interface PriceData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export async function getEthereumData(): Promise<PriceData> {
  try {
    console.log('Fetching ETH price data...');
    const response = await fetch(
      `https://pro-api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=hourly&x_cg_pro_api_key=${API_KEY}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Raw API response:', data);
    return data;
  } catch (error) {
    console.error('Error in getEthereumData:', error);
    // Return mock data in case of API failure
    const now = Date.now();
    const mockData: PriceData = {
      prices: Array.from({ length: 24 }, (_, i) => {
        const timestamp = now - (23 - i) * 3600000;
        const basePrice = 2300;
        const randomChange = Math.random() * 100 - 50;
        return [timestamp, basePrice + randomChange] as [number, number];
      }),
      market_caps: Array.from({ length: 24 }, (_, i) => {
        const timestamp = now - (23 - i) * 3600000;
        return [timestamp, 2300000000] as [number, number];
      }),
      total_volumes: Array.from({ length: 24 }, (_, i) => {
        const timestamp = now - (23 - i) * 3600000;
        return [timestamp, 500000000] as [number, number];
      })
    };
    return mockData;
  }
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}

export function getHighLowPrices(prices: [number, number][]): { high: number; low: number } {
  const priceValues = prices.map(([, price]) => price);
  return {
    high: Math.max(...priceValues),
    low: Math.min(...priceValues)
  };
}

export function formatVolume(volume: number): string {
  if (volume >= 1e9) {
    return `$${(volume / 1e9).toFixed(1)}B`;
  }
  if (volume >= 1e6) {
    return `$${(volume / 1e6).toFixed(1)}M`;
  }
  return `$${volume.toFixed(0)}`;
}