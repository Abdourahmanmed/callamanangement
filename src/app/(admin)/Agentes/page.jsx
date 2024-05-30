"use client";
import Table from '@/components/Table';
import { useEffect, useState } from 'react';
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Form from '@/components/Form';

const ListeAgents = () => {
    // State pour les agents
    const [agents, setAgents] = useState([]);
    const [error, setError] = useState(null);
    const TheadTable = [
        { td: "Numero" },
        { td: "Nom" },
        { td: "Email" },
        { td: "Role" },
        { td: "Action" },
    ];
    const initialData = {
        Nom: '',
        Email: '',
        Password: '',
        Role: '',
    };

    const fields = [
        { name: 'Nom', type: 'text', placeholder: 'Entrez le nom' },
        { name: 'Email', type: 'email', placeholder: 'Entrez l\'email' },
        { name: 'Password', type: 'password', placeholder: 'Entrez le mot de passe' },
        { name: 'Role', type: 'text', placeholder: 'donne le role' },
    ];

    const handleSubmit = async (data) => {
        // Construire l'URL de l'API avec les paramètres nécessaires
        const apiUrl = 'http://192.168.100.160/callmanager/api.php?method=CreateUser';
    
        // Construire l'objet à envoyer en tant que payload de la requête
        const payload = {
            name: data.Nom,
            email: data.Email,
            pass: data.Password,
            role: data.Role,
        };
        console.log(payload);
        try {
            const response = await fetch(apiUrl, {
                method: 'POST', // Utiliser la méthode POST pour envoyer les données
                headers: {
                    'Content-Type': 'application/json', // Définir le type de contenu comme JSON
                },
                body: JSON.stringify(payload), // Convertir l'objet payload en chaîne JSON
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const responseData = await response.json(); // Parse la réponse JSON
            console.log('message:', responseData);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
    

    // Fetch des données lors du montage du composant
    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await fetch('http://192.168.100.160/callmanager/api.php?method=AllUser');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAgents(data);
            } catch (error) {
                setError(error.message);
                console.error("Erreur lors du fetching des données:", error);
            }
        };

        fetchAgents();
    }, [handleSubmit]);


   

    return (
        <div className="px-8 py-8 w-full">
            <div className="flex w-full justify-end items-center">
                <Dialog>
                    <DialogTrigger>
                        <span className='text-blue cursor-pointer hover:bg-blue hover:text-white px-4 py-2 rounded'>Ajouter</span>
                    </DialogTrigger>
                    <DialogContent className="h-auto sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add agents</DialogTitle>
                            <DialogDescription>
                                Make add to your agents here. Click save when you&apos;re done.
                            </DialogDescription>
                        </DialogHeader>
                        <Form initialData={initialData} onSubmit={handleSubmit} fields={fields} />
                    </DialogContent>
                </Dialog>
            </div>
            {error ? (
                <div className="text-blue">Erreur: {error}</div>
            ) : (
                <Table data={agents} thead={TheadTable} />
            )}
        </div>
    );
}

export default ListeAgents;
