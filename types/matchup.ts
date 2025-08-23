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

export interface GameInfo {
  headline: string;
}

export interface OpeningParagraph {
  content: string;
}

export interface GameSummary {
  final_score: string;
}

export interface MatchupArticle {
  game_info?: GameInfo;
  opening_paragraph?: OpeningParagraph;
  game_summary?: GameSummary;
}
