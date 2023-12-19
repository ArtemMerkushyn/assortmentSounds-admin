import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink to={'/'}>Головна</NavLink>
            <NavLink to={'vinils'}>Вінілові платівки</NavLink>
            <NavLink to={'somepage'}>somepage</NavLink>
        </div>
    );
}
