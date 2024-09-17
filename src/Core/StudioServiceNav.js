import React from "react";
import { NavLink } from "react-router-dom";

const StudioServiceNavigation = () => {

    return (
        <div className="pt-1 mb-3">
            <div className="flex flex-wrap">
                <NavLink to={'/123456/client-info'}
                    style={({ isActive}) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0  text-sm sm:text-base">Basic Info</div>
                </NavLink>
                <NavLink to={'/123456/service'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Service</div>
                </NavLink>
                <NavLink to={'/123456/cloud'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Cloud</div>
                </NavLink>
                <NavLink to={'/123456/invites'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Invitation Card</div>
                </NavLink>
                <NavLink to={'/123456/process-update'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Process Update</div>
                </NavLink>
                <NavLink to={'/123456/client-data'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Client Data</div>
                </NavLink>
            </div>
            <div style={{ borderBottom: '0.1px solid #E0E0E0' }}></div>
        </div>
    );
};

export default StudioServiceNavigation;