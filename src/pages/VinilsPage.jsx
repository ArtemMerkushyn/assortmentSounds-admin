import React from 'react';
import { Link } from 'react-router-dom';

export const VinilsPage = () => {
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
        </div>
    );
}
