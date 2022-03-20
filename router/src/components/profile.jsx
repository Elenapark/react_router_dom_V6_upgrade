import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Profile = (props) => {
    const navigate = useNavigate();
    return( 
    <>
        <h1>Profile</h1>
        <button onClick={() => {
            navigate("/")
        }}>Go to Home</button>

{/* v6에서 추가된 Outlet 컴포넌트를 사용해보기 위함. app.js 에서 childeren으로 사용하기 위한 주석처리*/}
    {/* <Routes>
      <Route path ="" element={<Home />}/>
    </Routes> */}

    <Outlet />
    </>)
}

export default Profile;