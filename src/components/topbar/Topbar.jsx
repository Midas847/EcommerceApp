import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Logo from "../../Logo.svg";
import { LogoutIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/apiCalls";

export default function Topbar() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    logout(dispatch);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Trevor Army</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarlogOutContainer">
            <LogoutIcon onClick={handleLogout} />
          </div>
          <img src={Logo} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
