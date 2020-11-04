import { makeAutoObservable } from 'mobx';
import { LanguageKeys } from '../common/constans';

/**
 * Store to hold settings
 */
export class SettingStore {

  constructor() {
    makeAutoObservable(this);
  }

  /** Holds current locale string */
  locale = LanguageKeys.en;

  /** Hold status of side drawer */
  isDrawerOpen = false;

  /** set local in store */
  setLocale(locale: string): void {
    this.locale = locale;
  }

  /** Opens drawer */
  openDrawer(): void {
    this.isDrawerOpen = true;
  }

  /** Closes drawer */
  closeDrawer(): void {
    this.isDrawerOpen = false;
  }
}

export const settingStore = new SettingStore();
