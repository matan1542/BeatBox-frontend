import {
    atom,
} from 'recoil';
const playingState = atom({
    key: 'playingState',
    default: false,
});
const songsState = atom({
    key: 'songsState',
    default: null,
});
const runingSongState = atom({
    key: 'runningSongState',
    default: null,
});
export const store = {
    playingState,
    songsState,
    runingSongState
}

