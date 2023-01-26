import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function AnimeDetails() {
    let { mal_id } = useParams()
    let [anime, setAnime] = useState(null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(fetch("https://api.jikan.moe/v4/anime/" + mal_id)
            .then((res) => {
                if (res.ok == false) {
                    throw Error("data that you are searching for is not present")
                }
                return res.json();
            })
            .then((obj) => { return (obj.data) })
            .then((data) => { setAnime(data); setLoading(false) })
            .catch((err) => { setError(err.message); setLoading(false) })
            , 2000)
    }, [])
    let sty = { color: "white" }
    return (
        <div>
            {loading && <div className="loader"></div>}
            {error && <h5>{error}</h5>}
            {anime && <div className="det">
                <img src={anime.images.jpg.large_image_url} alt="No image" />
                <h3 className="titl">Title: {anime.title}</h3>
                <a target="blank" href={anime.trailer.url}>Trailer: Click here</a>
                <h4><span style={sty}>Type: </span> {anime.type}</h4>
                <h4><span style={sty}>Source: </span>{anime.source}</h4>
                <h4><span style={sty}>Duration: </span> {anime.duration}</h4>
                <h4><span style={sty}>Episodes: </span> {anime.episodes}</h4>
                <h4> <span style={sty}>Rating: </span>{anime.rating}</h4>
                <h4><span style={sty}>Members: </span> {anime.members}</h4>
                <h4><span style={sty}>Season: </span> {anime.season}</h4>
                <h4><span style={sty}>Year: </span> {anime.year}</h4>
                <h3><span style={sty}>Background: </span>{anime.background}</h3>
            </div>}
        </div>
    )

}
export default AnimeDetails;