import React, { useEffect, useState } from 'react'
import { Button, Stack, Typography, Grid } from '@mui/material'
import Styles from './Section.module.css'
import Card from '../Card/Card';
import axios from 'axios';
const Section = () => {
    const [ topAlbums, setTopAlbums ] = useState([]);
    
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const {data} = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                console.log(data);
                setTopAlbums(data);
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
                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>Top Albums</Typography>
                <Button sx={{ color: '#34c94b', fontSize: '20px', fontWeight: '600', textTransform: 'none' }}>Collapse</Button>
            </Stack>
            <Grid container spacing={4} justifyContent="space-between">

                {
                    topAlbums && topAlbums.map(album => {
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
    )
}

export default Section