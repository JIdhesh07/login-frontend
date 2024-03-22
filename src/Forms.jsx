import React, { useEffect, useState } from 'react';
import './Forms.css';
import { AddFormDataAPI } from './services/allAPIs';
import { Link } from 'react-router-dom';
// import { updateUserAPI } from './services/allAPIs';


function Forms() {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   name: '',
  //   password: '',
  //   date: '',
  //   number: '',
  //   gender: '',
  //   address: '',
  //   location: '',
  //   termsChecked: false
  // });

  const [token, setToken] = useState('');
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const [formData, setFormData] = useState({
    username: '', email: '', name: '', password: '', date: '', number: '', gender: '', address: '', location: '', file: ''
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (formData.file) {
      setPreview(URL.createObjectURL(formData.file));
    }
  }, [formData.file]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async () => {
   
    const { username, email, name, password, date, number, gender, address, location, file } = formData;
    let validated = validateForm();
    if (!validated) {
      alert('Please fill out all fields');
      return;
    }

    const reqBody = new FormData();
    reqBody.append("username", username);
    reqBody.append("email", email);
    reqBody.append("name", name);


    reqBody.append("password", password);
    reqBody.append("date", date);
    reqBody.append("number", number);
    reqBody.append("gender", gender);
    reqBody.append("address", address);
    reqBody.append("location", location);

    reqBody.append("file", file);

    const reqHeader = {
      "Content-Type": 'multipart/form-data',
      "Authorization": `Bearer ${token}`
    };

    try {
      const result = await AddFormDataAPI(reqBody, reqHeader);
      console.log(result);
      if (result.status === 200) {
        console.log(result.data);
        alert('form created successfully')
      } else {
        console.log(result.response.data);
      }
    } catch (error) {
      console.error("Error adding form:", error);
    }
  };
  const [errors, setErrors] = useState({
    username: '',
    name: '',
    password: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    place: '',
    agreeTerms: '',
  });

  const validateForm = () => {
    const { username, email, name, password, date, number, gender, address, location, file } = formData;
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!name) newErrors.name = 'Name is required';
    if (!password) newErrors.password = 'Password is required';
    if (!email) newErrors.email = 'email number is required';
    if (!address) newErrors.address = 'Address is required';
    if (!date) newErrors.date = 'Date of Birth is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!location) newErrors.location = 'Place is required';
    if (!number) newErrors.number = 'Required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <Link to={'/main'}>
        <button className='id' style={{ marginLeft: '100px', marginTop: '50px', color: 'white', backgroundColor: 'black' }}>Back</button>
      </Link>

      <div>
        <h1 style={{ marginLeft: '600px' }}>Forms</h1>
      </div>

      <br />
      <br />

      <div style={{ marginTop: '-50px' }} className="register-container">
        <div style={{ width: '600px' }} className="register-card">
          <div>
            <div className="form-group">
              <label htmlFor="">Username: </label>
              <input type='text' id="username" name='username' value={formData.username} onChange={handleInputChange} />
             <p style={{color:'red'}}>{errors.username}</p>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name='name' value={formData.name} onChange={handleInputChange} />
              <p style={{color:'red'}}>{errors.name}</p>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name='email' value={formData.email} onChange={handleInputChange} />
              <p style={{color:'red'}}>{errors.email}</p>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name='password' value={formData.password} onChange={handleInputChange} />
              <p style={{color:'red'}}>{errors.password}</p>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date of birth:</label>
              <input type="date" id="date" name='date' value={formData.date} onChange={handleInputChange} />
              <p style={{color:'red'}}>{errors.date}</p>
            </div>
            <div className="form-group">
              <label htmlFor="number">Number:</label>
              <input type="number" id="number" name='number' value={formData.number} onChange={handleInputChange} />
              <p style={{color:'red'}}>{errors.number}</p>
            </div>
            <div className="form-group">
              <fieldset>
                <legend>Gender:</legend>
                <label htmlFor="male">
                  <input id="male" type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleInputChange} />
                  Male
                </label>
                <label htmlFor="female">
                  <input id="female" type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleInputChange} />
                  Female
                </label>
              </fieldset>
              <p style={{color:'red'}}>{errors.gender}</p>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name='address' value={formData.address} onChange={handleInputChange} />
              <p style={{color:'red'}}>{errors.address}</p>
            </div>
            <div className="form-group">
              <label htmlFor="location">Select Dropdown:</label>
              <select id="location" name="location" value={formData.location} onChange={handleInputChange} >
                <option value="">Select an option</option>
                <option value="option1">palakkad</option>
                <option value="option2">kochi</option>
                <option value="option3">thrissur</option>
              </select>
              <p style={{color:'red'}}>{errors.location}</p>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="upload">Upload:</label>
              <input type="file" id="upload" name='file' onChange={handleFileChange} />
            </div>
            <br />
            <button onClick={handleSubmit} style={{ backgroundColor: 'green', color: 'white' }} className='form-control'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
