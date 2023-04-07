import { createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main/Main'
import Home from './Page/Home/Home';
import Contact from './Page/Contact/Contact';
import About from './Page/About/About';
import Booking from './Page/Booking/Booking';
import Product from './Page/Product/Product';

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/product', element: <Product />
            },
            {
                path: '/booking', element: <Booking />
            },
            {
                path: '/about', element: <About />
            },
            {
                path: '/contact', element: <Contact />
            },
        ]
    }
])

export default router;