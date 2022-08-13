import React from 'react'
import "./Login.css"
import { useForm } from 'react-hook-form';
import { useSnackbar } from "notistack";




export function Login({ setLogin }) {

    const { enqueueSnackbar } = useSnackbar();


    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        const { login, password, chek } = data;

        if (login === "asd" && password === "asd") {

            if (chek === true) {
                localStorage.setItem("auth", JSON.stringify(data));
            }
            setLogin(true);


        } else {
            enqueueSnackbar("Login or Password is incorrect ", {
                variant: "error",
            });
        }
        reset()
    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <h1>Login Here</h1>
                <input type="text"
                    {...register("login")}
                    placeholder='Enter your email address'
                    required
                />
                <input type="password"
                    {...register("password")}
                    placeholder='Enter your password'
                    required
                />
                <div className='remember'>
                    <label>
                        <input type="checkbox" {...register("chek")} />
                        Remember me
                    </label>
                    <a href="https://support.google.com/mail/#topic=7065107" >forget the password?</a>
                </div>
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}
