export interface PeriodSummary {
  quarter?: number;
  inning?: number;
  score: string;
  highlights: string[];
}

export interface TeamInfo {
  coach: string;
  era_style: string;
  notable_players: string[];
}

export interface GameInfo {
  title: string;
  location: string;
  subtitle: string;
  rules_adjustment: string;
}

export interface GameDetails {
  game_info: GameInfo;
  final_score: string;
  MVP: { name: string; stats: string; summary: string };
  game_statistics: Record<string, Record<string, string | number>>;
  quarter_summaries?: PeriodSummary[];
  inning_summaries?: PeriodSummary[];
  teams: Record<string, TeamInfo>;
  era_impact_notes: string[];
}
