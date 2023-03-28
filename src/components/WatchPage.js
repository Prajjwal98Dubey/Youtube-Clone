import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
    const [searchParam]=useSearchParams();
    const dispatch=useDispatch();
    useEffect(()=>{
          dispatch(closeMenu())  
    },[])
  return (
        <iframe className='mx-5 my-5' width="1000" height="450" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}

export default WatchPage