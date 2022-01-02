import React, { useEffect, useMemo, useRef, useState, useLayoutEffect } from 'react'
import { store } from '../../store/store'
import {
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import YouTube from 'react-youtube';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { setInterval } from 'timers';

const opts = {
    height: '0',
    width: '0'
};
let interval = null
export default function PlayerBar() {
    const [isReady, setIsReady] = useState(false)
    const [isPlaying, setIsPlaying] = useRecoilState(store.playingState)
    const [volume, setVolume] = useState(100)
    const [duration, setDuration] = useState<number>()
    const [timePassed, setTimePassed] = useState<number>(0)
    const player = useRef<any>()
    const timePassedStatus = useMemo(() => {
        return duration - timePassed
    }, [timePassed, duration])
    const durationStatus = useMemo(() => {
        const timeDisplay: any[] = ('' + (timePassedStatus / 60)).split('.')
        // if(timeDisplay.length) 
        if(timePassedStatus % 60 === 0) {
            timeDisplay.push(0)
        } else if(timeDisplay.length === 1) timeDisplay.unshift(0)
        if (timeDisplay.length > 1) timeDisplay[timeDisplay.length - 1] = (+timePassedStatus % 60)
        return timeDisplay.map((val)=> (+val).toLocaleString(undefined, { minimumIntegerDigits: 2 })).join(':')
    }, [timePassed, duration])
    useEffect(() => {
        let id
        if (isPlaying) {
            interval = setInterval(() => {
                setTimePassed((time) => time + 1)
            }, 1000);
        } else if (interval) {
            id = interval._id
            clearInterval(interval._id)
        }
        return () => { clearInterval(id) };
    }, [isPlaying])
    const onReady = ({ target }) => {
        player.current = target
        console.log(target);

        target.playVideoAt()
        setDuration(target.getDuration())
        setIsReady(true)
    }

    const playVideo = (status) => {
        const target = player.current
        target[`${status}Video`]()
        setIsPlaying((prevState) => !prevState)
    }
    const handleVolumeChange = (event, value) => {
        const target = player.current
        target.setVolume(value);
        setVolume(value)
    }

    const handleDurationChange = (event, value) => {
        const target = player.current
        target.seekTo(value)
        setTimePassed(value)
    }
    const endOfVideo = () => {
        clearInterval(interval._id)
        setIsReady(false)

    }
    return (
        <div className="player-container">
            <div className="player-youtube-iframe">
                <YouTube videoId="qjuphuG3ndw" ref={player} opts={opts} onEnd={endOfVideo} onReady={onReady} />
            </div>
            {(isReady && !isNaN(timePassedStatus)) && <div className="player-container-toolbar">
                <div>
                    <Box sx={{ width: 200 }}>
                        <Stack spacing={2} direction="row"  >
                            <Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} />
                            <VolumeUp />
                        </Stack>
                    </Box>

                </div>
                <div className="play-box-container">
                    {!isPlaying ? <div onClick={() => playVideo('play')}><i className="far fa-play-circle"></i></div> :
                        <div onClick={() => playVideo('pause')}><i className="fas fa-pause-circle"></i></div>}
                    {durationStatus}
                    <Box sx={{ width: 200 }}>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <Slider aria-label="Duration" max={duration} value={timePassed} onChange={handleDurationChange} />
                        </Stack>
                    </Box>
                </div>
                <div>song name</div>
            </div>}

        </div>
    )
}
