import logo from './logo.svg';
import './App.css';
import UniversalStyle from './UniversalStyle.css';
import { Suspense,lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Blogs from './MainCompos/Blogs'
import Courses from './MainCompos/Courses'
import Contacts from './MainCompos/Contacts';
import NavBar from './MainCompos/NavBar';
import Footer from './MainCompos/Footer'
import ApplyCourse from './MainCompos/ApplyCourse';
import CommnetCrt from './MainCompos/CommnetCrt';
import Searchpost from './MainCompos/Searchpost';
const Home = lazy(()=> import("./MainCompos/Home"));
const Login = lazy(()=> import("./AuthCompos/Login"));
const Register = lazy(()=> import("./AuthCompos/Register"));



 function App() {

function PrivateRoute ({children}){
const token = localStorage.getItem("token") || sessionStorage.getItem("token");

return token!== null && token!== undefined? (
  children):
  (
    <>
    <Navigate to="/Login" />
    </>
  )


}




const PrivateRouteNames = [
  {
    path:"/Blogs",
    Component: <Blogs />,
  },
  {
    path:"/Courses",
    Component: <Courses />
  },
  {
    path:"/ApplyCourse/:id",
    Component: <ApplyCourse />
  },
  {
    path:"/Searchpost",
    Component:<Searchpost/>
  }
];

const PublicRouteNames = [
  {
    path:"/",
    Component: <Home />,
  },
  {
    path:"/Contacts",
    Component: <Contacts />,
  },
  {
    path:"/Login",
    Component: <Login />,
  },
  {
    path:"/Register",
    Component: <Register />,
  },
  {
    path:"/Commentcrt",
    Component:<CommnetCrt/>
  }
];




  return (
    <div className="App">
      <Suspense fallback={<h2> Loading....</h2>}>
        <Router>
          <NavBar/>
          <Routes>

            {PublicRouteNames?.map((route,index)=>{
              return( <Route key={index} exact path={route.path} element={route.Component} />)
            })

            };

            {PrivateRouteNames?.map((route,index)=>{
              return( <Route key={index} path={route.path} element={<PrivateRoute> {route.Component} </PrivateRoute>}  />)
            })}

            {/* <Route path='/'  element={ <Home/>}  /> */}

          </Routes>
         
        </Router>

      </Suspense>
    




    </div>
  );
}

export default App;
