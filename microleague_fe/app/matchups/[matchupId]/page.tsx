"use client";
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { createMatchUpArticle } from "@/services/api";

interface MatchupArticleProps {
  params: {
    matchupId: string;
  };
}

export default function MatchupArticle() {
  const params = useParams();
  if (!params) {
    throw new Error("Matchup ID is required");
  }
  const {matchupId} = params;
  const [matchupArticle, setMatchupArticle] = useState({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMatchup() {

      try {
        const matchupArticleDetails = await createMatchUpArticle(Number(matchupId));
        if (!matchupArticleDetails) {
          throw new Error('Failed to fetch matchup article details');
        }
        console.log("Matchup Article Details:", matchupArticleDetails.data)
        setMatchupArticle(matchupArticleDetails.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching matchup:", error);
      }
    }
    getMatchup();
  }, []); 

  return (
      <main className="grid min-h-screen p-8 pb-20 gap-16 sm:p-20">
        {!loading  ? (
              <h1 className="text-3xl font-bold mb-4">{matchupArticle.game_info?.headline}</h1>
        ): (
            <p className="text-red-500">Error loading matchup article.</p>
        )}
       </main>
  );
}
