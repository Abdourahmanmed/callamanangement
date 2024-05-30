// components/Table.js
"use client";
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Form from './Form';

const Table = ({ data, thead }) => {
    //state 
    const [GetUser, setUser] = useState({});
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
    //comportement 
    const handleSubmit = async (data) => {
        // Construire l'URL de l'API avec les paramètres nécessaires
        const apiUrl = 'http://192.168.100.160/callmanager/api.php?method=UpdateUser&id=1';

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

    const handleGetUser = async (id) => {
        try {
            const response = await fetch(`http://192.168.100.160/callmanager/api.php?method=GetUser&id=${id}`);

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUser(data);
            // console.log(data);
        } catch (error) {
            console.error('Error fetching user data:', error.message);
            // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur ou effectuer d'autres actions nécessaires
        }
    };


    //render
    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-blue">
                    <tr>
                        {thead.map((th, index) => (
                            <th className="py-2 px-4 border-b" key={index}>{th.td}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="hover:bg-yellow">
                            <td className="py-2 px-4 border-b text-blue text-center">{item.id}</td>
                            <td className="py-2 px-4 border-b text-blue text-center">{item.full_name}</td>
                            <td className="py-2 px-4 border-b text-blue text-center">{item.email}</td>
                            <td className="py-2 px-4 border-b text-blue text-center">{item.Role}</td>
                            <td className="py-2 px-4 border-b text-blue flex space-x-2 justify-center">
                                <Dialog>
                                    <DialogTrigger>
                                        <span className="text-blue cursor-pointer"><FaEdit onClick={() => handleGetUser(item.id)} /></span>
                                    </DialogTrigger>
                                    <DialogContent className="h-auto sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Edit agents</DialogTitle>
                                            <DialogDescription>
                                                Make changes to your agents here. Click save when you&apos;re done.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <Form initialData={initialData} onSubmit={handleSubmit} fields={fields} data={GetUser} />
                                    </DialogContent>
                                </Dialog>
                                <span className="text-red p-2 rounded cursor-pointer"><FaTrash /></span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
