import { PeriodSummary, TeamInfo } from "./matchupArticle";

export interface TeamStats {
  final_score?: any;
  points?: number;
  rebounds?: number;
  assists?: number;
}

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

export interface GameDetails {
    game_info: {
      title: string;
      location: string;
      subtitle: string;
      rules_adjustment: string;
    };
    final_score: string;
    MVP: {
      name: string;
      stats: string;
      summary: string;
    };
    home_team: {
      name: string;
      season: string;
      coach: string;
      era_style: string;
      actual_season_record: string;
      notable_players: string[];
      game_statistics: Record<string, TeamStats>;
      box_score: any[];
      injuries: string[];
    };
    away_team: {
      name: string;
      season: string;
      coach: string;
      era_style: string;
      actual_season_record: string;
      notable_players: string[];
      game_statistics: Record<string, TeamStats>;
      box_score: any[];
      injuries: string[];
    };
    game_statistics: Record<string, TeamStats>;
    quarter_summaries?: PeriodSummary[];
    inning_summaries?: PeriodSummary[];
    teams: Record<string, TeamInfo>;
    box_score: any[];
    era_impact_notes: string[];
  };