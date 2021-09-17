import React from 'react'
import Titulo from '../Titulo/Titulo.js'
import AmericaHeader from './AmericaHeader'

import './America.css'

export default function America(props) {
    return (

        <>

            <Titulo texto="América" />
            <AmericaHeader />

            <div className="america">

            </div>
        </>
    )
}