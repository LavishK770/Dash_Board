import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';
import Main from './Main';
import Dash_Board from './Dash_Board';
import Priority from './Priority';
import User from './User';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Priority' element={<Priority/>}/>
      <Route path='/User' element={<User/>}/>
      
    </Routes>
    </BrowserRouter> 
 
  </Provider>
  </>
);

