import './user.css'

import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import { userRows } from '../../dummyData'
import { useState, useEffect } from 'react'

export default function User() {
    const [data, setData] = useState(null)

    const location = useLocation()

    const id = location.pathname.split('/')[2]

    useEffect(() => {
        setData(userRows.filter(i => console.log(i.id === id)))
    }, [])

    
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Aulia Rahmat</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">rahmat99</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">25.05.1999</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">082277289593</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">auliarahmat25599@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">Jl Kemang Utara No.42 Rt.01, Rw.05, Duren Tiga, Pancoran, Jakarta Selatan</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder='rahmat2599'
                                    className='userUpdateInput'
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder='Aulia Rahmat'
                                    className='userUpdateInput'
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder='rahmat99@gmail.com'
                                    className='userUpdateInput'
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder='082277289593'
                                    className='userUpdateInput'
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder='Enter your address'
                                    className='userUpdateInput'
                                />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src="https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file">
                                    <Publish className='userUpdateIcon' />
                                </label>
                                <input type="file" id='file' style={{ display: 'none' }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
