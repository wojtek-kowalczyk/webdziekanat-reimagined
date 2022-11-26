import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const rowsForPayments = [
  { text: "Dormitory payment", amount: 500, status: true },
  { text: "Tuition Fee", amount: 120, status: false },
  { text: "ID Card issue", amount: 25, status: false },
];

function Payments() {
  return (
    <Box sx={{ margin: "25px" }}>
      <Typography variant="h4" sx={{ marginBottom: "15px" }}>
        Payments
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Payment</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsForPayments.map((row) => (
              <TableRow
                key={row.text}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.text}</TableCell>
                <TableCell align="right">{row.amount}PLN</TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: row.status ? "green" : "red",
                  }}
                  align="right"
                >
                  {row.status && <DoneIcon />}
                  {!row.status && <CloseIcon />}
                </TableCell>
                <TableCell align="right">
                  <Link to="">{row.status ? "details" : "pay"}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const rowsForScholarships = [
  { text: "Social", amount: 500, status: false, nextPaymentDate: "2022-11-01" },
  {
    text: "Rector's premium",
    amount: 700,
    status: false,
    nextPaymentDate: "2022-11-03",
  },
];

function Scholarships() {
  return (
    <Box sx={{ margin: "25px" }}>
      <Typography variant="h4" sx={{ marginBottom: "15px" }}>
        Pending Scholarships
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Paid this month</TableCell>
              <TableCell align="right">Next Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsForScholarships.map((row) => (
              <TableRow
                key={row.text}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.text}</TableCell>
                <TableCell align="right">{row.amount}PLN</TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: row.status ? "green" : "red",
                  }}
                  align="right"
                >
                  {row.status && <DoneIcon />}
                  {!row.status && <CloseIcon />}
                </TableCell>
                <TableCell align="right">{row.nextPaymentDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import FaxIcon from '@mui/icons-material/Fax';

export default function Administration() {
  return (
    <Box>
      <Payments />
      <Scholarships />
      <Card sx={{ margin: "25px", padding: "25px" }} aria-label="contact">
        <Typography variant="h4">Administration Office</Typography>
        {/* <Divider sx={{marginLeft: "25px", marginRight: "25px"}} />  */}
        <Divider sx={{ marginY: "5px" }} />
        <Typography variant="body1">
          If you have any questions please reach out to us via:
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <AlternateEmailIcon sx={{ marginRight: "15px" }} />
          <Typography>office@adm.p.lodz.pl</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingY: "10px",
          }}
        >
          <PhoneIcon sx={{ marginRight: "15px" }} />
          <Typography>+48 123 123 123</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingY: "10px",
          }}
        >
          <FaxIcon sx={{ marginRight: "15px" }} />
          <Typography>fax: +1-212-9876543</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingY: "10px",
          }}
        >
          <BusinessIcon sx={{ marginRight: "15px" }} />
          <Typography>Wólczańska 123, Łódź 123-12</Typography>
        </Box>
      </Card>
    </Box>
  );
}
