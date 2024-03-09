import React  from 'react';
import './style.css'
import { Link } from 'react-router-dom';
function Login(){
    return (
        <div className='login template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3>Sign In</h3>
                    <div className="mb-2">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" placeholder="Enter Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-2">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" placeholder="Enter Password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-2 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <p className='text-end mt-2'>
                        Forgot <a href=''>Password?</a><Link to = "/signup" className='ms-2'>Sign up</Link>
                    </p> 
                </form>
            </div>
        </div>
    )
}

export default Login;