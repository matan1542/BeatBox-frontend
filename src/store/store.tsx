import {
    atom,
} from 'recoil';
const playingState = atom({
    key: 'playingState',
    default: false,
});
export const store = {
    playingState
}

