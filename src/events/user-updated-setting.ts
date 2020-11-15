import { iso6391 } from "../iso6391";
import { Subjects } from "./subjects";
import { SettingType } from "./types/setting";
export interface MinMax<T> {
    min?: T;
    max?: T;
}
export interface CountrySetting {
    settingType: SettingType.Country;
    user: string;
    value: string;
    updatedAt: Date;
}
export interface GenresSetting {
    settingType: SettingType.Genres;
    user: string;
    value: {
        [genre: string]: boolean;
    };
    updatedAt: Date;
}
export interface LanguagesSetting {
    settingType: SettingType.Languages;
    user: string;
    value: Record<iso6391, boolean>;
    updatedAt: Date;
}
export interface StreamLocationsSetting {
    settingType: SettingType.StreamLocations;
    user: string;
    value: {
        [streamLocation: string]: boolean;
    };
    updatedAt: Date;
}
export interface RatingSetting {
    settingType: SettingType.Rating;
    user: string;
    value: MinMax<number>;
    updatedAt: Date;
}
export interface ReleaseDateSetting {
    settingType: SettingType.ReleaseDate;
    user: string;
    value: MinMax<Date | number>;
    updatedAt: Date;
}
export interface RuntimeSetting {
    settingType: SettingType.Runtime;
    user: string;
    value: MinMax<number>;
    updatedAt: Date;
}
export declare type AnySetting = CountrySetting | GenresSetting | LanguagesSetting | StreamLocationsSetting | RatingSetting | ReleaseDateSetting | RuntimeSetting;
export interface UserUpdatedSettingEvent {
    subject: Subjects.UserUpdatedSetting;
    data: AnySetting;
}
