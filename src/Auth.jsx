import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from './services/allAPIs';

function Auth({ register }) {
    const isRegisterForm = register ? true : false;
    const location = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        address: "",
        gender: "" 
    });

    const registerData = async () => {
        const { username, email, password, address, gender } = userData;
        if (!username || !email || !password || !address || !gender) {
            alert('Please fill the form');
        } else {
            const result = await registerAPI(userData);
            console.log(result);
            if (result.status === 200) {
                alert(result.data);
                location('/login');
            } else {
                alert(result.response.data);
            }
        }
    };

    const loginData = async () => {
        const { email, password } = userData;

        if (!email || !password) {
            alert('Please fill the form');
        } else {
            const result = await loginAPI(userData);
            console.log(result);
            if (result.status === 200) {
                alert('login successful');
                location('/main');
            } else {
                alert('invalid');
            }
        }
    };

    return (
        <div style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-4"></div>
                <div style={{ marginTop: '200px' }} className="col-4 card shadow m-5 p-5">
                    <h1>{isRegisterForm ? 'Register' : 'Login'}</h1>
                    {isRegisterForm &&
                        <input type="text" value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} className='form control mb-4' placeholder='username' />
                    }
                    <input type="text" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} className='form control mb-4' placeholder='email' /><br />
                    <input type="text" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} className='form control mb-4' placeholder='password' /><br />
                    
                    {isRegisterForm &&
                        <input type="text" value={userData.address} onChange={e => setUserData({ ...userData, address: e.target.value })} className='form control mb-4' placeholder='address' />
                    }
                    
                    {isRegisterForm &&
                        <select value={userData.gender} onChange={e => setUserData({ ...userData, gender: e.target.value })} className='form control mb-4'>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    }
                    {isRegisterForm ?
                        <div className='text-center'>
                            <button className='btn btn-primary' onClick={registerData}>Register</button>
                            <Link to={'/login'} style={{ textDecoration: "none" }}>
                                <p style={{ color: 'green' }}>login here...</p>
                            </Link>
                        </div> :
                        <div className='text-center'>
                            <button className='btn btn-primary' onClick={loginData}>Login</button>
                            <Link to={'/register'} style={{ textDecoration: "none" }}>
                                <p style={{ color: 'green' }}>Register here...</p>
                            </Link>
                        </div>
                    }
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default Auth;
