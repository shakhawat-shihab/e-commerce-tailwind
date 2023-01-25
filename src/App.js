import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/route';

function App() {
  return (
    // <div>
    <RouterProvider router={routes} />
    // </div>
  );
}

export default App;
