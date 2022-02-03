import React, { useEffect, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Layout from '../Layout/Layout';

import { getBranchCommits, getBranchDetails, getBranches } from '../../services/git-services/gitServices';
import BranchDetails from './BranchDetails';
import { Divider } from '@mui/material';

const Branches = () => {
    const [expanded, setExpanded] = useState(false);
    const [branches, setBranches] = useState();
    const [branchDetails, setBranchDetails] = useState();

    const handleChange = (name) => (event, isExpanded) => {
        setExpanded(isExpanded ? name : false);
        getBranchData(name)
    };

    const getBranchesResponse = async() => {
        const branches = await getBranches();
        setBranches(branches);
    }

    const getBranchData = async(branchName) => {
        const branches = await getBranchCommits(branchName);
        setBranchDetails(branches);
    }

    useEffect(()=> {
        getBranchesResponse()
    }, [])
    
    return (
        <Layout layoutTitle="Branches">
            <div>
                <Accordion>
                    <AccordionSummary
                    id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <b>BRANCH NAME</b>
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}><b>DETAILS</b> </Typography>
                    </AccordionSummary>
                 
                </Accordion>
                {branches?.length > 0 ? branches.map(element => 
                    <Accordion key={element.commit.sha} expanded={expanded === element.name} onChange={handleChange(element.name)}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                               <b>{element.name}</b>
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}><b>Commit:</b> {element.commit.sha}</Typography>
                        </AccordionSummary>
                        <Divider />
                        <AccordionDetails>
                            <BranchDetails branchDetails={branchDetails}/>
                        </AccordionDetails>
                    </Accordion>
                ): null}
               
                
            </div>
        </Layout>
    )
};


export default Branches;
