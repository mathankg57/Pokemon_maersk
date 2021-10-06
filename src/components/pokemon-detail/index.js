import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import CONSTANTS from '../../config';
import useFetch from '../../customHooks/fetch';
import './style.css';
import { useLocation } from "react-router-dom";

export default function PokemonDetail() {
    let query = new URLSearchParams(useLocation().search);

    const [ abilities, setAbilities ] = useState( null );
    const [ response, error ] = useFetch( `${ CONSTANTS.API_URL }/ability/${ query.get("id") }` );

    useEffect( () => {
        setAbilities( response );
    }, [ response, error ] );

    const Ability = ( { abilities } ) => (
        <React.Fragment>
            <Row>
                <h1>
                    { abilities?.name }
                </h1>
            </Row>
            <Row>
                { abilities?.effect_entries &&
                abilities?.effect_entries.map( ( { effect, short_effect }, i ) =>
                    <div key={ i }>
                        <p>{ short_effect }</p>
                        <p>{ effect }</p>
                    </div>
                ) }
            </Row>
            <Row>
                <Col>Generation Name</Col>
                <Col>{ abilities?.generation?.name }</Col>
            </Row>
            <Row>
                <Col>Name</Col>
                <Col>{ abilities?.name }</Col>
            </Row>
            <Row>
                <Col>ID</Col>
                <Col>{ abilities?.id }</Col>
            </Row>
        </React.Fragment>
    );

    return (
        <div>
        <Container>
            <Row>
                <Col>
                    <Image src={ `${ CONSTANTS.IMAGE_URL }${ query.get("image") }` } thumbnail  />
                </Col>
                <Col className="text-area">
                    { <Ability abilities={ abilities } />}
                </Col>
            </Row>
        </Container>
        </div>
    )
    
}
