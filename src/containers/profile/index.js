import React from 'react';

import Layout from '../../components/Layout';
import profile from '../../assets/images/test.jpg';
import { user } from '../../data/index';

const Profile = () => {
  return (
    <Layout>
      <h5 className='py-2'>Profile</h5>
      <div className='d-flex justify-content-center'>
        <div className='col-1'>
          <img src={profile} alt="profile" className="img-fluid img-thumbnail"/>
        </div>
        <div className='col-3 mt-0 m-3'>
          <div className='row'>
            <div className='col-3'>First Name</div>
            <div className='col-9'>{user.firstName}</div>
            <div className='col-3'>Last Name</div>
            <div className='col-9'>{user.lastName}</div>
            <div className='col-3'>Phone</div>
            <div className='col-9'>{user.phone}</div>
            <div className='col-3'>Email</div>
            <div className='col-9'>{user.email}</div>
            <div className='col-3'>Bio</div>
            <div className='col-9'>{user.bio}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Profile.propTypes = {}

export default Profile
