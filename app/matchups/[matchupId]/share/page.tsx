"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import { useParams } from 'next/navigation';
import { createMatchUpArticle } from "@/services/api";
import {
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
  import Head from 'next/head';
  import { MatchupArticle as MatchupArticleType } from "@/types/matchup";

export default function MatchupArticle() {
  const params = useParams();
  if (!params) {
    throw new Error("Matchup ID is required");
  }
  const {matchupId} = params;
  const [matchupArticle, setMatchupArticle] = useState<MatchupArticleType>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
     if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
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
    <Container>
      <main className="grid min-h-screen p-8 pb-20 gap-16 sm:p-20">
          {!loading  ? (
            <section className="max-w-[1200px] w-full mx-auto px-4 py-4 xl:px-20">
              <Head>
                <meta property="og:type" content="article" />
                <title>{matchupArticle.game_info?.headline}</title>
                <meta
                  name="description"
                  content={matchupArticle.opening_paragraph?.content || ""}
                />
                <meta
                  property="og:title"
                  content={matchupArticle.game_info?.headline || ""}
                />
                <meta
                  property="og:description"
                  content={matchupArticle.opening_paragraph?.content || ""}
                />
              </Head>
              <div className="flex flex-row justify-end mb-4">
                <EmailShareButton className="mx-2" url={currentUrl} subject={matchupArticle.game_info?.headline}> 
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <TwitterShareButton className="mx-2"  url={currentUrl} title={matchupArticle.game_info?.headline}> 
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton className="mx-2"  url={currentUrl} title={matchupArticle.game_info?.headline}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </div>
              <article className="prose prose-lg max-w-4xl mx-auto mt-10">
                <h1 className="text-3xl font-bold mb-4">{matchupArticle.game_info?.headline}</h1>
                <h3 className="text-xl font-semibold mb-2">{matchupArticle.game_summary?.final_score}</h3>
                <p>{matchupArticle.opening_paragraph?.content}</p>
                <p>{matchupArticle.game_summary?.final_score}</p>
              </article>
            </section>
          ): (
              <p className="text-red-500">Error loading matchup article.</p>
          )}
       </main>
       </Container>
  );
}
