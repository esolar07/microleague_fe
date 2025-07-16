"use client";
import React, {useState, FormEvent, ChangeEvent} from 'react';
import Form from 'next/form'
import Container from "@/components/layout/Container";
import MatchUpDetailsModal from "@/components/MatchUpDetailsModal";
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
    const [gameDetails, setGameDetails] = useState({})
//     const [gameDetails, setGameDetails] = useState({
//         "game_info": {
//         "title": "2024 Chiefs at 2024 Cowboys — Era-Balanced Gridiron Showdown",
//             "subtitle": "Modern Offenses Meet Classic Grit Under Even Rules",
//             "location": "AT&T Stadium, Arlington, TX",
//             "rules_adjustment": "Game played under hybrid rules blending 2024 play speed, OT rules, and player safety measures with greater tolerance for physical coverage and hitting (inspired by late '90s-early 2000s), hash mark spacing of 2024, and classic kickoff returns."
//     },
//             "teams": {
//                 "Dallas Cowboys": {
//                     "coach": "Mike McCarthy",
//                     "actual_season_record": "12-5 (NFC East Champions, 2023 Season)",
//                     "notable_players": [
//                         "Dak Prescott (QB)",
//                         "CeeDee Lamb (WR)",
//                         "Micah Parsons (LB/DE)",
//                         "Trevon Diggs (CB)",
//                         "Tony Pollard (RB)"
//                     ],
//                     "era_style": "Aggressive spread offense with dynamic defensive front, blend of vertical passing and power running"
//                 },
//                 "Kansas City Chiefs": {
//                     "coach": "Andy Reid",
//                     "actual_season_record": "11-6 (AFC Champions, 2023 Season; Super Bowl LVIII Winners)",
//                     "notable_players": [
//                         "Patrick Mahomes (QB)",
//                         "Travis Kelce (TE)",
//                         "Chris Jones (DT)",
//                         "Isiah Pacheco (RB)",
//                         "L'Jarius Sneed (CB)"
//                     ],
//                     "era_style": "High-octane West Coast/spread hybrid, creative play-calling, tempo offense, opportunistic defense"
//                 }
//             },
//     "quarter_summaries": [
//         {
//             "quarter": 1,
//             "highlights": [
//                 "Chiefs receive the opening kick — Mahomes mixes quick passes and a Pacheco draw, Mahomes finds Kelce on a classic seam for 18 yds.",
//                 "Cowboys' defense pressures inside the red zone; Chiefs settle for a 36-yard Butker FG.",
//                 "Dallas answers with a methodical drive, featuring Pollard outside zone runs and Prescott to Lamb crossing routes; Aubrey nails a 42-yard FG.",
//                 "Micah Parsons notches a third-down sack as Chiefs’ next drive stalls."
//             ],
//             "score": "Chiefs 3 – Cowboys 3"
//         },
//         {
//             "quarter": 2,
//             "highlights": [
//                 "Mahomes improvises on 3rd down, finds Rice for 27 yds. Pacheco powers into the end zone from 6 yds out to cap a 72-yd drive.",
//                 "Cowboys counter with a 9-play drive highlighted by Prescott scrambling on a broken play for 19 yds; he hits Ferguson for a 12-yd TD.",
//                 "Defenses tighten — Trevon Diggs picks off Mahomes on an out route with 2:14 left, setting up a short field for Dallas.",
//                 "Aubrey converts a 28-yard FG after Chiefs’ red zone stand."
//             ],
//             "score": "Chiefs 10 – Cowboys 13"
//         },
//         {
//             "quarter": 3,
//             "highlights": [
//                 "Chiefs’ defensive line clamps down — Karlaftis and Jones combine for a sack, forcing Dallas 3-and-out.",
//                 "Mahomes orchestrates a long drive aided by a creative screen to Toney (21 yds); Mahomes scrambles then zips a TD to Kelce over zone coverage.",
//                 "Cowboys' next drive stalls after a 12-yd sack by Jones."
//             ],
//             "score": "Chiefs 17 – Cowboys 13"
//         },
//         {
//             "quarter": 4,
//             "highlights": [
//                 "Dallas regains momentum: Lamb makes a diving 31-yd catch; Pollard rumbles for 17 yds on power sweep.",
//                 "Prescott sneaks for a 1-yd TD on 4th & goal. Cowboys up 20–17.",
//                 "Chiefs, stymied on run, face 4th & 7 at midfield — Mahomes escapes pressure, finds Kelce for 16 yds.",
//                 "With 1:03 left, Butker ties it with a 44-yd FG after a clutch 15-yd Mahomes run.",
//                 "Dallas drives for dramatic ending: Prescott targets Lamb, but Sneed breaks up a deep ball. Aubrey attempts a 46-yd FG at the gun—it's GOOD!"
//             ],
//             "score": "Chiefs 20 – Cowboys 23"
//         }
//     ],
//         "final_score": "Cowboys 23, Chiefs 20",
//             "game_statistics": {
//                 "Dallas Cowboys": {
//                     "team_name": "Dallas Cowboys",
//                     "total_yards": 297,
//                     "passing_yards": 207,
//                     "rushing_yards": 90,
//                     "turnovers": 1,
//                     "sacks_allowed": 4,
//                     "time_of_possession": "30:51"
//                 },
//                 "Kansas City Chiefs": {
//                     "team_name": "Kansas City Chiefs",
//                     "total_yards": 326,
//                     "passing_yards": 254,
//                     "rushing_yards": 72,
//                     "turnovers": 1,
//                     "sacks_allowed": 3,
//                     "time_of_possession": "29:09"
//                 }
//             },
//     "era_impact_notes": [
//         "Defensive backs were permitted to be more physical, slightly reducing quick-hit YAC compared to modern-only rules.",
//         "Classic kickoff returns allowed for strategic field position—Cowboys broke one near midfield, setting up a key drive.",
//         "Modern timing rules (shorter play clock, no TV timeouts every change) made for fast 2-minute drills and uptempo play.",
//         "OT rules (2-possession if field goals first) were discussed but not required; both teams played for the win in regulation.",
//         "QB mobility and improvisation thrived despite more physical fronts accessible in hybrid rules."
//     ],
//         "MVP": {
//         "name": "Dak Prescott",
//             "stats": "24/34, 264 yards, 2 TD (1 pass, 1 rush), 0 INTs, 22 rush yards",
//             "summary": "Prescott led confident, mistake-free football in the pocket and on improvisation. His clutch decisions extended drives, including a late sneak TD and critical completions to CeeDee Lamb under duress. Displayed both old-school toughness and modern poise to keep Dallas in control."
//     }
// }
//     );
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
        const matchUpDetails = await createMatchUp(formData)
        // const matchUpDetails = {
        //     "game_info": {
        //         "title": String,
        //         "subtitle": String,
        //         "location": String,
        //         "rules_adjustment": String
        //     },
        //     "teams": {
        //         "home_team": {
        //             "coach": String,
        //             "season_record": String,
        //             "notable_players": Array ,
        //             "era_style": String
        //         },
        //         "away_team": {
        //             "coach": String,
        //             "season_record": String,
        //             "notable_players": Array ,
        //             "era_style": String
        //         }
        //     },
        //     "quarter_summaries": [
        //         {
        //             "quarter": Int,
        //             "highlights": Array,
        //             "score": String
        //         },
        //     ],
        //     "final_score": {
        //         "home_team": Int,
        //         "away_team": Int
        //     },
        //     "game_statistics": {
        //         "home_team": {
        //             "total_yards": Int,
        //             "passing_yards": Int,
        //             "rushing_yards": Int,
        //             "turnovers": Int,
        //             "sacks_allowed": Int,
        //             "time_of_possession": String
        //         },
        //         "away_team": {
        //             "total_yards": Int,
        //             "passing_yards": Int,
        //             "rushing_yards": Int,
        //             "turnovers": Int,
        //             "sacks_allowed": Int,
        //             "time_of_possession": String
        //         },
        //     },
        //     "era_impact_notes":Array,
        //     "MVP": {
        //         "name": String,
        //         "stats": String,
        //         "summary": String
        //     }
        // }
        debugger

        console.log(matchUpDetails)
        setGameDetails(matchUpDetails.data);
        setShowModal(true);
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
            {showModal && (
                <MatchUpDetailsModal gameDetails={gameDetails} onClose={() => setShowModal(false)} />
            )}
            {/*<section>*/}
            {/*    <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">*/}
            {/*        <div className="max-w-6xl mx-auto px-4 py-10 space-y-10 text-gray-800">*/}
            {/*            <div className="text-center space-y-2">*/}
            {/*                <h3 className="text-3xl font-bold">{gameDetails.game_info.title}</h3>*/}
            {/*                <p className="text-sm italic text-gray-600">{gameDetails.game_info.location}</p>*/}
            {/*                <p className="text-sm text-gray-500">{gameDetails.game_info.rules_adjustment}</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="text-center">*/}
            {/*            <h2 className="text-2xl font-bold text-rose-700">Final Score</h2>*/}
            {/*            <p className="text-lg font-semibold">{`Cowboys ${gameDetails.final_score.Cowboys} - ${gameDetails.final_score.Chiefs} Chiefs`}</p>*/}
            {/*        </div>*/}
            {/*        <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">*/}
            {/*            <h2 className="text-xl font-bold text-yellow-700 mb-1">🏆 MVP: {gameDetails.MVP.name}</h2>*/}
            {/*            <p className="text-sm text-gray-700"><strong>Stats:</strong> {gameDetails.MVP.stats}</p>*/}
            {/*            <p className="text-sm italic text-gray-600 mt-1">{gameDetails.MVP.summary}</p>*/}
            {/*        </div>*/}
            {/*        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">*/}
            {/*            {Object.entries(gameDetails.teams).map(([teamName, team]) => (*/}
            {/*                <div key={teamName} className="bg-white shadow rounded p-6">*/}
            {/*                    <h2 className="text-xl font-semibold text-rose-600">{teamName}</h2>*/}
            {/*                    <p><strong>Coach:</strong> {team.coach}</p>*/}
            {/*                    <p><strong>Record:</strong> {team[`record_2024`]}</p>*/}
            {/*                    <p><strong>Era Style:</strong> {team.era_style}</p>*/}
            {/*                    <div className="mt-2">*/}
            {/*                        <p className="font-semibold">Notable Players:</p>*/}
            {/*                        <ul className="list-disc list-inside text-sm text-gray-700">*/}
            {/*                            {team.notable_players.map((player: string) => (*/}
            {/*                                <li key={player}>{player}</li>*/}
            {/*                            ))}*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <details className="space-y-6 mt-10">*/}
            {/*            <summary className="text-2xl font-bold border-b pb-1">Quarter Summaries</summary>*/}
            {/*            {gameDetails.quarter_summaries.map((q) => (*/}
            {/*                <div key={q.quarter} className="bg-gray-50 border p-4 rounded">*/}
            {/*                    <h3 className="font-bold text-lg mb-2">Q{q.quarter}: <span*/}
            {/*                        className="text-rose-500">{q.score}</span></h3>*/}
            {/*                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">*/}
            {/*                        {q.highlights.map((hl: string, idx: number) => (*/}
            {/*                            <li key={idx}>{hl}</li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </details>*/}
            {/*        <details className="space-y-4 mt-10">*/}
            {/*            <summary className="text-2xl font-bold border-b pb-1">Game Statistics</summary>*/}
            {/*            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
            {/*                {Object.entries(gameDetails.game_statistics).map(([team, stats]) => (*/}
            {/*                    <div key={team} className="bg-white p-4 rounded shadow">*/}
            {/*                        <h3 className="text-xl font-semibold text-indigo-600">{team}</h3>*/}
            {/*                        <ul className="text-sm text-gray-800 mt-2 space-y-1">*/}
            {/*                            {Object.entries(stats).map(([stat, val]) => (*/}
            {/*                                <li key={stat}><strong*/}
            {/*                                    className="capitalize">{stat.replace(/_/g, ' ')}:</strong> {val}</li>*/}
            {/*                            ))}*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </details>*/}
            {/*        <details className="space-y-4 mt-10">*/}
            {/*            <summary className="text-2xl font-bold border-b pb-1">Era Impact Notes</summary>*/}
            {/*            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">*/}
            {/*                {gameDetails.era_impact_notes.map((note: string, idx: number) => (*/}
            {/*                    <li key={idx}>{note}</li>*/}
            {/*                ))}*/}
            {/*            </ul>*/}
            {/*        </details>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </Container>

    );
};

export default MatchUpForm;