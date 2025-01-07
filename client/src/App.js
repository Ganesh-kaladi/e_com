import './App.css';
import { Fragment } from 'react'
import { Navcomponet } from './component/navComponent';
import { Route, Routes } from 'react-router-dom';
import { Footercomponent } from './component/footerComponent';
import { Logincomponent } from './component/login';
import { Homepage } from './pages/home';
import { AdminPage } from './pages/adminPage';
import { Createproduct } from './component/adminPageComponent/createProduct';
import { Cartpagecomponent } from './pages/cartPage';


function App() {
  return (
    <Fragment>
      <Navcomponet />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/login' exact element={<Logincomponent />} />
        <Route path='/cart' exact element={<Cartpagecomponent />} />
        <Route path='/admin' exact element={<AdminPage />} />
        <Route path='/admin/add-product' exact element={<Createproduct />} />
      </Routes>
      <Footercomponent />
    </Fragment>
  );
}

export default App;
