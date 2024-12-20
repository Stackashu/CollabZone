import {createBrowserRouter} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login and signup/Login';
import SignUp from './components/Login and signup/SignUp';

const router = createBrowserRouter([
    {
        path: '/' ,
        element: <Landing/>

    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
])

export default router;