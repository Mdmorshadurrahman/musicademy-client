import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {
  return (
    // <div className='bg-black text-pink-500 text-center min-h-screen text-7xl font-bold flex items-center justify-center'>
    //   <img className='w-20' src="https://i.ibb.co/rdZ8qjY/android-chrome-192x192.png" alt="" /> Musicademy
    // </div>

    <div className=' text-center w-5/6 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
