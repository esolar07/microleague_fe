"use client";
import React, {useState, FormEvent, ChangeEvent} from 'react';
import Container from "@/components/layout/Container";
import MatchUpDetailsModal from "@/components/MatchUpDetailsModal";
import {createMatchUp, fetchSeasons, fetchTeams, sendMatchUpToDiscord} from '@/services/api';
import { MatchUp, Team } from '@/types/matchup';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import LoadingOverlay from "@/components/layout/LoadingOverlay";

const MatchUpForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<MatchUp>({
        sport: '',
        homeTeamSeason: '',
        homeTeamName: '',
        awayTeamSeason: '',
        awayTeamName: '',
    });
    const [matchupId, setMatchupId] = useState<string | null>(null);
    const [gameDetails, setGameDetails] = useState({});
    const [seasons, setSeasons] = useState<string[]>([]);
    const [homeTeams, setHomeTeams] = useState<Team[]>([]);
    const [awayTeams, setAwayTeams] = useState<Team[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleSportChange = async (sport: string) => {
        setFormData((prevData) => ({
            ...prevData, sport,
        }));
        setHomeTeams([]);
        setAwayTeams([]);
        const response = await fetchSeasons(sport);
        setSeasons(response);
    }
    const handleHomeTeamSeasonChange = async (season: string, isHome: boolean) => {
        setFormData(prev => ({ ...prev, homeTeamSeason: season, homeTeamName: "" }));
        const teams = await fetchTeams(formData.sport, season);
        setHomeTeams(teams);
    };
    const handleAwayTeamSeasonChange = async (season: string, isHome: boolean) => {
        setFormData(prev => ({ ...prev, awayTeamSeason: season, awayTeamName: "" }));
        const teams = await fetchTeams(formData.sport, season);
        setAwayTeams(teams);
    };


    const handleTeamChange = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value,}));
    };

    const handleMatchUpCreation = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);
        const matchUpDetails = await createMatchUp(formData)
        // setShowModal(true);
        console.log(matchUpDetails)
        if (matchUpDetails.id) {
            sendMatchUpToDiscord(matchUpDetails);
            router.push(`/simulate/${matchUpDetails.id}`);
        }
        // setGameDetails(matchUpDetails.data);
    };

    return (
        <Container>
            <section className="">
                <form onSubmit={handleMatchUpCreation}>
                    <div className="space-y-12 max-w-[800px] mx-auto">
                        <div className="border-b border-red-900/10 pb-12">
                            <h1 className="mb-5 text-3xl font-semibold text-gray-900 text-center">Simulate a Cross-era Fantasy Match Up.</h1>
                            <h2 className="mt-1 text-2xl text-gray-600 text-center">Select a sports team from any era.</h2>
                            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="sport" className="block text-md font-medium text-gray-900">Sport:</label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            id="sport"
                                            name="sport"
                                            value={formData.sport}
                                            onChange={(e) => {handleSportChange(e.target.value)}}
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
                                    <label htmlFor="homeTeamSeason" className="block text-md font-medium text-gray-900">Home Team Season:</label>
                                    <div className="mt-2">
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            id="homeTeamSeason"
                                            name="homeTeamSeason"
                                            value={formData.homeTeamSeason}
                                            onChange={(e) => handleHomeTeamSeasonChange(e.target.value, true)}
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
                                    <label htmlFor="homeTeamName" className="block text-md font-medium text-gray-900">Home Team Name:</label>
                                    <div className="mt-2">
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                    <label htmlFor="awayTeamSeason" className="block text-md font-medium text-gray-900">Away Team Season:</label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            id="awayTeamSeason"
                                            name="awayTeamSeason"
                                            value={formData.awayTeamSeason}
                                            onChange={(e) => handleAwayTeamSeasonChange(e.target.value, false)}
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
                                           className="block text-md font-medium text-gray-900">Away Team Name:</label>
                                    <div className="mt-2">
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                <Button type="submit" className="w-100 md:w-64 px-3 py-2 cursor-pointer" disabled={isSubmitting}>
                                    Simulate Match Up
                                </Button>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </section>
            {isSubmitting && (
                <LoadingOverlay text="Simulating Match Up..."/>
            )}
        </Container>
    );
};

export default MatchUpForm;