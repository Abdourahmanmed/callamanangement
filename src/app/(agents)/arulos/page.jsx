"use client";
import React from 'react'
import Form from '@/components/Form';
const Arulos = () => {
  const initialData2 = {
    nom: '',
    adresse: '',
    description: '',
    date: '',
  };

  const fields2 = [
    { name: 'nom', type: 'text', placeholder: 'Entrez le nom' },
    { name: 'adresse', type: 'text', placeholder: 'Entrez l\'adresse' },
    { name: 'description', type: 'textarea', placeholder: 'Entrez le cause' },
    { name: 'date', type: 'date', placeholder: 'Entrez la date' },
  ];

  const Opts = [
    {name:'cas_normale',value:'cas normale'},
    {name:'cas_sensible',value:'cas sensible'},
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
          <h1 className="text-blue text-3xl font-semibold p-4">Scripts</h1>
          <div className="text-blue">
            Bonjour, est-ce bien Mrs/Mm ***** ? Je me présente je suis un agent du service commercial de la poste de Djibouti, et je vous appelle pour vous informez que vous avez reçu un courrier. Merci de vous présenter ànotre service commercial minide votre pièce d’identité le plutôt possible. (Carte d’identité, passeport valide ou carte de séjour valide pour l’étrange) Merci et passé une excellente journée.
          </div>
        </div>
        {/* formulaire pour le enregistrement des informations */}
        <div className="w-[40%] bg-white shadow-lg p-5">
          <h1 className="text-blue text-3xl font-semibold p-4">Formulaire Du Arulos </h1>
          <Form initialData={initialData2} onSubmit={handleSubmit} fields={fields2} OPTION={Opts} />
        </div>
      </div>
    </section>
  )
}

export default Arulos