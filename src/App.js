import logo from './logo.svg';
import './App.css';
import Loading from './Pages/shared/Loading';
import toast from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route/Route';
import Login from './Pages/Login/Login';

function App() {
 
  return (
    <div className="">
          <RouterProvider router={router}></RouterProvider>
          
    </div>
  );
}

export default App;
