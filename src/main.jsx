import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './layouts/Home.jsx';
import CategoryNews from './pages/CategoryNews.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import NewsDetails from './layouts/NewsDetails.jsx';
import PrivateRoute from './layouts/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <CategoryNews></CategoryNews>
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "news/details/:id",
    element: <PrivateRoute> <NewsDetails></NewsDetails> </PrivateRoute> ,
    loader: ({params}) => 
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "*",
    element: <h1>ERROR</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
