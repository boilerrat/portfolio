import React, { useState, useEffect } from 'react';
import { Activity, Power, Atom, TrendingUp, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { ReactorStatusProps } from './types';

const statusMessages = [
  'Consensus protocols maintaining criticality',
  'Smart contracts properly shielded',
  'DAOs operating at optimal temperature',
  'Governance tokens well-contained',
  'Web3 radiation levels nominal',
  'Blockchain fully operational',
  'Decentralized cooling systems engaged',
  'Token emissions within parameters',
  'NFT containment field stable',
  'Reactor governance optimized'
];

// Simulated data for the career timeline
// Generate simulated stability data
const generateStabilityData = () => {
  const points = 20;
  const data = [];
  for (let i = 0; i < points; i++) {
    data.push({
      time: i,
      value: 50 + Math.sin(i / 2) * 20 + (Math.random() * 10 - 5)
    });
  }
  return data;
};

// Generate simulated neutron flux data
const generateFluxData = () => {
  const points = 20;
  const data = [];
  for (let i = 0; i < points; i++) {
    data.push({
      time: i,
      value: 70 + Math.cos(i / 3) * 15 + (Math.random() * 8 - 4)
    });
  }
  return data;
};

const generateTimelineData = () => {
  const data = [];
  const startYear = 2003;
  const currentYear = new Date().getFullYear();
  
  for (let year = startYear; year <= currentYear; year++) {
    let value = 30; // Base value
    
    // Add significant career events
    if (year === 2003) value += 20; // Started as Boilermaker
    if (year === 2005) value += 15; // Red Seal certification
    if (year === 2016) value += 25; // Radiation Protection certification
    if (year === 2019) value += 20; // EPRI certification
    if (year === 2022) value += 30; // Entered Web3 space
    
    data.push({
      year: year.toString(),
      value: value + Math.random() * 10
    });
  }
  
  return data;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const careerEvents: { [key: string]: string } = {
      '2003': 'Started as Boilermaker',
      '2005': 'Achieved Red Seal certification',
      '2016': 'Obtained Radiation Protection certification',
      '2019': 'Earned EPRI certification',
      '2022': 'Entered Web3 space and founded DAO Masons'
    };

    return (
      <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
        <p className="text-white font-medium">{label}</p>
        <p className="text-blue-400">{careerEvents[label] || 'Career progression'}</p>
      </div>
    );
  }
  return null;
};

export const ReactorStatus: React.FC<ReactorStatusProps> = ({ 
}) => {
  const [power, setPower] = useState(85);
  const [coreTemp, setCoreTemp] = useState(1350);
  const [blockHeight, setBlockHeight] = useState(18_500_000);
  const [radLevel, setRadLevel] = useState(5.5e7);
  const [status, setStatus] = useState('Initializing systems...');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timelineData] = useState(generateTimelineData());

  const careerStats = [
    { label: 'Years Experience', value: '20+' },
    { label: 'Major Projects', value: '50+' },
    { label: 'Grants Secured', value: '$197K' }
  ];

  useEffect(() => {
    const intervals = [
      setInterval(() => setCurrentTime(new Date()), 1000),
      setInterval(() => {
        setPower(prev => {
          const fluctuation = Math.random() * 10 - 5;
          return Math.min(Math.max(prev + fluctuation, 60), 100);
        });
      }, 3000),
      setInterval(() => {
        setCoreTemp(() => {
          const fluctuation = Math.random() * 20 - 10;
          return 1300 + (fluctuation % 100);
        });
      }, 2000),
      setInterval(() => {
        setBlockHeight(prev => prev + Math.floor(Math.random() * 3));
      }, 5000),
      setInterval(() => {
        setRadLevel(() => {
          const base = 5e7;
          const fluctuation = Math.random() * 5e7;
          return base + fluctuation;
        });
      }, 4000),
      setInterval(() => {
        const randomStatus = statusMessages[Math.floor(Math.random() * statusMessages.length)];
        setStatus(randomStatus);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
      }, 5000)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  const formatRadLevel = (level: number) => {
    return `${(level / 1e7).toFixed(2)}E7 Gy/hr`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Atom size={32} className="text-blue-500" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          System Status
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reactor Status Panel */}
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Activity className="text-blue-500" />
              <span className="text-sm text-gray-400 font-mono">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Power className="text-green-500" />
              <span className="text-sm text-gray-400 font-mono">
                {power.toFixed(1)}% Capacity
              </span>
            </div>
          </div>

          {/* Status Message */}
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <div className={`text-lg font-mono text-blue-400 ${isAnimating ? 'animate-pulse' : ''}`}>
              {status}
            </div>
          </div>

          {/* Reactor Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-2">Core Temp</div>
              <div className="text-blue-400 font-mono font-medium">
                {coreTemp.toFixed(1)}°C
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-2">Block Height</div>
              <div className="text-blue-400 font-mono font-medium">
                #{blockHeight.toLocaleString()}
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-2">Rad Level</div>
              <div className="text-blue-400 font-mono font-medium">
                {formatRadLevel(radLevel)}
              </div>
            </div>
          </div>

          {/* Systems Monitor */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Core Stability</div>
              <div className="h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={generateStabilityData()}>
                    <Line 
                      type="natural"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={false}
                      isAnimationActive={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Neutron Flux</div>
              <div className="h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={generateFluxData()}>
                    <Line 
                      type="natural"
                      dataKey="value"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={false}
                      isAnimationActive={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline Panel */}
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-purple-500" />
              <h3 className="text-lg font-bold text-white">Career Timeline</h3>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-purple-500" />
              <span className="text-sm text-gray-400">Career Progression</span>
            </div>
          </div>

          {/* Career Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {careerStats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-purple-400 font-medium mt-1">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Timeline Chart */}
          <div className="bg-gray-800/50 rounded-lg p-4 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData}>
                <XAxis 
                  dataKey="year"
                  stroke="#4B5563"
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#4B5563"
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  domain={['auto', 'auto']}
                  hide
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactorStatus;