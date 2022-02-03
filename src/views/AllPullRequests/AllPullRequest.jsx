import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getPullRequests } from '../../services/git-services/gitServices';

const AllPullRequest = () => {
    const [rows, setRows] = useState([]);
    const [pullRequests, setPullRequests] = useState([]);
    const createData = (author, title, number, status) => {
        return { author, title, number, status };
    }

    const createRowData = () => {
        return pullRequests?.length > 0 ? pullRequests.map(element => {
            return createData(element?.user?.login, element?.title, element?.number, element?.state)
        }): [];
    }

    const getPullRequestsFn = async() => {
        const pullRequests = await getPullRequests();
        setPullRequests(pullRequests);
    }

    useEffect(()=> {
        getPullRequestsFn();
    }, [])

    useEffect(()=> {
        setRows(createRowData());
    }, [pullRequests])


    return(
        <Layout layoutTitle="All pull request">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Author </TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="right">Number</TableCell>
                        <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.length > 0 ? rows.map((row) => (
                        <TableRow
                            key={row.author}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {row.author}
                            </TableCell>
                            <TableCell align="center">{row.title}</TableCell>
                            <TableCell align="right">{row.number}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                        )): null}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
)};


export default AllPullRequest;