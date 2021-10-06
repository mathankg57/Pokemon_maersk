import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap';
import CONSTANTS from '../../config';
import useFetch from '../../customHooks/fetch';
import Toaster from '../toaster';
import { Link } from "react-router-dom";

import './style.css';

export default function Pokemon( { url } ) {
    const [ id, setId ] = useState( null );
    const [ detail, setDetail ] = useState( null );
    const [ image, setImage ] = useState( '' );
    const [ response, error ] = useFetch( url );

    useEffect( () => {
        const id = url.substring(0, url.length - 1 ).split( '/' ).pop();
        setId( id );
    }, [ url ] );

    useEffect( () => {
        setDetail( response );
        const image = response?.sprites?.other?.[ 'official-artwork' ]?.[ 'front_default' ].split('/').pop();
        setImage( image );
    }, [ response, error ] );

    return (
        <div>
            { detail &&
            <Card style={{ width: '18rem' }}>
            <Card.Header>{ detail.name }</Card.Header>
            <Card.Img variant="top" src={ `${ CONSTANTS.IMAGE_URL }${ id }.png` } />
            <Card.Body>
              <Card.Title>Abilities</Card.Title>
              <ListGroup horizontal>
                { detail?.abilities && detail?.abilities.map(
                    ( item , index ) => <ListGroupItem key={ index }>{ item?.ability?.name }</ListGroupItem>
                ) }
            </ListGroup>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Link to={ `/detail?id=${ id }&image=${ image }` }>
                    <Button>More</Button>
                </Link>
            </Card.Footer>
          </Card>
            }
            { error && <Toaster message={ error } /> }
        </div>
    )
}
