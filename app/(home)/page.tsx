export const metadata = {
    title: "Home",
};

//nomad-movies.nomadcoders.workers.dev
//movies/[id]/videos
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function HomePage(){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    
    const movies = await getMovies();

    return(
        <>
            {JSON.stringify(movies)}
        </>
    )
}
//next fetches in the backend
async function getMovies(){
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}


/*
    react fetch
*/
/*
    export default function Page(){

        const [isLoading, setIsLoading] = useState(true);

        const [movies, setMovies] = useState([]);

        const getMovies = async () => {
            const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    
            const json = await response.json();
    
            setMovies(json);
            setIsLoading(false);
        }
    
        useEffect(()=>{
            getMovies();
        },[]);
    
        return(
            <>
                {isLoading ? "Loading" : JSON.stringify(movies)}
            </>
        )
    }

*/