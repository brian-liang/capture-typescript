import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const MovieDetail = () => {
    const history = useLocation()
    const url = history.pathname

    return(
        <div>
            <h1>MovieDetail</h1>
        </div>
        )
}

export default MovieDetail
