import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs( category );


    




    return (
        <>
            <h3>{category}</h3>
            { loading && <p>cargando</p>}
            <div className='card-grid'>
                <ol>
                    {
                        data.map( img  => (
                            <GifGridItem key={img.id} {...img}/>
                        ))
                    }
                </ol>
            </div>
        </> 
    )
}
