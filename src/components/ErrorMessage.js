import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function ErrorMessage({variant="info",children}) {
  return (
    <>
       
        {/* <Alert variant={variant} style={{fontSize:20}}>
          <strong>{children}</strong>
        </Alert> */}
        <Alert variant="danger">
      <strong style={{color:'black'}}>{children}</strong>
      </Alert>
      
    </>
  )
}
