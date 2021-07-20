import Avatar from "../../images/avatar.png";
import {LocationSearching, MailOutline, PermIdentity, Publish, PhoneAndroid, CalendarToday} from "@material-ui/icons"
import {Link} from "react-router-dom"
import "./user.css"
export default function User() {
    return (
        <div className="user">
            <div className="userWrapper">
                <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newuser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                    <img src={Avatar} alt="" className="userShowImage" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Michael Agbonyeme</span>
                        <span className="userShowUserCountry">Lagos, Nigeria</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">Michael Agbonyeme</span>   
                        </div> 
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">9.8.2000</span>   
                        </div> 
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">meagbonyeme@gmail.com</span>   
                        </div> 
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+255 802 574 8960</span>   
                        </div> 
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Lagos| Nigeria</span>   
                        </div> 
                       </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" 
                                className="userUpdateInput"
                                placeholder="Michael Agbonyeme"
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Birthday</label>
                                <input type="text" 
                                className="userUpdateInput"
                                placeholder="9.8.2000"
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" 
                                className="userUpdateInput"
                                placeholder="meagbonyeme@gmail.com"
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" 
                                className="userUpdateInput"
                                placeholder="+255 802 574 8960"
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Location</label>
                                <input type="text" 
                                className="userUpdateInput"
                                placeholder="Lagos| Nigeria"
                                 />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImage" 
                                src={Avatar}
                                alt=""
                                />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            </div>
            
    )
}
