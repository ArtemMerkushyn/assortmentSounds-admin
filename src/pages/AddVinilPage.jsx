import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

export const AddVinilPage = () => {
    const [vinilData, setVinilData] = useState({
        nameVinil: '',
        genre: '',
        availability: '',
        price: '',
        productCode: '',
        conditionGoods: '',
        producer: '',
        releaseDate: '',
        description: '',
        imgUrl: Array(3).fill(''),
    });

    const navigate = useNavigate();

    const handleImageChange = (event, index) => {
        const newImg = [...vinilData.imgUrl];
        newImg[index] = event.target.value;
        setVinilData({ ...vinilData, imgUrl: newImg });
     };

    return (
        <form className='form-add' onSubmit={e => e.preventDefault()}>
            <h3 className='title1'>Додай вінілову платівку</h3>
            <label className="form-add__item">
                <h3 className='title2'>Назва товару</h3>
                <input 
                    type="text" 
                    value={vinilData.nameVinil}
                    onChange={(e) => setVinilData({ ...vinilData, nameVinil: e.target.value })}
                />
            </label>
            <label className="form-add__item">
                <h3 className='title2'>Код товару</h3>
                <input 
                    type="text" 
                    value={vinilData.productCode}
                    onChange={(e) => setVinilData({ ...vinilData, productCode: e.target.value })}
                />
            </label>
            <label className="form-add__item">
                <h3 className='title2'>Наявність товару</h3>
                <select 
                    value={vinilData.availability}
                    onChange={(e) => setVinilData({ ...vinilData, availability: e.target.value })}
                >
                    <option value="Alternative Rock">В наявності</option>
                    <option value="Heavy Metal">Скоро буде</option>
                </select>
            </label>
            <label className="form-add__item">
                <h6 className='title2'>Жанр вінілової платівки</h6>
                <select
                    value={vinilData.genre}
                    onChange={(e) => setVinilData({ ...vinilData, genre: e.target.value })}
                >
                    <option value="Alternative Rock">Alternative Rock</option>
                    <option value="Heavy Metal">Heavy Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Classical">Classical</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Folk Rock">Folk Rock</option>
                    <option value="Funk, Soul">Funk, Soul</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="Indie Pop">Indie Pop</option>
                    <option value="Indie Rock">Indie Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Pop">Pop</option>
                    <option value="Pop Rock">Pop Rock</option>
                    <option value="Rock">Rock</option>
                    <option value="Soundtrack">Soundtrack</option>
                    <option value="Rock & Roll">Rock & Roll</option>
                    <option value="Ambient">Ambient</option>
                    <option value="Stage & Screen">Stage & Screen</option>
                    <option value="Prog Rock">Prog Rock</option>
                    <option value="Synth Pop">Synth Pop</option>
                </select>
            </label>
            <label className="form-add__item">
                <h3 className='title2'>Ціна товару</h3>
                <input 
                    type="text" 
                    value={vinilData.price}
                    onChange={(e) => setVinilData({ ...vinilData, price: e.target.value })}
                />
            </label>
            <label className="form-add__item">
                <h6 className='title2'>Стан товару</h6>
                <select
                    value={vinilData.conditionGoods}
                    onChange={(e) => setVinilData({ ...vinilData, conditionGoods: e.target.value })}
                >
                    <option value="Новий">Новий</option>
                    <option value="б/у">б/у</option>
                </select>
            </label>
            <label className="form-add__item">
                <h3 className='title2'>Лейбли / Бренди</h3>
                <input 
                    type="text"
                    value={vinilData.producer}
                    onChange={(e) => setVinilData({ ...vinilData, producer: e.target.value })} 
                />
            </label>
            <label className="form-add__item">
                <h3 className='title2'>Дата релізу</h3>
                <input 
                    type="text" 
                    value={vinilData.releaseDate}
                    onChange={(e) => setVinilData({ ...vinilData, releaseDate: e.target.value })} 
                />
            </label>
            <label className="form-add__item">
                <h3 className='title2'>Опис</h3>
                <TextareaAutosize
                    value={vinilData.description}
                    onChange={(e) => setVinilData({ ...vinilData, description: e.target.value })} 
                />
            </label>
            <label className="form-add__item">
                <h3 className='title2'>Картинки</h3>
                {vinilData.imgUrl.map((imgUrl, index) => (
                    <div className='form-add__item-imgs' key={index}>
                        <input type="text" value={imgUrl} onChange={(event) => handleImageChange(event, index)} />
                        <img src={imgUrl} alt={``} />
                    </div>
                ))}
            </label>
            <div className='btn-wrapper'>
                <button
                    className='btn'
                    type='submit'
                >
                    Добавити
                </button>

                <button
                    className='btn'
                >
                    Відмінити
                </button>
         </div>
        </form>
    );
}
