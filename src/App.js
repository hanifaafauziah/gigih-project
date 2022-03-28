import "./styles.css";
import data from "./song-data/song-data.js";
import Music from "./components/music";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Spotify Playlist</h1>
      <div className="wrapper">
        {data.map((e) => {
          return (
            <Music
              key={e.id}
              album={e.album.images[1].url}
              name={e.name}
              artist={e.artists[0].name}
              url={e.external_urls.spotify}
            />
          );
        })}
      </div>
      {/* <Music
        name={data.name}
        artist={data.album.artists[0].name}
        album={data.album.images[1].url}
        url={data.external_urls.spotify}
      /> */}
    </div>
  );
}
