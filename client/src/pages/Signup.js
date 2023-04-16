import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Box, Button } from '@mui/material';

function Signup(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='signupContainer' style={{ fontFamily: 'aclonica' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'align-self',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '8vh',
                    backgroundColor: '#bdbdbd',
                    width: '80%',
                    margin: 'auto',
                    border: 1

                }}>
                Already have an account?
                <Link underline='none' to="/login">
                    <Button variant='contained'
                        sx={{
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            backgroundColor: 'white',
                            color: 'black',
                        }}>


                        Login here!</Button>
                </Link>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '15vh',
                    marginTop: '4vh',
                    border: 1,
                    paddingBottom: '6vh',
                    paddingTop: '4vh',
                    backgroundColor: '#bdbdbd',

                }}>

                <h2>Create a New Account</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='usernameSignup'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            placeholder='Username'
                            name='username'
                            type='username'
                            id='username'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='passwordSignup'>
                        <label htmlFor='pwd'>Password</label>
                        <input
                            placeholder='*********'
                            name='password'
                            type='password'
                            id='pwd'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='submitBtn'>
                        <Button variant='contained' type='submit'
                            sx={{
                                paddingTop: '1px',
                                paddingBottom: '1px',
                                backgroundColor: 'white',
                                type: 'submit',
                                color: 'black',
                                }}>
                                Submit
                                </Button>
                    </div>
                </form>
            </Box>
        </div>
    );
}

export default Signup;