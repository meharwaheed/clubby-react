import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomButton from "../common/CustomButton.jsx";
import Box from "@mui/material/Box";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import {ListItemAvatar} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import {Favorite} from "@mui/icons-material";
const Announcements = () => {
    return (
        <>
            <Grid container px={2} py={1} style={{ backgroundColor: 'white', borderRadius: 10 }}>
                <Grid item md={6}>
                    <Typography varient="h6" pt={1}>
                        Explore
                    </Typography>
                </Grid>
                <Grid item md={6} sx={{ float: 'right' }}>
                    <Box align="right">
                        <CustomButton
                            label='New'
                            variant='text'
                            sx={{ color: '#3F4354', backgroundColor: '#F7F7F7' }}
                            startIcon={<FiberNewIcon/>}
                        />
                        <CustomButton
                            label='Popular'
                            variant='text'
                            sx={{ ml: 2, backgroundColor: '#1921261A', color: 'black' }}
                            startIcon={<FolderSpecialIcon/>}
                        />
                        <IconButton ripple={false} color="dark">
                            <KeyboardArrowUpIcon/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Grid container px={1} mt={2} alignItems="center" style={{ backgroundColor: 'white', borderRadius: 10 }}>
                <Grid md={7}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                s
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Shakeel" secondary="Jan 9, 2014" />
                    </ListItem>
                </Grid>
                <Grid md={4}>
                    <Typography component="span">
                        5,487 Likes
                    </Typography>
                    <Typography component="span" pl={3}>
                        56 comments
                    </Typography>
                </Grid>
                <Grid md={1}>
                    <IconButton>
                        <Favorite fontSize="inherit" />
                    </IconButton>
                </Grid>
                <Grid md={11} pl={2}>
                    <Typography >
                        We are excited to announce that, due to our remarkable growth over the last of years, we are expanding!. In fact, we are opening a new store in 54 Building Street. We invite you to celebrate with us during the big opening day on July 24. There will ....
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Announcements;