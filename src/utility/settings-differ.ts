import { SettingType } from '../events/types/setting';
import {
    AnySetting, AudioLanguagesSetting, CountrySetting, GenresSetting, MinMax, RatingSetting,
    ReleaseDateSetting, RuntimeSetting, StreamLocationsSetting
} from '../events/user-updated-setting';

type whitelist = {
  [genre: string]: boolean;
};

/**
 * Returns true if strings are different
 */
const stringsAreDifferent = (a: string, b: string) => a !== b;

/**
 * Returns true if limits are different
 */
const limitsAreDifferent = (a: MinMax<any>, b: MinMax<any>) =>
  a["min"] !== b["min"] || a["max"] !== b["max"];

/**
 * Returns true if whitelists are different
 */
const whitelistsAreDifferent = (a: whitelist, b: whitelist) => {
  if (a.length !== b.length) {
    return false;
  }

  for (const [key, value] of Object.entries(a)) {
    if (b[key] !== value) {
      return false;
    }
  }

  return true;
};

/**
 * Returns true if a setting has changed
 *
 * @param settingType type of setting to compare
 * @param a existing value
 * @param b new value
 */
export function settingsDiffer(
  settingType: SettingType,
  a: AnySetting["value"],
  b: AnySetting["value"]
): boolean {
  switch (settingType) {
    case SettingType.Country:
      return stringsAreDifferent(
        a as CountrySetting["value"],
        b as CountrySetting["value"]
      );

    case SettingType.Genres:
      return whitelistsAreDifferent(
        a as GenresSetting["value"],
        b as GenresSetting["value"]
      );

    case SettingType.AudioLanguages:
      return whitelistsAreDifferent(
        a as AudioLanguagesSetting["value"],
        b as AudioLanguagesSetting["value"]
      );

    case SettingType.StreamLocations:
      return whitelistsAreDifferent(
        a as StreamLocationsSetting["value"],
        b as StreamLocationsSetting["value"]
      );

    case SettingType.Rating:
      return limitsAreDifferent(
        a as RatingSetting["value"],
        b as RatingSetting["value"]
      );

    case SettingType.ReleaseDate:
      a = a as ReleaseDateSetting["value"];
      b = b as ReleaseDateSetting["value"];

      if (a.min instanceof Date) {
        a.min = a.min.getTime();
      }
      if (a.max instanceof Date) {
        a.max = a.max.getTime();
      }
      if (b.min instanceof Date) {
        b.min = b.min.getTime();
      }
      if (b.max instanceof Date) {
        b.max = b.max.getTime();
      }

      return limitsAreDifferent(a, b);

    case SettingType.Runtime:
      return limitsAreDifferent(
        a as RuntimeSetting["value"],
        b as RuntimeSetting["value"]
      );

    default:
      throw new Error(`Can't compare setting ${settingType}`);
  }
}
