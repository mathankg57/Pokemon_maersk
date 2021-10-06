import React, { useEffect } from 'react';
import { Toast } from 'react-bootstrap';

export default function Toaster( { message } ) {
    const [ show, setShow ] = React.useState( true );
    useEffect( () => {
        if ( message )
            setShow( true )
    }, [ message ] );

    return (
        <div>
            <Toast show={ show } onClose={ () => setShow( false ) } className="d-inline-block m-1" bg='Light'>
                <Toast.Header>
                <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body >
                    { message }
                </Toast.Body>
            </Toast> 
        </div>
    )
}
