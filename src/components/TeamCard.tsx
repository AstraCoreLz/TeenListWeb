import React from 'react';
import { ExternalLink, Users, MapPin, Calendar } from 'lucide-react';
import { Team } from '../types';

interface TeamCardProps {
  team: Team;
}

export const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={team.logo}
            alt={`${team.name} logo`}
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{team.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{team.description}</p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {team.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Meta Info */}
      <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4" />
          <span>{team.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span>{team.size}</span>
        </div>
      </div>

      {/* Website Link */}
      <a
        href={team.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-6 group"
      >
        <span>访问网站</span>
        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>

      {/* News Feed */}
      {team.news.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4 mt-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            最近动态
          </h4>
          <div className="space-y-2">
            {team.news.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center justify-between group">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex-1"
                >
                  {item.title}
                </a>
                <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <img
            src={team.founder.avatar}
            alt={team.founder.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900">{team.founder.name}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {team.socials.twitter && (
            <a
              href={team.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          )}
          {team.socials.github && (
            <a
              href={team.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};