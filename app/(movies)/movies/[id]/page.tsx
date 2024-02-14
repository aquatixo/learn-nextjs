import { API_URL } from "../../../(home)/page"

export default async function MovieDetail({
    params: {id}
}:{
    params: {id: string}
}){
    console.log('Start Fetch');
    //const movie = await getMovie(id);
    //const videos = await getVideos(id);
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    console.log('End Fetch');

    return(
        <h1>{movie.title}</h1>
    )
}

async function getMovie(id:string){
    console.log(`Fetching movie: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}`);

    return response.json();
}

async function getVideos(id:string){
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}/videos`);

    return response.json();
}