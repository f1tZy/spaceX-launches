import React from 'react';
import LoaderStyle from '../../styles/LoaderStyle';

export default function Loader() {
    return (
        <LoaderStyle>
            <div className='lds-roller'>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </LoaderStyle>
    )
}