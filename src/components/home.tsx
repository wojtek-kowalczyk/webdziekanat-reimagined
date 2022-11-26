import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box, Card, CardMedia, useTheme } from "@mui/material";
import React from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

function Home(params: any) {
    const theme = useTheme();
    const [clicked, setClicked] = React.useState({ 1: false, 2: false, 3: false });

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <Box className="FEED" sx={{ margin: "25px", display: "flex", flexDirection: "column" }}>

            <Stack direction="row" spacing={2}>
                <Typography variant='caption'>Filters: </Typography>
                <Chip label="New" variant="outlined" onClick={() => setClicked((prevState) => ({ ...prevState, 1: !prevState[1] }))} sx={{ backgroundColor: clicked[1] ? theme.palette.secondary.light : theme.palette.common.white }} />
                <Chip label="Official" variant="outlined" onClick={() => setClicked((prevState) => ({ ...prevState, 2: !prevState[2] }))} sx={{ backgroundColor: clicked[2] ? theme.palette.secondary.light : theme.palette.common.white }} />
                <Chip label="Metions" variant="outlined" onClick={() => setClicked((prevState) => ({ ...prevState, 3: !prevState[3] }))} sx={{ backgroundColor: clicked[3] ? theme.palette.secondary.light : theme.palette.common.white }} />
            </Stack>

            <MediaCard></MediaCard>
        </Box>
    )
}

export default Home;