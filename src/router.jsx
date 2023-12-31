import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { MainPage } from './pages/MainPage.jsx';
import { VinilsPage } from './pages/VinilsPage.jsx';
import { AddVinilPage } from './pages/AddVinilPage.jsx';
import { VinilPage } from './pages/VinilPage.jsx';
import { SomePage } from './pages/SomePage.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
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
            {
                path: 'somepage',
                element: <SomePage/>
            },
        ]
    }
]);