import React from 'react'
import styles from './Card.module.css'
import { Tooltip,Chip } from '@mui/material';
const getCard =(data,type)=>{
    switch(type){
        case 'album' : {
            const {image,follows, title,songs,slug} =data;
            return (
              <Tooltip placement="top" arrow title={songs?.length +' songs'}>
                 
                      <div className={styles.wrapper}>
                      <a href={`/album/${slug}`}>
                      <div className={styles.card}>
                          <img className={styles.card_img} src={image} alt={title} loading='lazy'/>
                          <Chip sx={{mt:0.7,ml:0.5,fontSize:10}} label={`${follows} follows`} size='small' className={styles.chip}/>
                      </div>
                      </a>
                      <div className={styles.title}>
                      {title}
                      </div>
                      </div>
                 
              </Tooltip>
            )
        }
        case 'song' : {
            const {image,likes, title} =data;
            return (
              <div className={styles.wrapper}>
              <div className={styles.card}>
                  <img className={styles.card_img} src={image} alt={title} loading='lazy'/>
                  <div className={styles.hug}>{likes? likes: 0} Likes</div>
              </div>
              <div className={styles.title}>
              {title}
              </div>
              </div>
            )
        }
        default : {
            return <></>
        }
    }
    }
const Card = ({data,type}) => {
    
   return getCard(data,type);
}

export default Card