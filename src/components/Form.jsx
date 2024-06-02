"use client";
import React, { useState } from 'react';

const ReusableForm = ({ initialData, onSubmit, fields ,OPTION}) => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);

        // Réinitialiser l'état du formulaire après la soumission
        setFormData(initialData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div className="mb-4" key={index}>
                    {field.type === 'textarea' ? (
                        <textarea
                            className="w-full px-3 py-2 border text-blue  focus:border-blue outline-none rounded-lg"
                            id={field.name}
                            name={field.name}
                            onChange={handleChange}
                            rows="4"
                            value={formData[field.name]}
                            placeholder={field.placeholder}
                        ></textarea>
                    ) : (
                        <input
                            className="w-full px-3 py-2 border text-blue focus:border-blue outline-none rounded-lg"
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            onChange={handleChange}
                            value={formData[field.name]}
                            placeholder={field.placeholder}
                        />
                    )}
                </div>
            ))}
            <select name="liste" id="liste" className="w-full px-3 py-2 border text-blue focus:border-blue outline-none rounded-lg mb-4">
                {OPTION.map((opts,index) =>{
                    return (
                        <option value={opts.name} key={index}>{opts.value}</option>
                    )
                })}
            </select>
            <button
                type="submit"
                className="w-full bg-blue text-white py-2 rounded-lg hover:bg-blue/80 transition duration-300"
            >
                Soumettre
            </button>
        </form>
    );
};

export default ReusableForm;
