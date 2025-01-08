import { NFT } from '../../types';

export interface NFTGridProps {
  className?: string;
  nfts?: NFT[];
}

export interface NFTCardProps extends NFT {
  isHovered: boolean;
  onHover: (id: number | null) => void;
  className?: string;
}