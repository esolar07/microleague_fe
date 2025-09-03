"use client";
import React, {useState} from "react";
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { createMatchUp } from '@/services/api';
import { useRouter } from 'next/navigation';
import type { MatchupCardProps } from '@/types/matchupCard';
import LoadingOverlay from "@/components/layout/LoadingOverlay";

const MatchupCard : React.FC<MatchupCardProps> = ({ sport, homeTeamSeason, homeTeamName, awayTeamSeason, awayTeamName, badges = [], description }) => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const createQuickMatchup = async () => {
       setIsSubmitting(true);
       const matchUpDetails = await createMatchUp({
            sport: sport,
            homeTeamSeason: homeTeamSeason,
            homeTeamName: homeTeamName,
            awayTeamSeason: awayTeamSeason,
            awayTeamName: awayTeamName,
        });
            
        if (matchUpDetails.id) {
            router.push(`/simulate/${matchUpDetails.id}`);
        }
    };

    return (
        isSubmitting ? <LoadingOverlay text="Simulating Matchup..." /> :
        <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              {badges.map((badge, idx) => (
                <Badge key={idx} variant="outline">
                  {badge}
                </Badge>
            ))}
            </div>
            <h3 className="font-semibold">{`${homeTeamSeason} ${homeTeamName} vs ${awayTeamSeason} ${awayTeamName}`}</h3>
            <p className="text-sm text-muted-foreground">
                {description}
            </p>
            <Button variant="outline" size="sm" className="w-full" onClick={createQuickMatchup}>
            Try This Matchup
            </Button>
        </Card>
    );
};

export default MatchupCard;
