import React, { useEffect, useState } from 'react'
import { Button, Stack, Typography, Grid } from '@mui/material'
import Styles from './Section.module.css'
import Card from '../Card/Card';
import axios from 'axios';
const Section = ({type}) => {
    const [ albums, setAlbums ] = useState([]);
    
    useEffect(()=>{
        const fetchData= async()=>{ 
            try{
                const {data} = await axios.get(`https://qtify-backend-labs.crio.do/albums/${type=='top'?'top':'new'}`);
                console.log(data);
                setAlbums(data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])

    return (
        <div className={Styles.wrapper}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb='10px'
            >
                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>{type=='top'?'Top':'New'} Albums</Typography>
                <Button sx={{ color: '#34c94b', fontSize: '20px', fontWeight: '600', textTransform: 'none' }}>Collapse</Button>
            </Stack>
            <div className={Styles.grid_wrapper}>
                <Grid container spacing={8} justifyContent="start">
                    {
                        albums && albums.map(album => {
                            console.log(album.id)
                            return (
                                <Grid item >
                                    <Card data={album} type='album'/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}

export default Section