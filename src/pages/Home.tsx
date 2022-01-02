import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {store} from '../store/store'
import { beatService } from '../services/beat.service'
import SongList from '../components/homeComponents/SongList' 

export default function Home() {
    const [songsState,setSongsState] = useRecoilState(store.songsState)
    useEffect(()=>{
        async function fetchData(){
            const songs = await beatService.query()
            console.log('songs fetchData',songs);
            
            setSongsState(songs)
        }
        fetchData()
        
    },[])
    if(!songsState || !songsState.length) return <div>Loading...</div>
    return (
        <div className="home-container">
            <SongList songs={songsState}/>
        </div>
    )
}
