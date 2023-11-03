import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
        <HeaderComponent/>
        
        <Router>

        <div className='container mt-4'>
            <Routes>
              <Route exact path='/' element={<ListEmployeeComponent/>}/>
              <Route path='/employees' element={<ListEmployeeComponent/>}/>
              <Route path='/add-employee' element={<CreateEmployeeComponent/>}/>
              <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
            </Routes>
        </div>

        </Router>

        <FooterComponent/>

    </div>
  )
}

export default App