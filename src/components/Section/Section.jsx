import React, { useEffect, useState } from 'react'
import { Button, Stack, Typography, Grid, CircularProgress, Box, Tabs, Tab } from '@mui/material'
import {createTheme,ThemeProvider} from '@mui/material/styles'
import Styles from './Section.module.css'
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
const theme = createTheme({
    palette: {
      primary: {
        main: '#34c94b',
      },
    },
  });
const Section = ({ title, data, type, filterSource }) => {
    const [carouselToggle, setCarouseltoggle] = useState(false);
    const [filters, setFilters] = useState([{ key: 'all', label: 'All' }])
    const [selectedFilterIndex, setFilteredindex] = useState(0);
    useEffect(() => {
        if (filterSource && filters.length===1) {
            filterSource().then(data => {
                setFilters([...filters, ...data]);
            });
        }
    }, [])
    const showFilters = filters.length > 1;
    const filteredData = data.filter(datum=>selectedFilterIndex!==0?datum.genre.key===filters[selectedFilterIndex].key:true);
    const handletoggle = () => {
        setCarouseltoggle(prev => !prev);
    }
    const renderComponent = (data) => {
        return <Card data={data} type={type} />
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
                {!showFilters && <Button sx={{ color: '#34c94b', fontSize: '20px', fontWeight: '600', textTransform: 'none' }}
                    onClick={handletoggle}>{carouselToggle ? 'Collapse' : 'Show All'}</Button>}
            </Stack>
            {showFilters && <Box sx={{ borderBottom: 1, borderColor: 'divider',mb: 2}}>
                <ThemeProvider theme={theme}>
                    <Tabs value={selectedFilterIndex} onChange={(e,v)=>setFilteredindex(v)} textColor="inherit" >
                        {filters.map((filter,index)=><Tab key={filter.key} sx={{textTransform:'none', fontWeight:'600'}} label={filter.label} value={index} />)}
                    </Tabs>
                </ThemeProvider>
            </Box>}
            {
                data.length === 0 ? <Box display='flex' justifyContent='center'>
                    <CircularProgress />
                </Box>
                    : <div className={Styles.grid_wrapper}>
                        {carouselToggle ? (
                            <Grid container spacing={8} justifyContent="start">
                                {
                                    filteredData.map(ele => {
                                        return (
                                            <Grid item key={ele.id}>
                                                <Card data={ele} type={type} />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        ) : (
                            <Carousel
                                data={filteredData}
                                renderComponent={renderComponent}
                            />
                        )}

                    </div>
            }

        </div>
    )
}

export default Section