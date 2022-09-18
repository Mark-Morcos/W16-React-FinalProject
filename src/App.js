import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Produts from './components/Products';
import DataTable from './components/DataTable';
import ReviewForm from './components/ReviewForm';


function App() {
  return (
    <Router>
 <NavBar />
 <Routes>
 <Route path='/' element={<Produts/>}/>
 <Route path='/Pictures' element={<DataTable/>}/>
 <Route path='/About' element={<ReviewForm/>}/>
 </Routes>
    </Router>
   
  );
}

export default App;
