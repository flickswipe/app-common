import { Subjects } from "./subjects";
import { SettingType } from "./types/setting";

interface SettingDataGenre {
  id: string;
  settingType: SettingType.Genre;
  value: {
    genres: string[];
  };
  updatedAt: Date;
}

interface SettingDataImdbRating {
  id: string;
  settingType: SettingType.ImdbRating;
  value: {
    min: number | null;
    max: number | null;
  };
  updatedAt: Date;
}

interface SettingDataYear {
  id: string;
  settingType: SettingType.Year;
  value: {
    min: number | null;
    max: number | null;
  };
  updatedAt: Date;
}

export interface UserUpdatedSettingEvent {
  subject: Subjects.UserUpdatedSetting;
  data: SettingDataGenre | SettingDataImdbRating | SettingDataYear;
}
