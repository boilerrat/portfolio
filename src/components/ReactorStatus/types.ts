// src/components/ReactorStatus/types.ts

export interface ReactorStatusProps {
    className?: string;
  }
  
  export interface TooltipProps {
    active?: boolean;
    payload?: Array<{
      value: number;
      dataKey?: string;
    }>;
    label?: string;
  }
  
  export interface PriceStat {
    label: string;
    value: string;
  }
  
  export interface PriceDataPoint {
    time: number;
    price: number;
  }