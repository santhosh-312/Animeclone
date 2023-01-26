import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Home() {
    let [anime, setAnime] = useState(null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(fetch("https://api.jikan.moe/v4/anime")
            .then((res) => {
                if (res.ok == false) {
                    throw Error("No data")
                }
                return res.json()
            })
            .then((obj) => { return (obj.data) })
            .then((data) => { setAnime(data); setLoading(false) })
            .catch((err) => { setError(err.message); setLoading(false) })
            , 2000)
    }, [])
    return (
        <div>
            {loading && <div className="loader"></div>}
            {error && <h5 className="error">{error}</h5>}
            {anime && <div className="list1">

                {anime.map((mov) => {
                    return <Link to={`/animedetails${mov.mal_id}`} className="list">
                        <img src={mov.images.jpg.image_url} alt="no image" />
                        <h1>{mov.id}</h1>
                        <h3 className="title">{mov.title}</h3>
                    </Link>
                })} </div>}
        </div>

    )

}
export default Home;