import {Accordion, AccordionDetails, AccordionSummary, ListItemAvatar} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

const YourClubs = () => {
    return (
        <>
            <Accordion defaultExpanded sx={{borderRadius: '10px !important'}}>
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
        </>
    )
}

export default YourClubs;