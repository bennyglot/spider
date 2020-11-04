import {makeAutoObservable} from 'mobx';

export interface drawProps {
    isOpen: boolean,
    handleDrawerOpen: () => void 
    handleDrawerClose: () => void
}

 class drawerStore implements drawProps {
     isOpen: boolean

     constructor() {
         this.isOpen = false;
         makeAutoObservable(this);
     }

     handleDrawerOpen() { this.isOpen = true };

     handleDrawerClose() { this.isOpen = false };
    
}

export const DrawerStore = new drawerStore();