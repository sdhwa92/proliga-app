export interface ClubModel {
  club_id: number;
  club_name: string;
  club_desc: string;
  club_logo_url: string;
  won: number;
  lost: number;
  drawn: number;
  goals_for: number;
  goals_against: number;
  points: number;
  max_players: number;
  league_id: number;
  current_season_id: number;
}
