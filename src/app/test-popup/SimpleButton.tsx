'use client';

import React from 'react';

export default function SimpleButton() {
  return (
    <button
      className="fixed bottom-6 left-6 z-40 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
      onClick={() => alert('Button clicked!')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M16 10v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4zm-2 0h-4a2 2 0 0 0-2 2v4h-2v-8h8v2zm2 2h4v8h-8v-8h4z" />
      </svg>
    </button>
  );
}