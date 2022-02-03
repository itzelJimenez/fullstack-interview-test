import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const BranchDetails = ({branchDetails}) => {    
    const [rows, setRows] = useState([]);
    const createData = (commit, message, author, timestamp) => {
        return { commit, message, author, timestamp };
    }

    const createRowData = () => {
        return branchDetails?.length > 0 ? branchDetails.map(element => {
            return createData(element?.sha, element?.commit?.message, element?.commit?.author?.name, element?.commit?.author?.date)
        }): [];
    }

    useEffect(()=> {
        setRows(createRowData());
    }, [branchDetails])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Commit </TableCell>
                    <TableCell align="center">Message</TableCell>
                    <TableCell align="right">Author</TableCell>
                    <TableCell align="right">Timestamp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.length > 0 ? rows.map((row) => (
                    <TableRow
                        key={row.commit}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {row.commit}
                        </TableCell>
                        <TableCell align="center">{row.message}</TableCell>
                        <TableCell align="right">{row.author}</TableCell>
                        <TableCell align="right">{row.timestamp}</TableCell>
                    </TableRow>
                    )): null}
                </TableBody>
            </Table>
        </TableContainer>)
}

export default BranchDetails;