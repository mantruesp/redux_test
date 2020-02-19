import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {
            title: 'Tusa',
            duration: '4:05'
        },
        {
            title: 'Rockstar',
            duration: '2:09'
        },
        {
            title: 'Rocket Man',
            duration: '4:29'
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {    
    switch(action.type){
        case 'SONG_SELECTED':
            return action.payload
        default:
            return selectedSong
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})