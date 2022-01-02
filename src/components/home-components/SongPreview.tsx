import React from 'react'
import {Song} from '../../interfaces/Song'
type SongPreviewProps = {
    song:Song
}
export default function SongPreview({song}:SongPreviewProps) {
    
    return (
        <div className="song-preview-section">
            <h2>{song.title}</h2>
        </div>
    )
}
