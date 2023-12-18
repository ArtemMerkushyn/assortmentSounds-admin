import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { MainPage } from './pages/MainPage.jsx';
import { VinilsPage } from './pages/VinilsPage.jsx';

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
                path: '/vinils',
                element: <VinilsPage/>
            }
        ]
    }
]);