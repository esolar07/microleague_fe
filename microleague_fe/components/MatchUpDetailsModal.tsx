"use client";
import React from "react";

interface Props {
    gameDetails: GameDetails;
    onClose: () => void;
}

const MatchUpDetailsModal = ({ gameDetails, onClose }: Props) => {
    return (
        <section className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] relative">

                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
                    {/*<X size={24}/>*/}
                </button>
                <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">
                    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10 text-gray-800">
                        <div className="space-y-2">
                            <h3 className="text-3xl text-center font-bold">{gameDetails.game_info.title}</h3>
                            <h4 className="text-3xl text-center font-bold">{gameDetails.game_info.subtitle}</h4>
                            <p className="text-sm text-center italic text-gray-600">{gameDetails.game_info.location}</p>
                            <p className="text-sm text-justify text-gray-500">{gameDetails.game_info.rules_adjustment}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-rose-700">Final Score</h2>
                        <p className="text-lg font-semibold">{gameDetails.final_score}</p>
                    </div>
                    <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                        <h2 className="text-xl font-bold text-yellow-700 mb-1">🏆 MVP: {gameDetails.MVP.name}</h2>
                        <p className="text-sm text-gray-700"><strong>Stats:</strong> {gameDetails.MVP.stats}</p>
                        <p className="text-sm italic text-gray-600 mt-1">{gameDetails.MVP.summary}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                        {Object.entries(gameDetails.teams).map(([teamName, team]) => (
                            <div key={teamName} className="bg-white shadow rounded p-6">
                                <h2 className="text-center text-xl font-semibold text-grey-600 mb-5">{teamName}</h2>
                                <p><strong>Coach:</strong> {team.coach}</p>
                                <p><strong>Record:</strong> {team[`record_2024`]}</p>
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
                    <details className="space-y-6 mt-10">
                        <summary className="text-2xl font-bold border-b pb-1">Quarter Summaries</summary>
                        {gameDetails.quarter_summaries.map((quarter_summary) => (
                            <div key={quarter_summary.quarter} className="bg-gray-50 border p-4 rounded">
                                <h3 className="font-bold text-lg mb-2">Q{quarter_summary.quarter}: <span
                                    className="text-rose-500">{quarter_summary.score}</span></h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {quarter_summary.highlights.map((hl: string, idx: number) => (
                                        <li key={idx}>{hl}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </details>
                    <details className="space-y-4 mt-10">
                        <summary className="text-2xl font-bold border-b pb-1">Game Statistics</summary>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(gameDetails.game_statistics).map(([team, stats]) => (
                                <div key={team} className="bg-white p-4 rounded shadow bg-gray-50 border p-4 ">
                                    <h3 className="text-xl font-semibold text-indigo-600">{team}</h3>
                                    <ul className="text-sm text-gray-800 mt-2 space-y-1">
                                        {Object.entries(stats).map(([stat, val]) => (
                                            <li key={stat}><strong
                                                className="capitalize">{stat.replace(/_/g, ' ')}:</strong> {val}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </details>
                    <details className="space-y-4 mt-10">
                        <summary className="text-2xl font-bold border-b pb-1">Era Impact Notes</summary>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-2 bg-gray-50 border p-4 rounded">
                            {gameDetails.era_impact_notes.map((note: string, idx: number) => (
                                <li key={idx}>{note}</li>
                            ))}
                        </ul>
                    </details>
                </div>
            </div>
        </section>
)
}

export default MatchUpDetailsModal;