import WebsiteLayout from "../../layouts/WebsiteLayout.jsx";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CustomButton from "../../components/common/CustomButton.jsx";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddIcon from '@mui/icons-material/Add';
import {Share} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import YourClubs from "../../components/YourClub/YourClubs.jsx";
import Announcements from "../../components/Announcements/Announcements.jsx";

function Home() {
    return (
        <>
            <WebsiteLayout/>
            <main style={{backgroundColor: '#f3eded', minHeight: '90vh', paddingBottom: '50px' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item md={3} xs={12}>
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
                                <YourClubs/>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
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
                                            label="edit club"
                                            sx={{backgroundColor: 'white', fontSize: '12px', fontWeight: '700'}}
                                            startIcon={<BorderColorIcon/>}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt={3}>
                                <Announcements/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Home