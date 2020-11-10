import { createContext } from "react";
import { AppStore } from './app';
import { DrawerStore } from './drawer';

export const storesContext = createContext({
    appStore: new AppStore(),
    drawerStore: new DrawerStore()
})


