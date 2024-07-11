//import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="hero">
            <div className="content">
                <h1 className="text-warning">Welcome to Diary</h1>
                <p>Your personal diary app Where you can share your Thoughts and Feelings</p>
                <p>Save your valuable memories</p>
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                    <Link to='/login'>
                        <button className="btn btn-light">Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className="btn btn-light mx-2">Signup</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home;