import React from 'react';
import { BarChart3, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AchievementsProps, GrantChartProps, AchievementCardProps, TooltipProps } from './types';
import { Grant, Achievement } from '../../types';

const defaultGrants: Grant[] = [
  { name: 'DAOMasons (Plurality Labs)', amount: 150000, color: '#2aae91' },
  { name: 'DAOHaus (Moloch DAO)', amount: 90000, color: '#6366f1' },
  { name: 'DAOhaus (Optimism)', amount: 90000, color: '#ec4899' },
  { name: 'Farcastle (Public Nouns)', amount: 17000, color: '#06b6d4' },
];

const defaultAchievements: Achievement[] = [
  { title: "Grant Ships Launch", description: "Distributed $100K ARB tokens to fund Web3 game development on Arbitrum", date: "2024" },
  { title: "DAO Masons", description: "Co-founded DAO Masons, a product and services DAO, designed to make DAOs better", date: "2023" },
  { title: "Public HAUS Champion", description: "Led governance activities and secured multiple major grants", date: "2022" },
  { title: "Metaguide", description: "Guided Web3 projects in securing grants, building communities, and facilitating funding for blockchain initiatives.", date: "2021" },
  { title: "Radiation Protection Technician: EPRI Certification", description: "Qualified as Radiation Protection Technician at OPG and later at Bruce Power", date: "2016/2019" },
  { title: "Boilermaker Red Seal", description: "Completed Boilermaker apprenticeship and passed Red Seal Exam", date: "2006" },
];

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <p className="text-white font-medium">{payload[0].payload.name}</p>
        <p className="text-blue-400">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

interface CustomYAxisTickProps {
  x: number;
  y: number;
  payload: { value: string };
}

const CustomYAxisTick: React.FC<CustomYAxisTickProps> = ({ x, y, payload }) => {
  const truncatedText = payload.value.length > 20 ? `${payload.value.slice(0, 20)}...` : payload.value;
  return (
    <text x={x - 10} y={y} fill="#FFFFFF" fontSize={12} dy={5} textAnchor="end">
      {truncatedText}
    </text>
  );
};

const GrantChart: React.FC<GrantChartProps> = ({ data, className = '' }) => (
  <div className={`bg-gray-900 rounded-lg p-6 h-80 ${className}`}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical">
        <XAxis
          type="number"
          domain={[0, 150000]}
          tickFormatter={(val) => `$${val.toLocaleString()}`}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
            dataKey="name"
            type="category"
            width={200}
            tick={(props) => <CustomYAxisTick {...props} />}
        />

        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="amount" fill="#3b82f6" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, date, className = '' }) => (
  <div className={`group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300 ${className}`}>
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-400 flex-grow">{description}</p>
    </div>
  </div>
);

export const Achievements: React.FC<AchievementsProps> = ({ className = '', grants = defaultGrants, achievements = defaultAchievements }) => {
  return (
    <section id="achievements" className={`min-h-screen bg-black text-white p-8 ${className}`}>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <BarChart3 size={32} className="text-green-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Grants Secured
            </h2>
          </div>
          <GrantChart data={grants} />
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Award size={32} className="text-yellow-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Key Achievements
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
