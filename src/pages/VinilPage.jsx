import axios from '../utils/axios.js';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TextareaAutosize from 'react-textarea-autosize';


export const VinilPage = () => {
    const [vinil, setVinil] = useState(null);
    const [open, setOpen] = useState(false);

    const params = useParams();

    const fetchVinil = useCallback(async () => {
        const { data } = await axios.get(`/vinils/${params.id}`);
        setVinil(data);
    }, [params.id]);

    useEffect(() => {
        fetchVinil();
    }, [fetchVinil]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!vinil) {
        return (
           <div>
              Загрузка...
           </div>
        )
     }
    return (
        <div className='vinil-page'>
            <div className="vinil-page__wrapper">
                <div className="vinil-page__item">
                    <Slider className='slider__items' {...settings}>
                        {vinil.imgUrl.map((img, index) => (
                        <div className='slider__item' key={index}>
                            <img src={img} alt={'img'} />
                        </div>
                        ))}
                    </Slider>
                </div>
                <div className="vinil-page__item">
                    <h3 className='title2'>{vinil.nameProduct}</h3>
                    <p>Жанр: {vinil.genre}</p>
                    <p>Виробник/бренд: {vinil.producer}</p>
                    <p>Дата релізу: {vinil.releaseDate}</p>
                    <p>Ціна: {vinil.price} грн</p>
                    <p>Наявність товару:{vinil.availability}</p>
                    <p>Стан товару: {vinil.conditionGoods}</p>
                    <p>Код товару: {vinil.productCode}</p>
                    <h5 className='title3'>Опис товару</h5>
                    <TextareaAutosize
                        spellCheck={false}
                        value={vinil.description}
                        onChange={(e) => setVinilData({ ...vinilData, description: e.target.value })} 
                    />
                </div>
            </div>
        </div>
    );
}