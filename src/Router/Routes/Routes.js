import Main from "../../Layout/Main";
import Cart from "../../Pages/Cart/Cart";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CourseDetails/CoursesDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyCourses from "../../Pages/MyCourses/MyCourses";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import Privateroute from "../../Privateroute/Privateroute";

const { createBrowserRouter, Link } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/home',
                element:<Home/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/courses',
                loader: async() =>{
                    return fetch('http://localhost:5000/courses')
                },
                element:<Courses/>,
                
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: '/courses/:id',
                loader: ({params}) =>fetch(`http://localhost:5000/courses/${params.id}`),
                element:<CoursesDetails/>
            },
            {
                path: '/cart',
                element:<Privateroute><Cart/></Privateroute>
            },
            {
                path: '/mycourses',
                element:<Privateroute><MyCourses/></Privateroute>
            },
            {
                path: '/myreviews',
                element:<Privateroute><MyReviews/></Privateroute>
            }
        ]
    },
    {path: '/*', element: <div className='min-h-screen bg-black text-white flex justify-center items-center font-bold text-5xl'>Sorry, You are in dead-end! Go to -{'>'} <Link to={'/home'} className='text-red-500 bg-white hover:text-green-500 p-2 rounded-md'>Home</Link></div>
    }
]);

export default router;