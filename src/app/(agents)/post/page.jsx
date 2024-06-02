"use client";
import React, { useState } from 'react'
import Form from '@/components/Form';
import Recouvrement from '@/components/post/recouvrement';
import Esuuq from '@/components/post/Esuuq';
import EmsPetitPaquet from '@/components/post/EmsPetitPaquet';
import LettreRecommande from '@/components/post/LettreRecommande';
import CourrierBCI from '@/components/post/CourrierBCI';
const Agents = () => {

  const [activeScript, setActiveScript] = useState('');

  const initialData = {
    lieu: '',
    date_livraison: '',
  };

  const fields = [
    { name: 'nom', type: 'text', placeholder: 'Entrez le lieu' },
    { name: 'description', type: 'date', placeholder: 'Entrez la cause' },
  ];
  const initialData2 = {
    nom: '',
    adresse: '',
    description: '',
    date: '',
  };

  const fields2 = [
    { name: 'nom', type: 'text', placeholder: 'Entrez le nom' },
    { name: 'adresse', type: 'text', placeholder: 'Entrez l\'adresse' },
    { name: 'description', type: 'textarea', placeholder: 'Entrez l\'information' },
    { name: 'date', type: 'date', placeholder: 'Entrez la date' },
  ];
  const Opts = [
    {name:'information',value:'Information'},
    {name:'livraison',value:'Livraison'},
    {name:'transfert',value:'Transfert'},
    {name:'doleance',value:'doleance'},
  ]

  const handleSubmit = (data) => {
    // Ajoutez votre logique de traitement ici, par exemple une requête HTTP
    console.log(data);
  };

  return (
    <section className="w-full h-screen overflow-y-auto"> 
      <div className="flex gap-6 w-full justify-center py-5">
        {/* formulaire pour le enregistrement de livraison */}
        <div className="w-[40%] bg-white shadow-lg p-5">
          <h1 className="text-blue text-3xl font-semibold p-4">Formulaire De livraison</h1>
          <Form initialData={initialData} onSubmit={handleSubmit} fields={fields} OPTION={Opts} />
        </div>
        {/* formulaire pour le enregistrement des informations */}
        <div className="w-[40%] bg-white shadow-lg p-5">
          <h1 className="text-blue text-3xl font-semibold p-4">Formulaire De l'information</h1>
          <Form initialData={initialData2} onSubmit={handleSubmit} fields={fields2} OPTION={Opts} />
        </div>
      </div>
      {/* l'affichage du script */}
      <div className="flex justify-center mb-5">
        {activeScript === 'recouvrement' && <Recouvrement />}
        {activeScript === 'esuuq' && <Esuuq />}
        {activeScript === 'emsPetitPaquet' && <EmsPetitPaquet />}
        {activeScript === 'lettreRecommande' && <LettreRecommande />}
        {activeScript === 'courrierBCI' && <CourrierBCI />}
      </div>
      {/* le bouton pour changer le script à lire */}
      <div className="flex gap-8 justify-center">
        <button onClick={() => setActiveScript('recouvrement')} className="p-4 bg-blue rounded">Recouvrement</button>
        <button onClick={() => setActiveScript('esuuq')} className="p-4 bg-blue rounded">Esuuq</button>
        <button onClick={() => setActiveScript('emsPetitPaquet')} className="p-4 bg-blue rounded">Ems/petit paquet</button>
        <button onClick={() => setActiveScript('lettreRecommande')} className="p-4 bg-blue rounded">Lettre / recommandé</button>
        <button onClick={() => setActiveScript('courrierBCI')} className="p-4 bg-blue rounded">Courrier BCI</button>
      </div>
    </section>
  )
}

export default Agents