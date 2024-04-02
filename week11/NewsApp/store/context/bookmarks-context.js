import { createContext, useState } from "react";

// Creating a context for bookmarks with default values
export const BookmarksContext = createContext({
    ids: [], 
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

// Creating a provider component for the bookmarks context
function BookmarksContextProvider({children}) {
    const [bookmarkIds, setBookmarkIds] = useState([])

    // Function to add a bookmark by ID to the state
    function addFavorite(id){
        setBookmarkIds((currentBookmarkIds) => {
            return [...currentBookmarkIds, id];
        });
    }
    // Function to remove a bookmark by ID to the state
    function removeFavorite(id){
        setBookmarkIds((currentBookmarkIds) => {
            return currentBookmarkIds.filter((bookId) => bookId != id);
        });
    }
    
    // Value object containing state and functions related to bookmarks
    const value = {
        ids: bookmarkIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    // Providing the value to the children components through the context provider
    return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>
}

export default BookmarksContextProvider;