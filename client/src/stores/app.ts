import { makeAutoObservable } from 'mobx';

export interface appProps {
    isLoggedIn: boolean;
    token: string,
    currentLanguage: string
}

export const appAttributes = {
    IS_LOGGED_IN: 'isLoggedIn',
    CURRENT_LANAGUAGE: 'currentLanguage',
    TOKEN: 'token' 
};

export class appStore implements appProps {
    isLoggedIn: boolean;
    currentLanguage: string;
    token: string;

    constructor() {
        this.isLoggedIn = false;
        this.currentLanguage = 'en';
        this.token = '';
        makeAutoObservable(this);
    }

    setCurrentAttribute = (attribute: string, value: any) => this[attribute] = value;
    
}

export const AppStore = appStore;
