import React from 'react'
import { Song } from '../../interfaces/Song';
import SongPreview from './SongPreview'
type SongListProps = {
    songs:Object[]
}
export default function SongList({songs}:SongListProps) {
    console.log('songsToReview:',songs);
    
    return (
        <div className="home-song-list-section">
            {
                songs.map((song:Song)=>{
                    return <SongPreview song={song} />;
                })
            }
            
        </div>
    )
}
