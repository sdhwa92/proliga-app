import {ClubModel} from './club.model';

export interface PlayerModel {
  player_id: number;
  first_name: string;
  last_name: string;
  email: string;
  position_id: number;
  goals: number;
  photo_url: string;
  user_type_id: number;
  current_club: ClubModel;
  nationality: string;
}