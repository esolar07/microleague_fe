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
            <section className="">
                <Form onSubmit={handleSubmit}>
                    <div className="space-y-12 max-w-[800px] mx-auto">
                        <div className="border-b border-red-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900 text-center">Create Your Fantasy
                                Match Up.</h2>
                            <p className="mt-1 text-sm/6 text-gray-600 text-center">Select a sports team from any
                                era.</p>
                            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="sport"
                                           className="block text-sm/6 font-medium text-gray-900">Sport:</label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="sport"
                                            name="sport"
                                            value={formData.sport}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option>Football</option>
                                            <option>Basketball</option>
                                            <option>Baseball</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="homeTeamName" className="block text-sm/6 font-medium text-gray-900">Home
                                        Year/Era:</label>
                                    <div className="mt-2">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="homeTeamName"
                                            name="homeTeamName"
                                            value={formData.homeTeamName}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option>2001</option>
                                            <option>1991</option>
                                            <option>1981</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="homeTeamYearEra"
                                           className="block text-sm/6 font-medium text-gray-900">Home Team Name:</label>
                                    <div className="mt-2">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="homeTeamYearEra"
                                            name="homeTeamYearEra"
                                            value={formData.homeTeamYearEra}
                                            onChange={handleChange}
                                        >
                                            <option>Dallas Cowboys</option>
                                            <option>Miami Dolphins</option>
                                            <option>New York Giants</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="visitingTeamName"
                                           className="block text-sm/6 font-medium text-gray-900">Away Team
                                        Year/Era:</label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="visitingTeamName"
                                            name="visitingTeamName"
                                            value={formData.visitingTeamName}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option>2001</option>
                                            <option>1991</option>
                                            <option>1981</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="visitingTeamYearEra"
                                           className="block text-sm/6 font-medium text-gray-900">Away Team Name:</label>
                                    <div className="mt-2">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="visitingTeamYearEra"
                                            name="visitingTeamYearEra"
                                            value={formData.visitingTeamYearEra}
                                            onChange={handleChange}
                                        >
                                            <option>Dallas Cowboys</option>
                                            <option>Miami Dolphins</option>
                                            <option>New York Giants</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <button
                                    type="submit"
                                    className="rounded-lg bg-rose-400 w-100 md:w-64 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Submit
                                </button>
                            </fieldset>
                        </div>
                    </div>
                </Form>
            </section>
        </Container>

    );
};

export default MatchUpForm;