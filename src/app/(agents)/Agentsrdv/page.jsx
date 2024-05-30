"use client";
import { useState } from 'react';
import SelectHospital from '@/components/SelectHospital';
import SelectDoctor from '@/components/SelectDoctor';
import SelectDate from '@/components/SelectDate';
import Nav from '@/components/Nav';

export default function Home() {
  const [hospital, setHospital] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  //state
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    telephone: '',
    date: '',
  })


  //compotement
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment set:\nHospital: ${hospital}\nDoctor: ${doctor}\nDate: ${date}`);
  };

  return (
    <div className='flex flex-col'>
      <Nav />
      <div className="min-h-screen flex  justify-center bg-gray-100 pt-9">
        <div className="max-w-lg h-[50%] w-full bg-white p-8 rounded-lg shadow-lg border-t-6 border-blue">
          <h2 className="text-2xl font-bold mb-6">gestion de render vous du docteurs</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border focus:border-blue outline-none rounded-lg"
                type="text"
                id="nom"
                name="nom"
                onChange={handleChange}
                value={formData.nom}
                placeholder="Entrez le nom"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border focus:border-blue outline-none rounded-lg"
                type="text"
                id="adresse"
                name="adresse"
                onChange={handleChange}
                value={formData.adresse}
                placeholder="Entrez l'adresse"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border focus:border-blue outline-none rounded-lg"
                type="tel"
                id="telephone"
                name="telephone"
                onChange={handleChange}
                value={formData.telephone}
                placeholder="Entrez le  numéro de téléphone"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-3 py-2 border focus:border-blue outline-none rounded-lg"
                type="date"
                id="date"
                value={formData.date}
                name="date"
                onChange={handleChange}
              />
            </div>
            <SelectHospital setHospital={setHospital} />
            <SelectDoctor hospital={hospital} setDoctor={setDoctor} />
            <SelectDate setDate={setDate} />
            <button
              type="submit"
              className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              disabled={!hospital || !doctor || !date}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div >
  );
}
