import React from "react";
import { NavLink } from "react-router-dom";

const AdminServiceNavigation = () => {

    return (
        <div className="pt-1 mb-3">
            <div className="flex justify-between">

                <div className="flex flex-wrap items-center">
                    <NavLink to={'/admin/123456/info'}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                                borderBottom: isActive ? "2px solid red" : "none"
                            };
                        }}>
                        <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0  text-sm sm:text-base">Basic Info</div>
                    </NavLink>
                    <NavLink to={'/admin/123456/clients'}
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
                        <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Transaction</div>
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
                
                <div className="flex flex-wrap">
                    <NavLink to={'/admin/123456/client-data'}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                                borderBottom: isActive ? "2px solid red" : "none"
                            };
                        }}>
                        <div className="px-6 py-1 text-white sm:pb-2 sm:py-1 rounded-full   text-sm sm:text-base bg-gray-600" style={{paddingTop: "12px !important"}}>Back</div>
                    </NavLink>
                </div>
                
            </div>
            <div style={{ borderBottom: '0.1px solid #E0E0E0' }}></div>
        </div>
    );
};

export default AdminServiceNavigation;