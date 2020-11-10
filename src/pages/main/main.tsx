import React from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { classesType } from '../../types/app';
import { useStores } from '../../hooks/use-stores';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '80px'
    },
    menuButton: {},
    title: {}
}));

const Main = observer(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t, i18n } = useTranslation();
    const { appStore } = useStores();
    const { currentLanguage } = appStore;
    const classes: classesType = useStyles();

    return (<Container maxWidth="sm" className={classes.root}>
        <h1>{t('Main.mainText')}</h1>
        <h2>language: {currentLanguage} </h2>
    </Container>);
});

export default Main;