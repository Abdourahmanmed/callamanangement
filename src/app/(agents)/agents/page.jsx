"use client";
import Contenu from '@/components/Contenu'
import Nav from '@/components/Nav'
import React, { useState } from 'react'

const Agents = () => {
  // State pour la liste déroulante et les scripts
  const [selectedOption, setSelectedOption] = useState('gestionPlainte');
  const [scripts, setScripts] = useState('scripts des gestions plainte');
  const [scripttitle, setScriptTitle] = useState('Script du plainte');
  const [FormTitle, setFormTitle] = useState('Formulaire de gestion plainte');

  // Handler pour la sélection de l'option
  const handleOptionChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    if (selected === 'gestionPlainte') {
      setScripts('scripts des gestions plainte');
      setScriptTitle('Script du plainte');
      setFormTitle('Formulaire de gestion plainte');
    } else if (selected === 'gestionInfos') {
      setScripts('scripts des gestions informations');
      setScriptTitle('Script d\'information');
      setFormTitle('Formulaire de gestion d\'information');
    }
  };

  return (
    <section className='flex flex-col gap-8 '>
      <Nav />
      {/* Liste déroulante pour choisir l'option */}
      <div className="flex justify-evenly">
        <select value={selectedOption} onChange={handleOptionChange} className="block appearance-none w-[300px] bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:border-blue-500 transition duration-300">
          <option value="gestionPlainte" className="text-blue hover:bg-blue-100">Gestion de Plainte</option>
          <option value="gestionInfos" className="text-green-500 hover:bg-green-500 rounded">Gestion des Informations</option>
        </select>
      </div>
      <Contenu title={FormTitle} titleScript={scripttitle} script={scripts} />
    </section>
  )
}

export default Agents