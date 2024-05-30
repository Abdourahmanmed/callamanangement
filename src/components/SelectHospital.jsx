"use client";
import { useState } from 'react';

const hospitals = ['Hospital A', 'Hospital B', 'Hospital C'];

export default function SelectHospital({ setHospital }) {
  const [selectedHospital, setSelectedHospital] = useState('');

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Select Hospital</label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedHospital}
        onChange={(e) => {
          setSelectedHospital(e.target.value);
          setHospital(e.target.value);
        }}
      >
        <option value="">-- Select Hospital --</option>
        {hospitals.map((hospital) => (
          <option key={hospital} value={hospital}>
            {hospital}
          </option>
        ))}
      </select>
    </div>
  );
}
