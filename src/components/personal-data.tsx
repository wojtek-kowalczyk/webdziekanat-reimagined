import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from '@mui/material/styles';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function PersonalData(props: {

}) {
    const [editMode, setEditMode] = useState(false);
    const theme = useTheme();
    
    return (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <Paper sx={{ margin: "25px", padding: "25px", ...(editMode && {backgroundColor: theme.palette.warning.main}) }}>

                <Typography variant="h5" sx={{ marginBottom: "-25px" }}>Personal Data</Typography>
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

                <Typography variant="h5" sx={{ marginBottom: "-25px" }}>Adress</Typography>
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

                <Typography variant="h5" sx={{ marginBottom: "-25px" }}>Contact</Typography>
                <Box className="form" sx={{ display: "flex", marginY: "25px", gap: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Phone" variant="standard" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Email" variant="standard" />
                    </Box>
                </Box>
                <Box className="button-container" sx={{display: "flex", flexDdirection: "row", alignItems: "center"}}>
                {!editMode ?
                    <Button
                        onClick={() => setEditMode(!editMode)}
                        variant="contained"
                        color="secondary"
                        sx={{ paddingX: "25px", paddingY: "6px" }}>
                        Edit
                    </Button>
                    :
                    <Button
                        onClick={() => setEditMode(!editMode)}
                        variant="contained"
                        color="primary"
                        sx={{ paddingX: "25px", paddingY: "6px" }}>
                        Save
                    </Button>
                }
                {editMode && 
                    <Box sx={{marginLeft: "16px", display: "flex", flexDirection: "row"}}>
                        <PriorityHighIcon />
                        <Typography>You are editing your personal data</Typography>
                    </Box> }
                </Box>
            </Paper>
        </Box>
    )
}

export default PersonalData;