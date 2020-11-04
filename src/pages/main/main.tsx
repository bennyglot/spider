import React from 'react';

const main = ({ handleDrawerClose }) => {
    return (<div onClick={handleDrawerClose}><h1>main panel</h1></div>);
}

const Main = main;

export default Main;