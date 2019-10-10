import { ClubDetails } from './club-details';

export class PlayerDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  position_id: number;
  goals: number;
  photo_key: string;
  user_type_id: number;
  current_club: ClubDetails;
  nationality: string;
}
