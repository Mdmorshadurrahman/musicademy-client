import React, { useState } from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { FcGoogle } from "react-icons/fc";
import { getAuth, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const {login,loginWithGoogle} = useContext(AuthContext);
    const [userEmail,setUserEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
        login(email,password)
            .then(result => {
                const user = result.user;
                console.log('registered user',user);
                if(!result.user.emailVerified){
                    alert('Sorry, you have not verified your account yet! VERIFY FIRST');  
                    form.reset();
                    navigate('/login')
                }
                else{
                    alert('Congratulation '+ result.user.email+'\nyou have successfully logged IN!');
                    form.reset();
                    navigate('/')  
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log('with google', user);
            alert('Congratulation '+result.user.email+'\nyou have successfully Logged In with\nGoogle!');
            navigate('/')
        })
        .catch(error =>{
            console.error(error);
        })
    }
    // const handleEmailBlur = event =>{
    //     const email = event.target.value;
    //     setUserEmail(email);
    //     console.log(userEmail);
    // }
    const auth = getAuth();
    // const handleForgetPassword = () => {
    //     if(!userEmail){
    //         alert('Enter your valid email address');
    //         return;
    //     }
    //     sendPasswordResetEmail(auth,userEmail)
    //     .then(() => {
    //         alert('Check your email and reset your password');
    //     })
    //     .catch(error =>{
    //         console.error(error);
    //     })
    // }

    return (
        <div>
            <div className="hero min-h-screen mx-auto z-10 mb-10" style={{ backgroundImage: `url("https://i.ibb.co/nwqstRf/blurred-bokeh-style-lights-evening.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col ">
                    <div className="text-center text-white lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 text-center">Log in first and explore courses</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm rounded-lg border-2 border-violet-600 shadow-2xl bg-transparent" >
                        <form onSubmit={handleSubmit} className="card-body">
                            <div  className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline border-white hover:bg-violet-600">Login</button>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn hover:bg-violet-600 btn-outline w-full border-white" onClick={handleGoogleLogin}>Login with<FcGoogle className='ml-2 text-xl'/>oogle</button>
                            </div>
                            <div>
                            <h1 className='text-center mt-5'>Don't have any account? <NavLink to={'/register'}><span className='text-md font-bold text-white'>SIGN UP</span></NavLink></h1>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
