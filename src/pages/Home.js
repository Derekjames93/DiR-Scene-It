import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { createAddMovie, setLoading } from '../redux/action'
import MovieCard from './component/MovieCard'



export default function Home() {
    const [ search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const loading = useSelector((state) => state.loading)
    const dispatch = useDispatch()

    const fetchMovies = (e) => {
        dispatch(setLoading(true))

        
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${search}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.Search)
                dispatch(setLoading(false))
                setMovies(data.Search || []);
                if(data.Error){
                    alert(data.Error)
                }
            })
        }
        
    
    const handleSumbit = (e) => {
        e.preventDefault()
        console.log('grabbing movies')
        fetchMovies()
        
    }
    const handleChange = (e) => {
        setSearch(e.target.value)
    }



    return (
        <>
        <div>
            <h1>Home</h1>
            <Container>
                <Form onSubmit={handleSumbit}>
                    <Form.Label>Movies</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Search your favorite movie" value={search}/>
                    <Button type="submit">Submit</Button>
                </Form>
                {loading ? (
                    'Loading...'
                ) : (

                <Row>
                    {movies.map((movie) => {
                        return (
                            <Col>
                            <MovieCard movie={movie} />
                            </Col>
                        )
                    })}
                </Row>
                )}
            </Container>
        </div>
        </>
    )
}