import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Makepayment from './components/Makepayment'
import Notfound from './components/Notfound';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.min.js"


function App() {
  return (
    <Router>
      <div className="App container-fluid">


      <Routes>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproducts/>}/>
        <Route path='/aboutus' element={<aboutus/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>


    </div>
    </Router>
  );
}

export default App;
