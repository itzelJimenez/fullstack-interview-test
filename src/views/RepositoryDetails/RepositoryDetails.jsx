import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Layout from '../Layout/Layout';

import { getRepositoryDetails } from '../../services/git-services/gitServices';


const RepositoryDetails = () => {
  const [repoDetails, setRepoDetails] = useState();

  const handleRedirect = (route) => window.open(route);

  const getRepoDetails = async () => {
    const repoDetails = await getRepositoryDetails();
    setRepoDetails(repoDetails);
  }


  useEffect(()=> {
    getRepoDetails();
  }, [])

  useEffect(()=> {
    console.log(repoDetails)
  }, [repoDetails])
  
  return(
    <Layout layoutTitle="RepositoryDetails">
      <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        height="230"
        image={repoDetails?.owner?.avatar_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {repoDetails?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {repoDetails?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> handleRedirect(repoDetails?.html_url)}>Code</Button>
      </CardActions>
    </Card>
    </Layout>
)};


export default RepositoryDetails;
