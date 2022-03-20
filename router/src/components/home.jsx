import React from 'react';
import { useNavigate } from 'react-router';

const Home = (props) => {
    const navigate = useNavigate();
    return (
    <>
        <h1>home</h1>
        <button onClick={() => {
            navigate("/profile")
        }}>Go to Profile</button>
    
    </>)
}

export default Home;