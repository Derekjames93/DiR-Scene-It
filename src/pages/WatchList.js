import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MovieCard from './component/MovieCard'

export default function WatchList() {
        const movies = useSelector((state) => state.movies)

    return (
        <div>
            <h2>My Movies</h2>
            <div>...movies go here...</div>
            <Container>
            <Row>
                    {movies.map((movie) => {
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <MovieCard movie={movie} />
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        </div>
    )
}
