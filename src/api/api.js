import axios from "axios";
export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async () => {
    try {
        const { data } = await axios.get(BACKEND_ENDPOINT + '/albums/top');
        return data;
    }catch(err){
        console.error(err);
    }
}
export const fetchNewAlbums = async () => {
    try {
        const { data } = await axios.get(BACKEND_ENDPOINT + '/albums/new');
        return data;
    }catch(err){
        console.error(err);
    }
}
export const fetchAlbumSlug = async (slug) => {
    try {
        const { data } = await axios.get(BACKEND_ENDPOINT + `/album/${slug}`);
        return data;
    }catch(err){
        console.error(err);
    }
}
export const fetchSongs = async () => {
    try {
        const { data } = await axios.get(BACKEND_ENDPOINT + '/songs');
        return data;
    }catch(err){
        console.error(err);
    }
}
export const fetchGenres = async () => {
    try {
        const { data:{data} } = await axios.get(BACKEND_ENDPOINT + '/genres');
        return data;
    }catch(err){
        console.error(err);
    }
}