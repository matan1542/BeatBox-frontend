import { storageService } from './async-storage-service'
import {songs} from './songs'

const SONGS_KEY = 'songs'

export const beatService = {
    query
}

async function query(filterBy = {}) {
    let songsToReview = await storageService.query(SONGS_KEY)
    if(!songsToReview || !songsToReview.length) {
        songsToReview = songs
        storageService.postMany(SONGS_KEY, songsToReview)
    }
    return songsToReview
}