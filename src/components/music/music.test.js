import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from '../../redux/store.ts'
import { Provider } from 'react-redux';
import Music from "./music";


const title = "Kenapa aku bisa jadi manusia";
const key= 23
const album="https://en.wikipedia.org/wiki/Album#/media/File:Compact_disc_album.jpg"
const name = "Kenapa aku bisa jadi manusia";
const artist="bapak umar"
const url="https://open.spotify.com/track/3eR23VReFzcdmS7TYCrhCe?si=63070cb607bb40dd"
const duration=769637
const id="2"
const statusSelect=""
const addToList='test'
const removeFromList='test'

beforeEach(() => {
    render (
        <Provider store={store}>
            <Music
			    key={key}
				album={album}
				name={name}
				artist={artist}
				url={url}
				duration={duration}
				id={id}
				statusSelect={statusSelect}
				addToList={addToList}
				removeFromList={removeFromList}
			/>
        </Provider>
    )
});

// test("album image rendered", () => {
//     const imgAlbum = screen.getByAltText(albumName);
//     expect(imgAlbum).toBeInTheDocument();
    
// });

test("track title rendered", () => {
    const trackTitle = screen.getByText(name);
    expect(trackTitle).toBeInTheDocument();
});

test("track artist rendered", () => {
    const trackArtist = screen.getByText(artist);
    expect(trackArtist).toBeInTheDocument();
});

test("track image album rendered", () => {
    const trackImage = screen.getByAltText("album_cover")
    expect(trackImage.getAttribute('src')).toBe(album);
});

