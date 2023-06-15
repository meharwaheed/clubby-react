import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import clubbyLogo from '/src/assets/icons/clubby-logo.svg'
import CustomButton from "../../components/common/CustomButton.jsx";
import Grid from "@mui/material/Grid";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddIcon from "@mui/icons-material/Add";
import landingImage from '../../assets/images/landing.svg'
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;
const navItems = ['HOME', 'REVIEWS', 'FAQS', 'ABOUT US', 'Contact Us'];

function Landing(props) {
    const theme = useTheme();

    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <img
                src={clubbyLogo}
                alt='clubby logo'
                loading="lazy"
            />
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{
            background: 'linear-gradient(178.76deg, rgba(255, 255, 255, 0.2) -4.19%, rgba(189, 189, 189, 0.48) 98.94%, rgba(189, 189, 189, 0) 98.94%)',
            minHeight: '100vh'
        }}>
            <AppBar position='relative' component="nav" sx={{bgcolor: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{
                        textAlign: {md: 'left', sm: 'left', xs: 'right'},
                        flexGrow: 1,
                        display: {sm: 'block'},
                        width: {sm: '104px'},
                        height: {sm: '41px'}
                    }}>
                        <img
                            src={clubbyLogo}
                            alt='clubby logo'
                            loading="lazy"
                        />
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <CustomButton
                                key={item}
                                label={item}
                                sx={{color: 'black'}}
                                className={item === 'Contact Us' ? 'clubby-linear-bg' : ''}
                            />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{p: 3}}>
                <Typography
                    align='center'
                    variant='h6'
                    sx={{textTransform: 'uppercase', color: 'primary.main'}}
                >
                    #1 Best App for clubs
                </Typography>
                <Typography
                    align='center'
                    sx={{
                        fontSize: {md: '64px', sm: '64px', xs: '32px'},
                        fontWeight: 700,
                        letterSpacing: {md: '-3px'},
                        lineHeight: {md: '76px', sm: '70px', xs: '40px'}
                    }}
                >
                    Join or create a club today to get <br/> started with clubby
                </Typography>
                <Typography
                    align='center'
                    variant='subtitle1'
                    pt={2}
                >
                    Welcome to Clubby: The only app your club will ever need. Keep in touch and <br/>
                    build community with the many great features.
                </Typography>
                <Grid container spacing={2} pt={3}>
                    <Grid item md={6} sm={6} xs={6} align='right'>
                        <CustomButton
                            startIcon={useMediaQuery(theme.breakpoints.up('sm')) ? <PersonAddAltIcon/> : ''}
                            label='Join Club'
                            className='clubby-linear-bg'
                            sx={{px: {md: 5, xs: 4}, py: 1}}
                        />
                    </Grid>
                    <Grid item md={6} sm={6} xs={6}>
                        <CustomButton
                            startIcon={useMediaQuery(theme.breakpoints.up('sm')) ? <AddIcon/> : ''}
                            label='Create a Club'
                            sx={{px: {md: 3}, py: 1, bgcolor: 'white'}}
                        />
                    </Grid>
                </Grid>
                <Box sx={{textAlign: 'center'}}>
                    <img
                        src={landingImage}
                        width='100%'
                        alt='Landing Group Photo'
                        loading="lazy"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Landing;