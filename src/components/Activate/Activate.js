import React, { useState } from 'react'
import { Steps } from 'antd';
import Grid from '../Layout/Grid';
import PageHeaders from '../Layout/PageHeaders';
import styles from './Activate.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { activateUser } from '../../action/activate';
import { useHistory } from 'react-router-dom';
const { Step } = Steps;
const Activate = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png')
    const dispatch = useDispatch();
    //logic
    const user = useSelector((state) => state.auth.user);

    //image upload function
    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setImage(reader.result);
        }
    }
    const handleName = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SETNAME',
            payload: name
        });
        setCount((prev) => prev + 1);

    }

    const handleAvatar = () => {
        history.push('/education');
    }

    const userName = (
        <>
            <form className='ui  form' style={{ padding: '10px 10px', width: '300px' }}>
                <div className='field'>
                    <label>UserName</label>
                    <input type='text' placeholder='Eg: Vikas007' onChange={(e) => setName(e.target.value)} />
                </div>
                <button className='ui button primary' onClick={handleName}>Next</button>

            </form>
        </>
    )

    const profilePicture = (
        <>
            {count === 1 ? (
                <div className={styles.profile}>
                    <div className={styles.avatarWrapper}>
                        <img
                            className={styles.avatarImage}
                            src={image}
                            alt="avatar"
                        />
                    </div>
                    <div>
                        <input
                            onChange={captureImage}
                            id="avatarInput"
                            type="file"
                            className={styles.avatarInput}
                        />
                        <label className={styles.avatarLabel} htmlFor="avatarInput">
                            Change Profile picture
                        </label>

                    </div>
                    <button className='ui button primary' onClick={handleAvatar}>Next</button>
                </div>
            ) : (<p>set name</p>)}
        </>
    )
    return (
        <Grid>
            <PageHeaders title='Activate Account' subtitle="Enter Name and Image" />
            <Steps direction="vertical" size="small" current={count}>
                <Step title=" Add profile Name" description={userName} />
                <Step title="Upload profile Image" description={profilePicture} />
            </Steps>
        </Grid>
    )
}

export default Activate;
