import React from 'react'
import UseLogin from './UseLogin'
import "./Login.css"

export default function Login() {
    const { onSubmitHandler,
        setEmail,
        setPassword,
        email,
        password,
        loader, } = UseLogin();

    return (
        <div className='flex-container mt-5'>


            <div className="box">
                <h3>LOGIN</h3>
                <input type="email" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />


                {/* js  logic */}
                {
                    loader ?
                        (
                            <button>loading.....</button>
                        )
                        : (
                            <button onClick={onSubmitHandler} style={{ textAlign: 'center',borderRadius:"12px" , padding:"5px" }}>LOGIN</button>
                        )
                }
            </div>



        </div>
    )
}
