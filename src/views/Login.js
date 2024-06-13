import { TextField, Button, FormGroup } from '@mui/material';

import logo from '../logo.svg';
import './App.css';

export default function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <FormGroup>
                <TextField variant='standard' label='Username'>Username </TextField>
                <TextField variant='standard' label='Password' type='password'>Password</TextField>
                <Button type="submit">Login</Button>
                <Button type="submit">Register</Button>
            </FormGroup>
        </div>
    );
}