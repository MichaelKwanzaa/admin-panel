import "./navbar.css"
import {NotificationsNone, Language, Settings} from "@material-ui/icons";
export default function Navbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">.MichaelAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarName">
                        <span className="topbarIntials">MA</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
