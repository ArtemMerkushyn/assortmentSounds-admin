import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { MainPage } from './pages/MainPage.jsx';
import { VinilsPage } from './pages/VinilsPage.jsx';
import { AddVinilPage } from './pages/AddVinilPage.jsx';
import { VinilPage } from './pages/VinilPage.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: 'vinils',
                element: <VinilsPage/>
            },
            {
                path: 'vinils/add',
                element: <AddVinilPage/>
            },
            {
                path: 'vinils/:id',
                element: <VinilPage/>
            },
        ]
    }
]);