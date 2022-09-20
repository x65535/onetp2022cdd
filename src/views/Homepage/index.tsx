import React, { useEffect } from 'react';
import Header from '../Header';
import style from './style.module.css'

export default function Homepage(params : {
    toggleHeader : (state : boolean) => void
}){
    useEffect(() => {
        params.toggleHeader(true)
    })

    return (
        <section className="homepage">

        </section>
    );
}