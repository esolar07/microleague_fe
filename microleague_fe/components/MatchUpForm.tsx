"use client";
import React, {useState, FormEvent, ChangeEvent} from 'react';
import Form from 'next/form'
import Container from "@/components/layout/Container";
import {createMatchUp, fetchSeasons, fetchTeams} from '@/services/api';
import { MatchUp, Team } from '@/types/matchup';

import {debug} from "node:util";

const MatchUpForm = () => {
    const [formData, setFormData] = useState<MatchUp>({
        sport: '',
        homeTeamSeason: '',
        homeTeamName: '',
        awayTeamSeason: '',
        awayTeamName: '',
    });
    const [seasons, setSeasons] = useState<string[]>([]);
    const [homeTeams, setHomeTeams] = useState<Team[]>([]);
    const [awayTeams, setAwayTeams] = useState<Team[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);

    const handleSportChange = async (sport: string) => {
        setFormData((prevData) => ({
            ...prevData, sport,
        }));
        setHomeTeams([]);
        setAwayTeams([]);
        const response = await fetchSeasons(sport);
        setSeasons(response);
    }

    const handleSeasonChange = async (season: string, isHome: boolean) => {
        const teams = await fetchTeams(formData.sport, season);
        if (isHome) {
            setFormData(prev => ({ ...prev, homeTeamSeason: season, homeTeamName: "" }));
            setHomeTeams(teams);
        }
        if (!isHome) {
            setFormData(prev => ({ ...prev, awayTeamSeason: season, awayTeamName: "" }));
            setAwayTeams(teams);
        }
    };

    const handleTeamChange = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value,}));
    };

    const handleMatchUpCreation = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);
        // const matchUpDetails = await createMatchUp(formData)
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
                                            onChange={(e) => handleSportChange(e.target.value)}
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
                                    <label htmlFor="homeTeamSeason" className="block text-sm/6 font-medium text-gray-900">Home Team Season:</label>
                                    <div className="mt-2">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="homeTeamSeason"
                                            name="homeTeamSeason"
                                            value={formData.homeTeamSeason}
                                            onChange={(e) => handleSeasonChange(e.target.value, true)}
                                            required
                                        >
                                            <option value="">Select Season</option>
                                            {seasons.map((season) => (
                                                <option key={season} value={season}>{season}</option>
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
                                            value={formData.homeTeamName}
                                            onChange={handleTeamChange}
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
                                    <label htmlFor="awayTeamSeason"
                                           className="block text-sm/6 font-medium text-gray-900">Away Team Season:</label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="awayTeamSeason"
                                            name="awayTeamSeason"
                                            value={formData.awayTeamSeason}
                                            onChange={(e) => handleSeasonChange(e.target.value, false)}
                                            required
                                        >
                                            <option value="">Select Season</option>
                                            {seasons.map((season) => (
                                                <option key={season} value={season}>{season}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="awayTeamName"
                                           className="block text-sm/6 font-medium text-gray-900">Away Team Name:</label>
                                    <div className="mt-2">
                                        <select
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            id="awayTeamName"
                                            name="awayTeamName"
                                            value={formData.awayTeamName}
                                            onChange={handleTeamChange}
                                        >
                                            <option value="">Select Away Team</option>
                                            {awayTeams.map((awayTeam) => (
                                                <option key={awayTeam.id} value={awayTeam.name}>{awayTeam.name}</option>
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