import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <Box sx={{marginLeft: "30px", marginTop: "15px"}}>
            <Typography variant="h1">Page not found.</Typography>
            <Link to='/'>
                <Button sx={{marginTop: "30px"}}  variant="contained" color="secondary">GO HOME</Button>
            </Link>
        </Box>
    )
}

export default PageNotFound;