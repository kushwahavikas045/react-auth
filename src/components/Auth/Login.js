import React,{useState} from 'react'
import PageHeaders from '../Layout/PageHeaders';
import Grid from '../Layout/Grid';
import { useDispatch } from 'react-redux';
import { login } from '../../action/auth';
import { useHistory } from 'react-router-dom';
const initialFormData = Object.freeze({
    Email: "",
    Password:"",
  });
const Login = () => {
    const [formData, updateFormData] = useState(initialFormData);
    const dispatch = useDispatch();
    const history = useHistory();
    //handleChange
    const handleChange = (e) =>{
        updateFormData({
            ...formData,
                // Trimming any whitespace
           [e.target.name]: e.target.value.trim()
          });
    }

    //handleSubmit
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(formData.Email, formData.Password, history));
    }
    return (
        <Grid>
        <PageHeaders title='Login' subtitle='Enter secure password'/>
        <form className='ui form' onSubmit={handleSubmit}>
        <div className="field">
        <label>Email</label>
        <input
        name='Email'
        title='Email'
        type='email'
        onChange={handleChange}
        />
        </div>
        <div className="field">
        <label>Password</label>
        <input
        name='Password'
        type='password'
        onChange={handleChange}
        />
        </div>
        <button className='ui button primary'>Login
        </button>
        </form>
        </Grid>
    )
}

export default Login

