
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Home from './components/Home';
import { store } from './Redux/Store';
import Newt from './components/Newt';
import OneTask from './components/Task';

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>},{
      path:'/newtask',
      element:<Newt/>},{
      path:'/task/:id',
      element:<OneTask/>
    },
  ])
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
