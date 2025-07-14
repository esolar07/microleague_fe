"use client";
import React, {useState, FormEvent, ChangeEvent, useEffect} from 'react';
import Form from 'next/form'
import Container from "@/components/layout/Container";
import {debug} from "node:util";

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
    const [eras, setEras] = useState<string[]>([]);
    const [homeTeams, setHomeTeams] = useState<string[]>([]);
    const [awayTeams, setAwayTeams] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);

    const getAllSportEras = async (sport: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/seasons/${sport}`);
            if (!response.ok) {
                throw new Error('Failed to fetch sport eras.');
            }
            const data = await response.json();
            setEras(data.data);
            // setError(null);
        } catch (e: any) {
            console.error('Error fetching teams:', e);
            // setError(e.message);
            setEras([]); // Clear teams on error
        }
    }

    const getAllTeamsForEra = async (era: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/seasons/${formData.sport}/${era}`);
            if (!response.ok) {
                throw new Error('Failed to fetch sport eras.');
            }
            const data = await response.json();
            return data.data;
        } catch (e: any) {
            console.error('Error fetching teams:', e);
            return [];
        }
    }

    const handleSelectChange = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        debugger
        if (name === 'sport' && value) {
            getAllSportEras(value)
        }
        if ((name === "homeTeamYearEra" || name === "awayTeamYearEra") && value){
            const teamList = await getAllTeamsForEra(value);
            if (name === "homeTeamYearEra" ) {
                setHomeTeams(teamList);
            }
            if (name === "awayTeamYearEra" ) {
                setAwayTeams(teamList);
            }
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleMatchUpCreation = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);
        alert('Form submitted! Check console for data.');
        try {
            // await fetch(`${process.env.MICROLEAGUE_BASE_API}/matchups`, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(formData),
            // });
        } catch (e) {
            console.error("Form submission error:", e);
            setSubmitMessage("Failed to submit match up form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container>
            <section className="">
                <Form onSubmit={handleMatchUpCreation}>
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
                                            onChange={handleSelectChange}
                                            required
                                        >
                                            <option value="">Select a sport</option>
                                            <option value="football">Football</option>
                                            <option value="basketball">Basketball</option>
                                            <option value="baseball">Baseball</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                    <label htmlFor="homeTeamYearEra" className="block text-sm/6 font-medium text-gray-900">Home Team Season/Era:</label>
                                    <div className="mt-2">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="homeTeamYearEra"
                                            name="homeTeamYearEra"
                                            value={formData.homeTeamName}
                                            onChange={handleSelectChange}
                                            required
                                        >
                                            <option value="">Select Year/Era</option>
                                            {eras.map((era) => (
                                                <option key={era} value={era}>{era}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="homeTeamName"
                                           className="block text-sm/6 font-medium text-gray-900">Home Team Name:</label>
                                    <div className="mt-2">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="homeTeamName"
                                            name="homeTeamName"
                                            value={formData.homeTeamYearEra}
                                            onChange={handleSelectChange}
                                        >
                                            <option value="">Select Home Team</option>
                                            {homeTeams.map((homeTeam) => (
                                                <option key={homeTeam.id} value={homeTeam.name}>{homeTeam.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="visitingTeamYearEra"
                                           className="block text-sm/6 font-medium text-gray-900">Away Team
                                        Year/Era:</label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="visitingTeamYearEra"
                                            name="visitingTeamYearEra"
                                            value={formData.visitingTeamName}
                                            onChange={handleSelectChange}
                                            required
                                        >
                                            <option value="">Select Year/Era</option>
                                            {eras.map((era) => (
                                                <option key={era} value={era}>{era}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="visitingTeamName"
                                           className="block text-sm/6 font-medium text-gray-900">Away Team Name:</label>
                                    <div className="mt-2">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="visitingTeamName"
                                            name="visitingTeamName"
                                            value={formData.visitingTeamYearEra}
                                            onChange={handleSelectChange}
                                        >
                                            <option value="">Select Away Team</option>
                                            {awayTeams.map((awayTeam) => (
                                                <option key={awayTeam.id} value={awayTea.name}>{awayTeam.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <button
                                    type="submit"
                                    className="rounded-lg bg-rose-400 w-100 md:w-64 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled={isSubmitting}
                                > {isSubmitting ? "Creating..." : "Create Match Up"}
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