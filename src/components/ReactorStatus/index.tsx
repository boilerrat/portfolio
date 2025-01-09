import { useState, useEffect } from 'react';
import { Activity, Power, Atom, Coffee, TrendingUp, Wallet } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { ReactorStatusProps, TooltipProps, PriceStat } from './types';
import { getEthereumData, formatPrice, getHighLowPrices, formatVolume } from '../../utils/api';

const statusMessages = [
  'Mining blocks... literally',
  'Consensus achieved',
  'Smart contracts cooling',
  'Tokens well-contained',
  'DAOs running smoothly',
  'Radiation levels nominal',
  'Governance protocols stable',
  'Core temperature optimal',
  'NFTs properly shielded',
  'Blockchain fully operational'
];

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length && label) {
    return (
      <div className="bg-gray-800 p-2 rounded border border-gray-700">
        <p className="text-blue-400">{formatPrice(payload[0].value)}</p>
        <p className="text-gray-400 text-sm">
          {new Date(parseInt(label)).toLocaleTimeString()}
        </p>
      </div>
    );
  }
  return null;
};

export const ReactorStatus = ({ className = '' }: ReactorStatusProps) => {
  const [power, setPower] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [priceData, setPriceData] = useState<Array<{ time: number; price: number }>>([]);
  const [priceStats, setPriceStats] = useState<PriceStat[]>([
    { label: '24h High', value: '...' },
    { label: '24h Low', value: '...' },
    { label: '24h Volume', value: '...' }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await getEthereumData();
        console.log('Received ETH data:', data);

        if (!data?.prices?.length) {
          throw new Error('Invalid price data received');
        }

        const formattedPrices = data.prices.map(([timestamp, price]) => ({
          time: timestamp,
          price
        }));

        const { high, low } = getHighLowPrices(data.prices);
        const volume = data.total_volumes[data.total_volumes.length - 1][1];
        
        console.log('Formatted prices:', formattedPrices);
        setPriceData(formattedPrices);
        setPriceStats([
          { label: '24h High', value: formatPrice(high) },
          { label: '24h Low', value: formatPrice(low) },
          { label: '24h Volume', value: formatVolume(volume) }
        ]);
      } catch (err) {
        console.error('Error fetching ETH data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch price data');
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Set up intervals
    const intervals = [
      setInterval(() => setCurrentTime(new Date()), 1000),
      setInterval(() => {
        setPower(prev => {
          const fluctuation = Math.random() * 10 - 5;
          return Math.min(Math.max(prev + fluctuation, 60), 100);
        });
      }, 3000),
      setInterval(() => {
        const randomStatus = statusMessages[Math.floor(Math.random() * statusMessages.length)];
        setStatus(randomStatus);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
      }, 5000),
      setInterval(fetchData, 300000) // Fetch new data every 5 minutes
    ];

    // Cleanup
    return () => intervals.forEach(clearInterval);
  }, []);

  const statusIndicators = [
    { label: 'Core Temp', value: '37.2°C' },
    { label: 'Block Height', value: '#18M' },
    { label: 'Rad Level', value: '0.12 μSv' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
        {/* Reactor Status Panel */}
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Atom className="text-blue-500 animate-spin" />
              <h3 className="text-lg font-bold text-white">Reactor Status</h3>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="text-green-500" />
              <span className="text-sm text-gray-400">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Power Level */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Power Level</span>
                <Power className="text-blue-500" />
              </div>
              <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-blue-500 transition-all duration-1000"
                  style={{ width: `${power}%` }}
                />
              </div>
              <div className="mt-2 text-right text-sm text-gray-400">
                {power.toFixed(1)}% Capacity
              </div>
            </div>

            {/* Status Message */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Current Status</span>
                <Coffee className="text-green-500" />
              </div>
              <div className={`text-lg font-medium text-blue-400 ${isAnimating ? 'animate-pulse' : ''}`}>
                {status}
              </div>
            </div>

            {/* Activity Indicators */}
            <div className="grid grid-cols-3 gap-4">
              {statusIndicators.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ETH Price Monitor */}
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-blue-500" />
                <h3 className="text-lg font-bold text-white">ETH Price Monitor</h3>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="text-green-500" />
                <span className="text-sm text-gray-400">Live Feed</span>
              </div>
            </div>
            {priceData.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Current Price</div>
                <div className="text-2xl font-bold text-blue-400">
                  {formatPrice(priceData[priceData.length - 1].price)}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Price Chart */}
            <div className="bg-gray-800 rounded-lg p-4 h-[300px]">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-blue-500 flex items-center gap-2">
                    <Atom className="animate-spin" size={20} />
                    <span>Loading price data...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-red-500">{error}</div>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceData}>
                    <XAxis 
                      dataKey="time"
                      stroke="#4B5563"
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                      tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
                    />
                    <YAxis 
                      stroke="#4B5563"
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                      domain={['auto', 'auto']}
                      tickFormatter={(value) => formatPrice(value)}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Price Stats */}
            <div className="grid grid-cols-3 gap-4">
              {priceStats.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactorStatus;