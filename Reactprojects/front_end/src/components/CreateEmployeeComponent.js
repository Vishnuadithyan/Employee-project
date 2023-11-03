import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {

    let navigate=useNavigate();

    const [employee,setEmployee]=useState({
        firstName:"",
        lastName:"",
        email:""
      })


    var cancelHandler=(e)=>{
      navigate("/employees");
    }

    const handleClick=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setEmployee({... employee,[name]:value});
    } 
  
    const saveHandler=(e)=>
    {
        e.preventDefault();
        console.log("employee =>"+JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res=>
          {
            navigate('/employees');
          })
    }


  return (
    <div className="container mt-3">
        <div className='row'>
          <div class="card col-md-6 offset-md-3">
            <h3 className='text-center'> Add Employee </h3>
            <div className="card-body">
                <form>
                  <div className="form-group my-2">
                    <label className='my-2'>First Name :</label>
                    <input type="text" name="firstName" 
                            className='form-control'
                            placeholder='first name'
                            autoComplete='off'
                            value={employee.firstName}
                            onChange={handleClick} />
                  </div>

                  <div className="form-group my-2">
                    <label className='my-2'>Last Name :</label>
                    <input type="text" name="lastName" 
                            className='form-control'
                            placeholder='last name'
                            autoComplete='off'
                            value={employee.lastName} 
                            onChange={handleClick}/>
                  </div>

                  <div className="form-group my-2">
                    <label className='my-2'>Email :</label>
                    <input type="text" name="email" 
                            className='form-control'
                            placeholder='email'
                            autoComplete='off'
                            value={employee.email}
                            onChange={handleClick} />
                  </div>
                  <button className='btn btn-success' onClick={saveHandler}>save</button>
                  <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>

                </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateEmployeeComponent