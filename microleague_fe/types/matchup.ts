export interface MatchUp {
    sport: string;
    homeTeamSeason: string;
    homeTeamName: string;
    awayTeamSeason: string;
    awayTeamName: string;
}

export interface Team {
    id: string;
    name: string;
    image?: string;
}