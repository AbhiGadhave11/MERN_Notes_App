import React from 'react'
import {Row} from 'react-bootstrap'
import './MainScreen1.css'

export default function MainScreen({title,children}) {
  return (
    <div className='mainback'>
        <div container="my-3" >
            <Row>
                <div className="page">
                    {title && (
                        <>
                            <h1 className="heading">{title}</h1>
                            <hr />
                        </>
                    )}
                    {children}
                </div>

            </Row>
        </div>
    </div>
  )
}


