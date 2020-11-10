import { makeAutoObservable } from 'mobx';

export interface appProps {
    isLoggedIn: boolean;
    currentLanguage: string
}

export class appStore implements appProps {
    isLoggedIn: boolean;
    currentLanguage: string

    constructor() {
        this.isLoggedIn = false;
        this.currentLanguage = 'en';
        makeAutoObservable(this);
    }

    setCurrentLangauge = (lang: string): void => {
        this.currentLanguage = lang;
    }
}

export const AppStore = appStore;
