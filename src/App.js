import "./styles.css";
import Login from "./components/login/login";
import { useState, useEffect } from "react";
import Search from "./components/search/search";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
    }
  });
  return !token ? (
    <>
      <div className="App">
        <Login />
      </div>
    </>
  ) : (
    <>
      <div className="App">
        <header className="App-header">
          {/* https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png */}
          <h1 className="title">Welcome to Spotify!</h1>
        </header>
        <Search />
      </div>
    </>
  );
}

export default App;
