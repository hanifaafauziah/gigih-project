import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from '../../redux/store.ts'
import CreatePlaylist from "./createPlaylist";
import { Provider } from 'react-redux';


const title = "Kenapa aku bisa jadi manusia";
const titlePage = "Create Playlist"

beforeEach(() => {
    render (
        <Provider store={store}>
            <CreatePlaylist />
        </Provider>
    )
});

test("type title", () => {
    const searchInput = screen.getByPlaceholderText('Find your favourite songs...');
    userEvent.clear(searchInput);
    userEvent.type(searchInput, title);
    expect(searchInput).toHaveValue(title);
});

test("title create playlist rendered", () => {
    const PageTitle = screen.getByText(titlePage);
    expect(PageTitle).toBeInTheDocument();
});