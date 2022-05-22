import React from 'react'
import UseSignUp from './UseSignUp';
import "./SignUp.css"

export default function SignUp() {
    const { onSubmitHandler,
        setEmail,
        setPassword,
        setCnic,
        setName,
        email,
        password,
        loader, } = UseSignUp();

    return (
        <div>
            <div className='flex-container mt-5'>


                <div className="box">
                    <h3>SIGNUP</h3>
                    <input type="name" placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
                    <br />
                    <br />
                    <input type="type" placeholder='Enter your Cnic' onChange={(e) => setCnic(e.target.value)} />
                    <br />
                    <br />
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
                                <button onClick={onSubmitHandler} style={{ textAlign: 'center', borderRadius: "12px", padding: "5px" }}>SIGNUP</button>
                            )
                    }
                </div>



            </div>


        </div>
    )
}
