import Avatar from "../../images/avatar.png"
import {Visibility} from "@material-ui/icons"
import "./widgetsmall.css"

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Users</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src={Avatar} alt="" className="widgetSmallListItemImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Michael Agbonyeme</span>
                        <span className="widgetSmallCountry">Nigeria</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={Avatar} alt="" className="widgetSmallListItemImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Michael Agbonyeme</span>
                        <span className="widgetSmallCountry">Nigeria</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={Avatar} alt="" className="widgetSmallListItemImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Michael Agbonyeme</span>
                        <span className="widgetSmallCountry">Nigeria</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={Avatar} alt="" className="widgetSmallListItemImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Michael Agbonyeme</span>
                        <span className="widgetSmallCountry">Nigeria</span>
                   </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={Avatar} alt="" className="widgetSmallListItemImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Michael Agbonyeme</span>
                        <span className="widgetSmallCountry">Nigeria</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={Avatar} alt="" className="widgetSmallListItemImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Michael Agbonyeme</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
