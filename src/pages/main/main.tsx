import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/use-stores';

const Main = observer(() => {
    const { drawerStore } = useStores()                                                     ;
    const { handleDrawerClose } = drawerStore;

    return (<div onClick={() => handleDrawerClose()}><h1>main panel</h1></div>);
});

export default Main;