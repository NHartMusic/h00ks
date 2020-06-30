import { v4 } from 'uuid'

export const albumReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ALBUM':
            return [...state, {
                title: action.album.title,
                artist: action.album.artist,
                id: v4()
            }]
        case 'REMOVE_ALBUM':
            return state.filter(album => album.id !== action.id)
        default:
            return state
    }
}