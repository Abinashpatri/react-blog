import './settings.css'
import Sidebar from '../../sidebar/Sidebar'

import React from 'react'

function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://unsplash.it/1920/1080"  />
                    <label htmlFor="fileInput">
                    <i class="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='abinash' />
                <label>Email</label>
                <input type="email" placeholder='abinashpatri33@gmail.com' />
                <label>Password</label>
                <input type="password"  />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
        
    </div>
  )
}

export default Settings