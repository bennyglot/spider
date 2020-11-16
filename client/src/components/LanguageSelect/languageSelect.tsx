import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import NoSsr from '@material-ui/core/NoSsr';
import LanguageIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LanguageKeys, Languages } from '../../common/constans';
import { useStores } from '../../hooks/use-stores';
import { useTranslation } from 'react-i18next';
import { appAttributes } from '../../stores/app';

export const LanguageSelect = observer(() => {
    const { appStore } = useStores();
    const { setCurrentAttribute, currentLanguage } = appStore;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleLanguageIconClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClose = (event) => {
        const { lang } = event.currentTarget;
        setCurrentAttribute(appAttributes.CURRENT_LANAGUAGE, lang);
        i18n.changeLanguage(lang);
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Tooltip title={'fdgdfg'} enterDelay={300}>
                <Button
                    color="inherit"
                    aria-owns={'language-menu'}
                    aria-haspopup="true"
                    onClick={handleLanguageIconClick}
                    data-ga-event-category="header"
                    data-ga-event-action="language"
                >
                    <LanguageIcon />
                    <span className={''}>
                        {currentLanguage}
                    </span>
                    <ExpandMoreIcon fontSize="small" />
                </Button>
            </Tooltip>
            <NoSsr defer>
                <Menu
                    id="language-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleLanguageMenuClose}
                >
                    {Object.keys(LanguageKeys).map((language) => (
                        <MenuItem
                            component="a"
                            data-no-link="true"
                            key={Languages[language]}
                            selected={currentLanguage === language}
                            onClick={handleLanguageMenuClose}
                            lang={LanguageKeys[language]}
                            hrefLang={Languages[language]}
                        >
                            {Languages[language]}
                        </MenuItem>
                    ))}
                    <Box my={1}>
                        <Divider />
                    </Box>
                </Menu>
            </NoSsr>
        </React.Fragment>
    )
})