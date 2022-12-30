import React from 'react'
import './Auth.css';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <>
            <div className="d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5 bg-white">
                            <div className="brand-logo">
                                {/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> */}
                            </div>
                            <h4>Hello! let's get started</h4>
                            <h6 className="font-weight-light">Sign in to continue.</h6>
                            <form className="pt-3">
                                <div className="form-group pt-3">
                                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                                </div>
                                <div className="form-group pt-3">
                                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="mt-3">
                                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium form-control" to="/">SIGN IN</Link>
                                </div>
                                <div className="text-center mt-4 font-weight-light">
                                    Don't have an account?
                                    <Link style={{ textDecoration: 'none' }} to="/" className="text-primary"> SIGN UP</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin