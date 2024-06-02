// import { useState } from 'react'
// import * as ReactDOM from "react-dom/client";
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/routes/Root';
import ErrorPage from './components/ErrorPage';
import RentCalculation from './components/routes/RentCalculation';
import UserDetails from './components/routes/UserDetails';
import AddUser from './components/routes/AddUser';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/userdetails/:name",
    element: <UserDetails/>
  },
  {
    path: "rent-calculation",
    element: <RentCalculation/>
  },
  {
    path: "add-user",
    element: <AddUser/>
  }
])
function App() {

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
