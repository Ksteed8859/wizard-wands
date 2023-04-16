import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Box, Button } from '@mui/material';
import { UndoRounded } from '@mui/icons-material';

function Login(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container" style={{ fontFamily: 'aclonica' }}>
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
                First Time?
                <Link underline='none' to="/signup">
                    <Button
                        variant='contained'
                        sx={{
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            backgroundColor: 'white',
                            color: 'black',
                        }}>Signup
                    </Button>
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
                <h2>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='flex-row space-between my-2'>
                        <label htmlFor='username'>Username: </label>
                        <input
                            placeholder="username"
                            name='username'
                            type='username'
                            id='username'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex-row space-between my-2'>
                        <label htmlFor='pwd'>Password: </label>
                        <input
                            placeholder="********"
                            name='password'
                            type='password'
                            id='pwd'
                            onChange={handleChange}
                        />
                    </div>
                    {error ? (
                        <div>
                            <p className="error-text">Username or password is incorrect</p>
                        </div>
                    ) : null}
                    <div className='flex-row flex-end'>
                        <Button variant='contained' type='submit'
                            sx={{
                                paddingTop: '1px',
                                paddingBottom: '1px',
                                backgroundColor: 'white',
                                color: 'black'
                            }}>Submit</Button>
                    </div>
                </form>
            </Box>
        </div>

    );
}

export default Login;