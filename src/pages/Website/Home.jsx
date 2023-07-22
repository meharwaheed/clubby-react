import WebsiteLayout from "../../layouts/WebsiteLayout.jsx";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CustomButton from "../../components/common/CustomButton.jsx";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddIcon from '@mui/icons-material/Add';
import {Accordion, AccordionDetails, AccordionSummary, ListItemAvatar} from "@mui/material";
import {ExpandMore, Share} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function Home() {
    return (
        <>
            <WebsiteLayout/>
            <main style={{backgroundColor: '#f3eded', minHeight: '90vh'}}>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item md={3} px={2}>
                            <CustomButton
                                label="Join Club"
                                fullWidth
                                sx={{py: 1}}
                                className='clubby-linear-bg'
                                startIcon={<PersonAddAltIcon/>}
                            />
                            <CustomButton
                                label="Join Club"
                                fullWidth
                                sx={{py: 1, mt: 2, backgroundColor: 'white', color: 'black'}}
                                startIcon={<AddIcon/>}
                                variant='text'
                            />
                            <Box mt={2}>
                                <Accordion sx={{borderRadius: '10px !important'}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore/>}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography sx={{width: '33%', flexShrink: 0}}>
                                            Your Club
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{padding: 0}}>
                                        <List sx={{width: '100%'}}>
                                            {Array.from(Array(5)).map((e, i) => (
                                                <ListItem key={i} alignItems="flex-start">
                                                    <ListItemAvatar>
                                                        <Avatar
                                                            sx={{width: 48, height: 48}}
                                                            alt="Remy Sharp"
                                                            src="/static/images/avatar/1.jpg"
                                                        />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary="Brunch this weekend?"
                                                        secondary={
                                                            <Typography
                                                                sx={{display: 'inline'}}
                                                                component="span"
                                                                variant="body2"
                                                                color="text.primary"
                                                            >
                                                                Ali Connors
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box p={3} sx={{backgroundColor: 'white'}} className='border-radius-10'>
                                <Box align="center" py={2} className='border-radius-10' sx={{backgroundColor: 'red'}}>
                                    <Avatar
                                        sx={{width: 100, height: 100}}
                                        src="image"
                                        alt="club-img"
                                    />
                                    <Typography variant="h5" sx={{fontWeight: '700'}}>
                                        Business Club
                                    </Typography>
                                    <Typography pt={1}>
                                        Create By SUper Admin
                                    </Typography>
                                    <Typography pt={1} sx={{display: 'flex', justifyContent: 'center'}}>
                                        code
                                        <ContentCopyIcon sx={{ml: 1}}/>
                                    </Typography>
                                    <Box mt={2}>
                                        <CustomButton
                                            variant='text'
                                            label="share club"
                                            sx={{backgroundColor: 'white', fontSize: '12px', fontWeight: '700'}}
                                            startIcon={<Share/>}
                                        />
                                        <CustomButton
                                            label="share club"
                                            sx={{fontSize: '12px', fontWeight: '700', mx: 2}}
                                            className='clubby-linear-bg'
                                            startIcon={<ExitToAppIcon/>}
                                        />
                                        <CustomButton
                                            variant='text'
                                            label="share club"
                                            sx={{backgroundColor: 'white', fontSize: '12px', fontWeight: '700'}}
                                            startIcon={<BorderColorIcon/>}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Grid>
                                <Grid item md={6}>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Home