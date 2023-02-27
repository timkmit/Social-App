import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {createBrowserRouter, RouterProvider, Route, Routes, Outlet, Navigate, } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import './style.scss'

function App() {

  const currentUser = false;

  const Layout = () => {
    return(
      <div className='theme-dark'>
        <Navbar />
        <div style={{display: 'flex'}}>
          <Leftbar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          
          <Rightbar/>

        </div>

      </div>
    )
  };

  /*const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }*/

  const router = createBrowserRouter([
    {
      path: "/",
      element: /*<ProtectedRoute><Layout/></ProtectedRoute>,*/<Layout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
  ]

    },
    {
      path:"/login",
      element: <Login/>,
    },
    {
      path:"/register",
      element: <Register/>,
    },
  ])

  return (
      <div>
        <RouterProvider router={router}/>
      </div>
      
    
      
    
  );
}

export default App;
