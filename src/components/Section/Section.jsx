import React, { useState } from 'react'
import { Button, Stack, Typography, Grid, CircularProgress, Box } from '@mui/material'
import Styles from './Section.module.css'
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
const Section = ({title,data,type}) => {
    const [carouselToggle, setCarouseltoggle] = useState(false);
    const handletoggle = ()=>{
        setCarouseltoggle(prev=>!prev);
    }
    const renderComponent = (data)=>{
        return <Card data={data} type={type}/> 
    }

    return (
        <div className={Styles.wrapper}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb='10px'
            >
                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>{title}</Typography>
                <Button sx={{ color: '#34c94b', fontSize: '20px', fontWeight: '600', textTransform: 'none' }} onClick={handletoggle}>{carouselToggle?'Collapse':'Show All'}</Button>
            </Stack>
            {
                data.length===0 ? <Box display='flex' justifyContent='center'>
                    <CircularProgress />
                </Box>
                : <div className={Styles.grid_wrapper}>
                    {carouselToggle?(
                        <Grid container spacing={8} justifyContent="start">
                    {
                        data.map(ele => {
                            return (
                                <Grid item  key={ele.id}>
                                    <Card data={ele} type={type}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                    ):(
                        <Carousel 
                        data={data} 
                        renderComponent={renderComponent}    
                        />
                    )}
                
            </div>
            }
            
        </div>
    )
}

export default Section