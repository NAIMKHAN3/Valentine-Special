import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router';
import { Provider } from 'react-redux';
import store from './app/store';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-neutral-100'>
      <Provider store={store}>
        <Toaster />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
