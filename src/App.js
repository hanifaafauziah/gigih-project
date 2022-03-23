import "./styles.css";
import data from "./song-data/song-data.js";
// console.log({data.album.artists.name});
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <img src={data.album.images[1].url} className="album-image" />
        </div>
        <div className="songDetail">
          <p>
            <b>Song Title: </b>
          </p>
          <p className="songName">{data.name}</p>

          <p>
            <b>Artist: </b>
          </p>
          <p className="songArtist">{data.album.artists[0].name}</p>

          <a href={data.external_urls.spotify}>
            <button className="btn-select">Select</button>
          </a>
        </div>
      </div>
    </div>
  );
}
