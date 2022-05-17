import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (gUser || user) {
        console.log(gUser, user);
        navigate(from, { replace: true });
    }

    let singInError;
    if (error || gError) {
        singInError = <p className='text-red-500 text-center pb-2'>{error?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <>
            <div className='flex justify-center '>
                {
                    (loading || gLoading) && <Loading></Loading>
                }
            </div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title block text-center">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Enter your valid email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                </label>
                            </div>


                            <p className='pb-3 pl-2 cursor-pointer'><small>Forgot Password ?</small></p>

                            {singInError}

                            <input className='btn w-full max-w-xs' type="submit" value="LOGIN" />
                            <p className='pt-3 text-center'><small>New to Doctors Portal? <Link className='text-secondary' to="/register">Create new account</Link></small></p>
                        </form>
                        <div className="divider">or</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-[#3d4451] "
                        >CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;