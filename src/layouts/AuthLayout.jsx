import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Message from "@mui/icons-material/Message";
import CurrencyExchange from "@mui/icons-material/CurrencyExchange";
import logo from "../assets/icons/clubby-logo.svg"

const AuthLayout = ({ children }) => {
    const cards = [
        {
            icon: <CalendarMonth sx={{ color: '#E94343' }}/>,
            text: 'Make sure all your members know when and where your meetings and events are with the calendar feature',
            bgColor: '#FFECE6',
        },
        {
            icon: <Message sx={{ color: '#0070B2' }} />,
            text: 'Keep in touch and build community with the club chat feature ',
            bgColor: '#EBF2FC',
        },
        {
            icon: <CurrencyExchange sx={{ color: '#FFE600' }}/>,
            text: 'Track and organize your club\'s funds with the budget feature',
            bgColor: '#FFF6DF',
        },
    ]
    return (
        <>
            <Grid container direction='row-reverse' height='100vh'>
                <Grid item md={6} xs={12} className='clubby-linear-bg' sx={{ display: 'flex', placeItems: 'center', justifyContent: 'center', order: 2 }}>
                    <Grid item xs={10} md={8} py={5}>
                        <Typography variant='h5' sx={{ fontWeight: 700 }}>
                            Welcome to Clubby: <br/>
                            The only app your club will ever <br/> need.
                        </Typography>
                        {cards.map((card, index) => {
                            return <Card key={index} sx={{ display: 'flex', placeItems: 'center', mt: 2 }}>
                                <CardContent>
                                    <IconButton
                                        sx={{ bgcolor: card.bgColor, borderRadius: 3 }}
                                        aria-label="calendarmonth"
                                        size="large"
                                    >
                                        {card.icon}
                                    </IconButton>
                                </CardContent>
                                <CardContent>
                                    {card.text}
                                </CardContent>
                            </Card>
                        })}
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12} sx={{ display: 'flex', placeItems: 'center', justifyContent: 'center' }}>
                    <Grid item md={8} xs={10}>
                        <img src={logo} alt="Logo" />
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AuthLayout