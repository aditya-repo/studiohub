import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const AdminClientServiceNavigation = () => {

    const {studio, clientid} = useParams()

    const stepback = useNavigate()

    

    return (
        <div className="pt-1 mb-3">
            <div className="flex justify-between" >
                <div className="flex flex-wrap">
                    <NavLink to={`/admin/${studio}/client/${clientid}/client-info`}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                                borderBottom: isActive ? "2px solid red" : "none"
                            };
                        }}>
                        <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0  text-sm sm:text-base">Basic Info</div>
                    </NavLink>
                    <NavLink to={`/admin/${studio}/client/${clientid}/service`}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                                borderBottom: isActive ? "2px solid red" : "none"
                            };
                        }}>
                        <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Service</div>
                    </NavLink>
                    <NavLink to={`/admin/${studio}/client/${clientid}/cloud`}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                                borderBottom: isActive ? "2px solid red" : "none"
                            };
                        }}>
                        <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0  text-sm sm:text-base">Cloud</div>
                    </NavLink>
                    <NavLink to={`/admin/${studio}/client/${clientid}/invites`}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                                borderBottom: isActive ? "2px solid red" : "none"
                            };
                        }}>
                        <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Invitation Card</div>
                    </NavLink>
                    <NavLink to={`/admin/${studio}/client/${clientid}/process-update`}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                                borderBottom: isActive ? "2px solid red" : "none"
                            };
                        }}>
                        <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Process Update</div>
                    </NavLink>
                    <NavLink to={`/admin/${studio}/client/${clientid}/client-data`}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                                borderBottom: isActive ? "2px solid red" : "none"
                            };
                        }}>
                        <div className="px-6 pb-3 sm:pb-2 pt-3 sm:pt-0   text-sm sm:text-base">Client Data</div>
                    </NavLink>
                </div>

                <div className="flex flex-wrap gap-3 mb-1">
                <NavLink to={`/admin/${studio}/clients`}>
                    <div className="px-6 py-1 text-white sm:pb-2 sm:py-1 rounded-full   text-sm sm:text-base bg-gray-600" style={{ paddingTop: "12px !important" }}>Client List</div>
                </NavLink>
                    <div onClick={()=>stepback(-1)} className="px-6 py-1 text-white sm:pb-2 sm:py-1 rounded-full   text-sm sm:text-base bg-gray-600" style={{ paddingTop: "12px !important" }}>Step Back</div>
                </div>
            </div>
            <div style={{ borderBottom: '0.1px solid #E0E0E0' }}></div>
        </div>
    );
};

export default AdminClientServiceNavigation;