import React from 'react';
import { Hero } from '../components/Hero';
import { ToggleSwitch } from '../components/ToggleSwitch';
import { TeamCard } from '../components/TeamCard';
import { IndividualCard } from '../components/IndividualCard';
import { useAppStore } from '../store/appStore';
import { Team, Individual } from '../types';

// 导入模拟数据
import teamsData from '../data/teams.json';
import individualsData from '../data/individuals.json';

export const Home: React.FC = () => {
  const { viewMode, setViewMode } = useAppStore();

  const teams = teamsData as Team[];
  const individuals = individualsData as Individual[];

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Hero />
          <ToggleSwitch mode={viewMode} onChange={setViewMode} />

          {/* Teams Section */}
          {viewMode === 'teams' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {teams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          )}

          {/* Individuals Section */}
          {viewMode === 'individuals' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individuals.map((individual) => (
                <IndividualCard key={individual.id} individual={individual} />
              ))}
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
