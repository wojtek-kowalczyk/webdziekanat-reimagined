import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box, Card, CardMedia, Icon, IconButton, useTheme } from "@mui/material";
import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PushPinIcon from "@mui/icons-material/PushPin";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinkIcon from '@mui/icons-material/Link';

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/500/140"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lorem Ipsum
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          vel ipsum sit amet euismod. Ut facilisis lectus urna, eu porta nulla
          sagittis eget. Suspendisse id...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}

function PinnedCard() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        maxHeight: 150,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CardMedia
        component="img"
        height="150"
        width="120"
        image="https://picsum.photos/120/150"
        sx={{ width: 120 }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lorem Ipsum
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet...
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

function ExternalLink(props: {label: string}) {
    return (
        <Card
          sx={{
            maxWidth: 400,
            maxHeight: 100,
            display: "flex",
            flexDirection: "row",
            transition: "all .3s ease-out",
            cursor: "pointer",
            ":hover": { transform: "translate(5px, 0)"}
          }}
        >
          <CardContent sx={{flex: 1, display:"flex", flexDirection: "row", alignItems: "center"}}>
            <LinkIcon sx={{marginRight: "10px"}}/> 
            <Typography variant="button" component="div">
              {props.label}
            </Typography>
          </CardContent>
    
          <CardActions>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </CardActions>
        </Card>
      );}

function Home(params: any) {
  const theme = useTheme();
  const [clicked, setClicked] = React.useState({
    1: true,
    2: false,
    3: false,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        className="FEED"
        sx={{
          margin: "25px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", marginBottom: "15px" }}
        >
          <Typography variant="caption">Sort by: </Typography>
          <Chip
            label="New"
            variant="outlined"
            onClick={() =>
              setClicked((prevState) => ({ ...prevState, 1: !prevState[1] }))
            }
            sx={{
              backgroundColor: clicked[1]
                ? theme.palette.secondary.light
                : theme.palette.common.white,
            }}
          />
          <Chip
            label="Official"
            variant="outlined"
            onClick={() =>
              setClicked((prevState) => ({ ...prevState, 2: !prevState[2] }))
            }
            sx={{
              backgroundColor: clicked[2]
                ? theme.palette.secondary.light
                : theme.palette.common.white,
            }}
          />
          <Chip
            label="Mentions"
            variant="outlined"
            onClick={() =>
              setClicked((prevState) => ({ ...prevState, 3: !prevState[3] }))
            }
            sx={{
              backgroundColor: clicked[3]
                ? theme.palette.secondary.light
                : theme.palette.common.white,
            }}
          />
        </Stack>

        <Box
          className="content"
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
        >
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <Box sx={{ height: 200 }}></Box>
        </Box>
      </Box>

      <Box>
        <Box
          className="pinned"
          sx={{
            margin: "25px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "50px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              marginBottom: "23px",
            }}
          >
            <PushPinIcon></PushPinIcon>
            <Typography>Pinned posts</Typography>
          </Box>
          <Box
            className="content"
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <PinnedCard />
            <PinnedCard />
          </Box>
        </Box>

        <Box
          className="external"
          sx={{
            margin: "25px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              marginBottom: "23px",
            }}
          >
            <LinkIcon />
            <Typography>External Links</Typography>
          </Box>
          <Box
            className="content"
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <ExternalLink label="Wikamp"/>
            <ExternalLink label="Study Programmes"/>
            <ExternalLink label="Faculties"/>
            <ExternalLink label="Politechnika Łódzka Home Page"/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
