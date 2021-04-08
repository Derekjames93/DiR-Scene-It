import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'

export default function Movie() {
    // const movies = useSelector((state) => state)
    const [movies, setMovie] = useState('')

    const fetchMovies = (e) => {

        const encodedSearch = encodeURIComponent(movies)
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.Search)
                // dispatch(createAddMovie(data.Search))
                setMovie(data.Search)
            })
    }

    // useEffect(() => {
    //     fetchMovies()
    // },[])


    return (
        <>
        <div>
            <Home />
        </div>
        <div>
            
        </div>
        </>
    )
}
