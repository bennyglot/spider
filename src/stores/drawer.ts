import {makeAutoObservable} from 'mobx';

export interface drawProps {
    isOpen: boolean,
    handleDrawerOpen: () => void 
    handleDrawerClose: () => void
}

 class drawerStore implements drawProps {   
     isOpen = false;

     constructor() {
         makeAutoObservable(this);
     }

     handleDrawerOpen = () => { 
         console.log('trigger handleDrawerOpen');
         this.isOpen = true ;
         console.log(this.isOpen);
        };

     handleDrawerClose = () => { 
        console.log('trigger handleDrawerClose');
         this.isOpen = false;
         console.log(this.isOpen);
         };
    
}

export const DrawerStore = drawerStore;