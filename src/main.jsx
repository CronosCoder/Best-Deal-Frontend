import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import LogIn from './Pages/LogIn/LogIn.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import Slider from './Components/Slider/Slider.jsx';
import Whishlist from './Pages/Whishlist/Whishlist.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path: '',
        element: <Slider/>
      },
      {
        path: 'nested/freshmeat',
        element: <Slider/>
      },
      {
        path: 'nested/freshvegetable',
        element: <Slider/>
      },
      {
        path: 'nested/biscuitsnack',
        element: <Slider/>
      },
    ]
  },
  {
    path: "/login",
    element: <LogIn/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/wishlist",
    element: <Whishlist/>,
  },
  {
    path: "/cart",
    element: <Whishlist/>,
  },
  {
    path: "/product/:id",
    element: <ProductDetails/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
