import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface DetailsDialogProps {
    open: boolean;
    onClose: (accepted: boolean) => void;
}

function DetailsDialog(props: DetailsDialogProps) {
    const { onClose, open } = props;

    return (
        <Dialog onClose={onClose} open={open} >
            <Box sx={{ padding: "20px"}}>
                <Box sx={{ display: "flex" }}>
                    <Typography variant='h4' >Grade Details</Typography>
                    <Box sx={{ marginLeft: "auto" }}></Box>
                    <IconButton onClick={() => onClose(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ width: "30vw", height: "50vh", display: "flex", flexDirection:"column"}}>
                    <Typography sx={{marginTop: "20px"}}>Good job on the exam!</Typography>
                    <Box sx={{flex: 1}}></Box>
                    <Typography variant='subtitle1'>Assigned by: prof. Hugh Jass</Typography>
                    <Typography variant='subtitle1'>Date: 22.11.2022 12:34:47</Typography>
                </Box>
            </Box>
        </Dialog>
    );
}



interface Row {
    name: string,
    grade1: number | undefined,
    grade2: number | undefined,
    grade3: number | undefined,
}

function getRows(): Row[] {
    return [
        { name: "Physics", grade1: 1, grade2: undefined, grade3: undefined },
        { name: "Maths", grade1: 1, grade2: undefined, grade3: undefined },
        { name: "GUI Programming", grade1: 1, grade2: undefined, grade3: undefined },
        { name: "Chemistry", grade1: 1, grade2: undefined, grade3: undefined },
        { name: "C++ programming", grade1: 1, grade2: undefined, grade3: undefined },
        { name: "Civic knowledge and engagement", grade1: 1, grade2: undefined, grade3: undefined },
    ]
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.secondary.light,
        backgroundColor: theme.palette.action.hover,

    },
    '&:nth-of-type(odd):hover, &:nth-of-type(even):hover': {
        backgroundColor: theme.palette.secondary.light,
        cursor: "pointer"
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));

export default function ReportCard() {
    const theme = useTheme();
    const [dialogOpen, setDialogOpen] = React.useState(false);
    return (
        <TableContainer component={Paper} sx={{ margin: "25px" }}>

            <DetailsDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />

            <Table sx={{ minWidth: 500}} size="small" aria-label="a dense table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Subject</StyledTableCell>
                        <StyledTableCell align="right">grade1</StyledTableCell>
                        <StyledTableCell align="right">grade2</StyledTableCell>
                        <StyledTableCell align="right">grade3</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {getRows().map((row) => (
                        <StyledTableRow key={row.name} hover onClick={() => setDialogOpen(true)}>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.grade1 || "-"}</StyledTableCell>
                            <StyledTableCell align="right">{row.grade2 || "-"}</StyledTableCell>
                            <StyledTableCell align="right">{row.grade3 || "-"}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}