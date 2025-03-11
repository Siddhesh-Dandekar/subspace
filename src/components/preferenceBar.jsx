import React from 'react';
import { Tractor, Cpu, Briefcase, Shield } from 'lucide-react';

const PreferenceBar = ({ preferences, onChange }) => {
  const categories = [
    { id: 'agricultural', label: 'Agricultural', icon: <Tractor className="w-5 h-5" /> },
    { id: 'technology', label: 'Technology', icon: <Cpu className="w-5 h-5" /> },
    { id: 'business', label: 'Business', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'crime', label: 'Crime', icon: <Shield className="w-5 h-5" /> },
  ];

  const handleToggle = (categoryId) => {

    onChange({
      ...preferences,
      [categoryId]: !preferences[categoryId],
    });
  };

  return (
    <div className="bg-white rounded-lg py-2 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => handleToggle(id)}
            className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${preferences[id]
                ? 'bg-blue-50 border-2 border-blue-500 text-blue-700'
                : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-600'
              }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-full ${preferences[id] ? 'bg-blue-100' : 'bg-gray-200'
                  }`}
              >
                {icon}
              </div>
              <span className="font-medium">{label}</span>
            </div>

            <div
              className={`w-4 h-4 rounded-full border-2 transition-colors ${preferences[id]
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300'
                }`}
            >
              {preferences[id] && (
                <svg
                  className="w-full h-full text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreferenceBar;
