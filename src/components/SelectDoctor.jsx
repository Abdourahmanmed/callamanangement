"use client";
import { useState } from 'react';

const doctors = {
  'Hospital A': ['Dr. Smith', 'Dr. Johnson'],
  'Hospital B': ['Dr. Brown', 'Dr. Williams'],
  'Hospital C': ['Dr. Jones', 'Dr. Davis'],
};

export default function SelectDoctor({ hospital, setDoctor }) {
  const [selectedDoctor, setSelectedDoctor] = useState('');

  if (!hospital) return null;

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Select Doctor</label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedDoctor}
        onChange={(e) => {
          setSelectedDoctor(e.target.value);
          setDoctor(e.target.value);
        }}
      >
        <option value="">-- Select Doctor --</option>
        {doctors[hospital].map((doctor) => (
          <option key={doctor} value={doctor}>
            {doctor}
          </option>
        ))}
      </select>
    </div>
  );
}
