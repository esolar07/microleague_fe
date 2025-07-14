"use client";
import React, { useState } from 'react';
import Form from 'next/form'
import Container from "@/components/layout/Container";

interface MatchUpData {
    sport: string;
    homeTeamYearEra: string;
    homeTeamName: string;
    visitingTeamYearEra: string;
    visitingTeamName: string;
}
const MatchUpForm = () => {
    const [formData, setFormData] = useState<MatchUpData>({
        sport: '',
        homeTeamYearEra: '',
        homeTeamName: '',
        visitingTeamYearEra: '',
        visitingTeamName: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to an API or console.log it
        console.log('Form data submitted:', formData);
        alert('Form submitted! Check console for data.');
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Create Your Fantasy Match Up.</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">
                            Select a sports team from any era.
                        </p>
                        <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="sport"
                                       className="block text-sm/6 font-medium text-gray-900">Sport:</label>
                                <div className="mt-2">
                                    <div
                                        className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

                                        <input
                                            type="text"
                                            id="sport"
                                            name="sport"
                                            value={formData.sport}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="homeTeamName">Home Team Name:</label>
                            <input
                                type="text"
                                id="homeTeamName"
                                name="homeTeamName"
                                value={formData.homeTeamName}
                                onChange={handleChange}
                                required
                            />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="homeTeamYearEra">Home Team Year/Era:</label>
                            <input
                                type="text"
                                id="homeTeamYearEra"
                                name="homeTeamYearEra"
                                value={formData.homeTeamYearEra}
                                onChange={handleChange}
                            />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="visitingTeamName">Visiting Team Name:</label>
                            <input
                                type="text"
                                id="visitingTeamName"
                                name="visitingTeamName"
                                value={formData.visitingTeamName}
                                onChange={handleChange}
                                required
                            />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="visitingTeamYearEra">Visiting Team Year/Era:</label>
                            <input
                                type="text"
                                id="visitingTeamYearEra"
                                name="visitingTeamYearEra"
                                value={formData.visitingTeamYearEra}
                                onChange={handleChange}
                            />
                        </fieldset>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </Form>
        </Container>

    );
};

export default MatchUpForm;