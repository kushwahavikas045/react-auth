import React,{useState} from 'react'
import PageHeaders from '../Layout/PageHeaders';
import Grid from '../Layout/Grid';
import { useDispatch } from 'react-redux';
import { signUp } from '../../action/auth';
const initialFormData = Object.freeze({
    Name: "",
    Email: "",
    Password:"",
  });
const Signup = () => {
    const dispatch = useDispatch();
    const [formData, updateFormData] = useState(initialFormData);


    //handleChange
    const handleChange = (e) =>{
        updateFormData({
            ...formData,
               // Trimming any whitespacSignup
               [e.target.name]: e.target.value.trim()
          });
    }

    //handleSubmit
    const handleSubmit = (e) =>{
        e.preventDefault();
        //sign action
        dispatch(signUp(formData.Email, formData.Password));

    }
    return (
        <Grid>
        <PageHeaders title='Sign up' subtitle='Enter secure password'/>
        <form className='ui form' onSubmit={handleSubmit}>
        <div className="field">
        <label>Full Name</label>
        <input
        title='Full Name'
        type='text'
        name='Name'
        placeholder='eg: vikas kushwaha'
        onChange={handleChange}
        />
        </div>
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
        <button className='ui button primary'>Signup
        </button>
        </form>
        </Grid>
    )
}

export default Signup
