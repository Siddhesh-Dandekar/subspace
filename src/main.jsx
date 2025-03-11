import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignupUser from './components/signup.jsx';
import Dashborad from './components/dashboard.jsx';

const Approuter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element : <Dashborad />
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={Approuter} ></RouterProvider>
)
