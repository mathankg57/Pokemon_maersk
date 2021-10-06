import React, { useState, useEffect } from 'react';
import useFetch from '../../customHooks/fetch';
import CONSTANTS from '../../config';
import Pokemon from '../pokemon';
import './style.css';

export default function Home() {
    const [ pokemonList, setPokemonList ] = useState( [] );
    const [ response, error ] = useFetch( `${ CONSTANTS.API_URL }/pokemon/?offset=0&limit=20` );

    useEffect( () => { 
        if ( response ) {
           setPokemonList( response.results )
        }
    }, [ response, error ] );

    return (
        <div className="wrapper">
            {
                pokemonList.length > 0 && pokemonList.map( ( item, index ) =>
                    <Pokemon key={ index } name={ item.name } url={ item.url } />
                )
            }
        </div>
    )
}
