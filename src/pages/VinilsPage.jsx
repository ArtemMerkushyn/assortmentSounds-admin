import axios from '../utils/axios.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductLink } from '../components/ProductLink';

export const VinilsPage = () => {
    const [vinils, setVinils] = useState([]);

    const fetchVinils = async () => {
        try {
            //const { data } = await axios.get('/vinils');
            const { data } = await axios.get('https://assortment-sounds-api.vercel.app/api/vinils');
            setVinils(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchVinils()
    }, []);

    return (
        <div className='vinil-page'>
            <div className='vinil-page__header'>
                <div className='title1'>
                    Добавити вінілову платівку
                </div>
                <Link className='add' to={'/vinils/add'}>
                    <div className="add"></div>
                </Link>
            </div>
            <div className="vinil-page__container">
                {vinils?.map((vinil, idx) => {
                   return <ProductLink key={idx} about={vinil} />
                })}
            </div>
        </div>
    );
}
