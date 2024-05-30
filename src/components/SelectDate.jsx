"use client";
import { useState } from 'react';

export default function SelectDate({ setDate }) {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Select Date</label>
      <input
        type="date"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e.target.value);
          setDate(e.target.value);
        }}
      />
    </div>
  );
}
