import type { Grant, Achievement, TooltipProps as SharedTooltipProps } from '../../types';

export interface AchievementsProps {
  className?: string;
  grants?: Grant[];
  achievements?: Achievement[];
}

export interface GrantChartProps {
  data: Grant[];
  className?: string;
}

export interface AchievementCardProps extends Achievement {
  className?: string;
}

export type TooltipProps = SharedTooltipProps;