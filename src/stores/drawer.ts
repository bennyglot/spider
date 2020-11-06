import { debug } from 'console';
import { makeAutoObservable } from 'mobx';

export interface drawProps {
    isOpen: boolean,
    handleDrawerOpen: () => void
    handleDrawerClose: () => void,
    toggleOpenState: () => void
}

class drawerStore implements drawProps {
    isOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    handleDrawerOpen = () => {
        this.isOpen = true;
    };

    handleDrawerClose = () => {
        this.isOpen = false;
    };

    toggleOpenState = () => {
        this.isOpen = !this.isOpen;
    }
}

export const DrawerStore = drawerStore;