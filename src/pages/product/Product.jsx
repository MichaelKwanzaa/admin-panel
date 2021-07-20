import { AttachMoneyOutlined, LoyaltyOutlined, MessageOutlined, Publish } from "@material-ui/icons"
import {Link} from "react-router-dom"
import Avatar from "../../images/avatar.png"

import "./product.css"

export default function Product() {
    return (
        <div className="product">
            <div className="productWrapper">
                <div className="userTitleContainer">
                <h1 className="userTitle">Edit Product</h1>
                <Link to="/newproduct">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                    <img src={Avatar} alt="" className="userShowImage" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Book</span>
                        <span className="userShowUserCountry">$19.99</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Book Details</span>
                        <div className="userShowInfo">
                            <LoyaltyOutlined className="userShowIcon"/>
                            <span className="userShowInfoTitle">Book</span>   
                        </div>
                        <div className="userShowInfo">
                            <AttachMoneyOutlined className="userShowIcon"/>
                            <span className="userShowInfoTitle">$19.99</span>   
                        </div>
                        <div className="userShowInfo">
                            <MessageOutlined className="userShowIcon"/>
                            <span className="userShowInfoTitle">Description</span>   
                        </div>
                    </div>
                </div>
                        <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Product Name</label>
                                <input type="text" 
                                className="userUpdateInput"
                                placeholder="Book"
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Price</label>
                                <input type="text" 
                                className="userUpdateInput"
                                placeholder="$19.99"
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Description</label>
                                <input type="text" 
                                className="userUpdateInput"
                                placeholder="This is a great book"
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
