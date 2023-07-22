import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/icons/clubby-logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import MessageIcon from '@mui/icons-material/Message';
import {Link, useLocation} from "react-router-dom";
import CustomButton from "../components/common/CustomButton.jsx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from '@mui/icons-material/Notifications';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const navLinks = [
    {
        icon: <HomeIcon/>,
        path: '/home',
    },
    {
        icon: <CalendarMonth/>,
        path: '/calendar',
    },
    {
        icon: <AccountBalanceWalletIcon/>,
        path: '/budget',
    },
    {
        icon: <MessageIcon/>,
        path: '/chat',
    },
];

function WebsiteLayout() {
    const location = useLocation();
    const {pathname} = location;

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{bgcolor: 'white', boxShadow: 'none', pb: 2}}>
            <Container maxWidth="xl">
                <Toolbar>
                    <img src={logo} loading='lazy' alt=""/>
                    <Box pl={5} sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {navLinks.map((item) => (
                            <IconButton
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{borderRadius: '10px', ml: 3}}
                                className={pathname === item.path ? 'clubby-linear-bg' : ''}
                            >
                                {item.icon}
                            </IconButton>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Box sx={{flexGrow: 0, display: 'flex'}}>
                        <IconButton
                            sx={{borderRadius: '10px', ml: 3, backgroundColor: '#A8AAAB90'}}
                        >
                            <NotificationsIcon sx={{color: 'black'}}/>
                        </IconButton>
                        <Avatar
                            onClick={handleOpenUserMenu}
                            variant="rounded"
                            src="/emoji.svg"
                            sx={{ml: 2, cursor: 'pointer', width: 34, height: 34, border: '1px solid red'}}
                        >

                        </Avatar>
                        <CustomButton
                            id="account-menu-btn"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            endIcon={<ArrowDropDownIcon/>}
                            label="Shakeel"
                            variant="text"
                            disableElevation
                            disableFocusRipple
                            disableRipple
                            onClick={handleOpenUserMenu}
                            sx={{
                                cursor: 'pointer',
                                fontWeight: 700,
                                color: 'black',
                                "&:hover": {backgroundColor: "transparent"},
                                display: {xs: 'none', md: 'flex'}
                            }}
                        />
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default WebsiteLayout;