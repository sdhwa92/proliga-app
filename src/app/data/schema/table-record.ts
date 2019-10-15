export class TableRecord {
  id: number;
  name: string;
  logo_key: string;
  played: number;
  won: number;
  lost: number;
  drawn: number;
  goals_for: number;
  goals_against: number;
  points: number;
  league_id: number;
  current_season_id: number;
  last_five: number[];
}
