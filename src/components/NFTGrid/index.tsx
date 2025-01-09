import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { NFTGridProps, NFTCardProps } from './types';
import { NFT } from '../../types';

const NFTCard: React.FC<NFTCardProps> = ({
  image,
  name,
  link,
  isHovered,
  onHover,
  id,
  className = ''
}) => (
  <div
    className={`relative group ${className}`}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  >
    {/* NFT Card */}
    <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-square">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
          transition-opacity duration-300 flex items-end justify-between p-6
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <h3 className="text-white text-xl font-medium">{name}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={24} />
          </a>
        )}
      </div>
    </div>
    {/* Glow Effect */}
    <div className={`absolute inset-0 rounded-lg bg-blue-500 opacity-0 group-hover:opacity-20
      blur-xl transition-opacity duration-500 -z-10`} />
  </div>
);

const defaultNFTs: NFT[] = [
  {
    id: 1,
    image: "https://i.imgur.com/Clv3Y1d.png",
    name: "Public Noun 237",
    link: "https://etherscan.io/nft/0x93ecac71499147627dfec6d0e494d50fcfff10ee/237"
  },
  {
    id: 2,
    image: "https://i.imgur.com/qvJL6Rd.png",
    name: "Public Noun 111",
    link: ""
  },
  {
    id: 3,
    image: "https://i.imgur.com/BRXIjWr.png",
    name: "Public Noun 65",
    link: "https://etherscan.io/nft/0x93ecac71499147627dfec6d0e494d50fcfff10ee/65"
  },
  {
    id: 4,
    image: "https://i.imgur.com/adQSaCJ.png",
    name: "Boiler's Jerry",
    link: "https://etherscan.io/nft/0x42c4a46bd0f9c642e852a848a5b730b6e3086ccf/32"
  }
];

export const NFTGrid: React.FC<NFTGridProps> = ({
  className = '',
  nfts = defaultNFTs
}) => {
  const [hoveredNFT, setHoveredNFT] = useState<number | null>(null);

  return (
    <div className={`bg-black ${className}`}>
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              PFP's
            </h2>
          </div>
          <p className="text-gray-400 text-lg mt-2">My Online Appearances</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nfts.map((nft) => (
            <NFTCard
              key={nft.id}
              {...nft}
              isHovered={hoveredNFT === nft.id}
              onHover={setHoveredNFT}
            />
          ))}
        </div>
      </div>
    </div>
  );
};