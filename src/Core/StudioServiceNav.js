import React from "react";
import { NavLink } from "react-router-dom";

const StudioServiceNavigation = () => {

    return (
        <div className="pt-1 mb-3">
            <div className="flex">
                <NavLink to={'/123456/client-info'}
                    style={({ isActive, isPending}) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-2">Basic Info</div>
                </NavLink>
                <NavLink to={'/123456/cloud'}
                    style={({ isActive , isPending}) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6">Cloud</div>
                </NavLink>
                <NavLink to={'/123456/invites'}
                    style={({ isActive , isPending}) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6">Invitation Card</div>
                </NavLink>
                <NavLink to={'/123456/process-update'}
                    style={({ isActive , isPending}) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6">Process Update</div>
                </NavLink>
                <NavLink to={'/123456/client-data'}
                    style={({ isActive , isPending}) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6">Client Data</div>
                </NavLink>
            </div>
            <div style={{ borderBottom: '0.1px solid #E0E0E0' }}></div>
        </div>
    );
};

export default StudioServiceNavigation;