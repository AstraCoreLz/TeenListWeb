import React from 'react';
import { ViewMode } from '../types';

interface ToggleSwitchProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ mode, onChange }) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="bg-gray-100 rounded-full p-1 flex items-center">
        <button
          onClick={() => onChange('teams')}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            mode === 'teams'
              ? 'bg-white text-gray-900 shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          团队 · 组织
        </button>
        <button
          onClick={() => onChange('individuals')}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            mode === 'individuals'
              ? 'bg-white text-gray-900 shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          个人 · 创造者
        </button>
      </div>
    </div>
  );
};