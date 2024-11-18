import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './layouts/Home.jsx';
import News from './layouts/News.jsx';
import Login from './layouts/Login.jsx';
import CategoryNews from './pages/CategoryNews.jsx';

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
        loader: ({params}) => 
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <CategoryNews></CategoryNews>
      }
    ]
  },
  {
    path: "news",
    element: <News></News>
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "*",
    element: <h1>ERROR</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
