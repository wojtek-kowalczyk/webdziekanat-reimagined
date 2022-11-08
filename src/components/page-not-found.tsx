import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <h1>Page not found.</h1>
            <Link to='/'><Button>go home</Button></Link>
        </>
    )
}

export default PageNotFound;