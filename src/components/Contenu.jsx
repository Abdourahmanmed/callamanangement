"use client";
import Form from './Form';

const Contenu = ({title,titleScript,script}) => {
    const initialData = {
        nom: '',
        description: '',
        telephone: '',
        date: '',
    };

    const fields = [
        { name: 'nom', type: 'text', placeholder: 'Entrez le nom' },
        { name: 'description', type: 'textarea', placeholder: 'Entrez la cause' },
        { name: 'telephone', type: 'tel', placeholder: 'Entrez le numéro de téléphone' },
        { name: 'date', type: 'date', placeholder: 'Sélectionnez la date' },
    ];

    const handleSubmit = (data) => {
        // Ajoutez votre logique de traitement ici, par exemple une requête HTTP
        console.log(data);
    };
    return (
        <div className='container bg-white shadow-lg p-4  border-t-6 border-blue rounded-lg'>
            <div className="grid grid-cols-2">
                <div>
                    <h1 className='text-center text-xl font-semibold text-blue p-4'>{titleScript}</h1>
                    <p className='max-w-[500px]'>{script}</p>
                </div>
                <div className='border-l-2 border-blue'>
                    <div className="container">
                        <h1 className='text-center text-xl font-semibold text-blue p-4'>{title}</h1>
                        <Form  initialData={initialData} onSubmit={handleSubmit} fields={fields}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contenu