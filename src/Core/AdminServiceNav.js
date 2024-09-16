import React from "react";
import { NavLink } from "react-router-dom";

const AdminServiceNavigation = () => {

    return (
        <div className="pt-1 mb-3">
            <div className="flex flex-wrap">
                <NavLink to={'/admin/123456/info'}
                    style={({ isActive}) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0  text-sm sm:text-base">Basic Info</div>
                </NavLink>
                <NavLink to={'/admin/123456/invites'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Client List</div>
                </NavLink>
                <NavLink to={'/admin/123456/process-update'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Credit</div>
                </NavLink>
                <NavLink to={'/admin/123456/client-data'}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "inherit",
                            borderBottom: isActive ? "2px solid red" : "none"
                        };
                    }}>
                    <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">More</div>
                </NavLink>
            </div>
            <div style={{ borderBottom: '0.1px solid #E0E0E0' }}></div>
        </div>
    );
};

export default AdminServiceNavigation;