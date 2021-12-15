import React from 'react'
import './topbar.css'

import { NotificationsNone, Language, Settings } from '@material-ui/icons'

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">admin</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img
                        src="https://ladyapril.files.wordpress.com/2019/12/84a78ceaac5863cdeb49a2c99e1082c5_11027764790.jpg?w=584"
                        alt=""
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default Topbar
