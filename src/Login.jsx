import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './pagesCss/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Simulated user database with roles
    const users = [
        { email: 'clinic@gmail.com', password: 'clinic123', role: 'clinic' },
        { email: 'harsh@gmail.com', password: 'harsh123', role: 'patient' },
    ];

    // Check if the user is already logged in
    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (userRole === 'clinic') {
            navigate('/clinic-dashboard');
        } else if (userRole === 'patient') {
            navigate('/patient-dashboard');
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the user exists in the hardcoded "users" array
        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            // Store user role in localStorage
            localStorage.setItem('userRole', user.role);

            // Redirect to the appropriate dashboard
            if (user.role === 'clinic') {
                navigate('/clinic-dashboard');
            } else if (user.role === 'patient') {
                navigate('/patient-dashboard');
            }
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login_div">
            {error && <p className="error-message">{error}</p>}

            <div className="card">
                <h2>Login Form</h2>

                {/* SE CONNECTER / S'INSCRIRE */}
                {/* <div className="login_register"> */}
                    {/* <a href="/" className="login" target="_blank" rel="noopener noreferrer">Login</a> */}
                    {/* {/* <a href="/" className="register" target="_blank" rel="noopener noreferrer">Signup</a> */}
                {/* </div> */}

                {/* FORMULAIRE */}
                <form className="form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {/* BOUTTON LOGIN */}
                    <button type="submit" className="login_btn">Login</button>
                </form>

                {/* MOT DE PASSE OUBLIE ? */}
                

                {/* PIED DE LA CARD */}
                <div className="footer_card">
                    <p>Not a member?</p>
                    <a className='loginSignUP' href="#">Signup now</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
