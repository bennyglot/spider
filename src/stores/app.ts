import {makeAutoObservable} from 'mobx';

export interface appProps {
    isLoggedIn: boolean;
}
 
export class appStore implements appProps {
    isLoggedIn: boolean;

    constructor() {
        this.isLoggedIn = false;
        makeAutoObservable(this);
    }
}

export const AppStore = new appStore();
    