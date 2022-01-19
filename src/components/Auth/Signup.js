import React, { useState } from 'react'
import PageHeaders from '../Layout/PageHeaders';
import Grid from '../Layout/Grid';
import { useDispatch } from 'react-redux';
import { signUp } from '../../action/auth';
import AlertMessage from '../Layout/AlertMessage';

//inital state
const initialFormData = Object.freeze({
    Name: "",
    Email: "",
    Password: "",
});
const Signup = () => {
    const dispatch = useDispatch();
    const [formData, updateFormData] = useState(initialFormData);
    const [loading, setLoading] = useState('');

    //handleChange
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespacSignup
            [e.target.name]: e.target.value.trim()
        });
    }

    //handleSubmit
    const handleSubmit = (e) => {
        setLoading('loading');
        e.preventDefault();
        //sign action
        try {
            dispatch(signUp(formData.Email, formData.Password));
        } catch (error) {
            setLoading('');
            console.log(error.message);
        }


    }
    return (
        <Grid>
            <PageHeaders title='Sign up' subtitle='Enter secure password' />
            <form className={`ui ${loading} form`} onSubmit={handleSubmit}>
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
                <button className={`ui ${loading} button primary`}>Signup
                </button>
            </form>

            {/* alert message */}

            <div style={{ marginTop: '5%' }}>
                <AlertMessage
                    message="Access for deshboard and education route"
                    description={
                        <p>I use Json Server So,please activate endpoint for deshboard and education.
                            <h5 style={{ color: 'black', fontWeight: '8000' }}>Note -- open new terminal in same folder --</h5>
                            <h4 style={{ color: 'red', fontWeight: '8000' }}>npx json-server --watch Data/db.json --port 8000</h4> </p>}
                    type="warning"

                />
            </div>
        </Grid>
    )
}

export default Signup
