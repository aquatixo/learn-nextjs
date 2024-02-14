import Link from "next/link";

export const metadata = {
    title: "Home",
};

//nomad-movies.nomadcoders.workers.dev
//movies/[id]/videos
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function HomePage(){
    const movies = await getMovies();

    return(
        <>
            {
                movies.map(
                    movie => 
                    <li key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                )
            }
        </>
    )
}
//next fetches in the backend
async function getMovies(){
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
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