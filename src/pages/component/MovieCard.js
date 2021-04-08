import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createAddMovie, createDeleteMovie } from '../../redux/action'

export default function MovieCard(props) {
    const { Title, Year, imdbID, Poster } = props.movie
    const dispatch = useDispatch()
    const watchListMovie = useSelector((state) => {
        return state.movies.find((movie) => movie.imdbID === imdbID)
    })

    const addMovie = () => {
        dispatch(createAddMovie(props.movie))
    }

    const deleteMovie = () => {
        dispatch(createDeleteMovie(imdbID))
    }

    
    console.log(watchListMovie)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Title>{Year}</Card.Title>
                    {
                        watchListMovie ? (
                            <Button onClick={deleteMovie} variant="danger">Remove</Button>

                        ) : (
                            <Button onClick={addMovie} variant="primary">Add</Button>

                        )
                    }      
                </Card.Body>
            </Card>

        </div>
    )
}
