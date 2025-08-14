"use client";
import React from "react";
import { X } from "lucide-react"
import { useRouter } from 'next/navigation';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton
} from "react-share";
import { PeriodSummary, TeamInfo } from "@/types/matchupArticle";

type TeamStats = Record<string, string | number>;

interface Props {
    matchupId: string | null;
    gameDetails: any;
    onClose: () => void;
}

const MatchUpDetailsModal = ({ matchupId, gameDetails, onClose }: Props) => {
    const router = useRouter();
    const periodKey: string = gameDetails.quarter_summaries ? 'quarter' : 'inning';
    const periodSummaries = gameDetails.quarter_summaries || gameDetails.inning_summaries;
    return (
        <section className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center px-6">
            <div className="bg-gray-50 w-full max-w-4xl p-10 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] relative">
                <button
                    className="absolute top-5 left-5 bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600 cursor-pointer"
                    onClick={() => window.open(`/matchups/${matchupId}`, "_blank")}
                >
                    Share Game Simulation
                </button>
                <button onClick={onClose} className="absolute top-5 right-5 text-gray-500 hover:text-black cursor-pointer">
                    <X size={34}/>
                </button>
                <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">
                    <div className="max-w-6xl mx-auto mb-5 px-2 py-10 space-y-10 text-gray-800">
                        <div className="space-y-2">
                            <h1 className="text-3xl text-center font-bold">{gameDetails.game_info.title}</h1>
                            <p className="text-sm text-center italic text-gray-600">{gameDetails.game_info.location}</p>
                            <h2 className="text-2xl text-center font-bold">{gameDetails.game_info.subtitle}</h2>
                        </div>
                        <div className="text-center">
                            <h2 className="mb-5 text-3xl font-bold text-rose-700">Final Score</h2>
                            <p className="text-xl font-semibold">{gameDetails.final_score}</p>
                        </div>
                    </div>
                    <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                        <h2 className="text-xl font-bold text-yellow-700 mb-1">🏆 MVP: {gameDetails.MVP.name}</h2>
                        <p className="text-sm text-gray-700"><strong>Stats:</strong> {gameDetails.MVP.stats}</p>
                        <p className="text-sm italic text-gray-600 mt-1">{gameDetails.MVP.summary}</p>
                    </div>
                    <details className="space-y-4 mt-10">
                        <summary className="text-2xl pb-1">Game Statistics</summary>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(gameDetails.game_statistics).map(([team, stats]) => (
                                <div key={team} className="bg-white p-4 rounded shadow bg-gray-50 border p-4 ">
                                    <h3 className="text-xl font-semibold">{team}</h3>
                                    <ul className="text-sm text-gray-800 mt-2 space-y-1">
                                        {Object.entries(stats as TeamStats).map(([stat, val]) => (
                                            <li key={stat}><strong
                                                className="capitalize">{stat.replace(/_/g, ' ')}:</strong> {val}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </details>
                    <details className="space-y-6 mt-10">
                        <summary className="text-2xl pb-1">Game Summary</summary>
                        {periodSummaries.map((periodSummary: PeriodSummary, periodSummaryIndex: number) => (
                            <div key={periodSummaryIndex} className="bg-gray-50 border p-4 rounded">
                                <h2 className="font-bold text-lg mb-2">
                                    {periodKey === 'quarter' ? `Quarter ${periodSummary.quarter}` : `Inning ${periodSummary.inning}`} :
                                    <span> {periodSummary.score}</span>
                                </h2>
                                <h3 className="font-bold text-md mb-2">Highlights:</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {periodSummary.highlights.map((hl: string, idx: number) => (
                                        <li key={idx}>{hl}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </details>
                    <details className="space-y-4 mt-10">
                        <summary className="text-2xl pb-1">Era Impact Notes</summary>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                            {(Object.entries(gameDetails.teams) as [string, TeamInfo][]).map(([teamName, team]: [string, TeamInfo]) => (
                                <div key={teamName} className="bg-white p-4 rounded shadow bg-gray-50 border p-4 ">
                                    <h2 className="text-center text-xl font-semibold text-grey-600 mb-5">{teamName}</h2>
                                    <p><strong>Coach:</strong> {team.coach}</p>
                                    {/* <p><strong>Record:</strong> {team[`record_2024`]}</p> */}
                                    <p><strong>Era Style:</strong> {team.era_style}</p>
                                    <div className="mt-2">
                                        <p className="font-semibold">Notable Players:</p>
                                        <ul className="list-disc list-inside text-sm text-gray-700">
                                            {team.notable_players.map((player: string) => (
                                                <li key={player}>{player}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className="list-disc list-inside mt-2 bg-white border p-4 rounded">
                            {gameDetails.era_impact_notes.map((note: string, idx: number) => (
                                <p className="mb-3" key={idx}>{note}</p>
                            ))}
                        </ul>
                        <div className="bg-white p-4 rounded shadow bg-gray-50 border p-4">
                            <p className="text-sm text-justify">{gameDetails.game_info.rules_adjustment}</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default MatchUpDetailsModal;