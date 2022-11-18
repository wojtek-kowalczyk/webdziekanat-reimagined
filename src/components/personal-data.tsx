import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function PersonalData(props: {

}) {
    // const [personalEditMode, setPersonalEditMode] = useState()
    return (
        <>
            <Paper sx={{ margin: "25px", padding: "25px" }}>
                <Typography variant="h4" sx={{ marginBottom: "8px" }}>Personal Data</Typography>
                <div style={{ backgroundColor: "#aaa", width: "100%", height: "1px" }}></div>
                <Box className="form" sx={{ display: "flex", marginY: "25px", gap: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="First Name" variant="standard" />
                        <TextField label="Last Name" variant="standard" />
                        <TextField label="Father's Name" variant="standard" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Place of Birth" variant="standard" />
                        <TextField label="Date of Birth" variant="standard" />
                        <TextField label="Pesel" variant="standard" />
                    </Box>
                </Box>
                <Button variant="contained" sx={{ paddingX: "25px", paddingY: "6px" }}>Save</Button>
            </Paper>

            <Paper sx={{ margin: "25px", padding: "25px" }}>
                <Typography variant="h4" sx={{ marginBottom: "8px" }}>Adress</Typography>
                <div style={{ backgroundColor: "#aaa", width: "100%", height: "1px" }}></div>
                <Box className="form" sx={{ display: "flex", marginY: "25px", gap: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Street" variant="standard" />
                        <TextField label="Street no." variant="standard" />
                        <TextField label="Apt." variant="standard" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Town" variant="standard" />
                        <TextField label="Voivodeship" variant="standard" />
                        <TextField label="Postal Code" variant="standard" />
                    </Box>
                </Box>
                <Button variant="contained" sx={{ paddingX: "25px", paddingY: "6px" }}>Save</Button>
            </Paper>
            
            <Paper sx={{ margin: "25px", padding: "25px" }}>
                <Typography variant="h4" sx={{ marginBottom: "8px" }}>Contact</Typography>
                <div style={{ backgroundColor: "#aaa", width: "100%", height: "1px" }}></div>
                <Box className="form" sx={{ display: "flex", marginY: "25px", gap: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Phone" variant="standard" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Email" variant="standard" />
                    </Box>
                </Box>
                <Button variant="contained" sx={{ paddingX: "25px", paddingY: "6px" }}>Save</Button>
            </Paper>
        </>
    )
}

export default PersonalData;