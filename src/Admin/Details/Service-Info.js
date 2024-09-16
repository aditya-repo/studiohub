import React from 'react'

const ServiceInfo = ()=>{
    return(
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md mb-5">
          <div className="">
            <div className="flex items-center justify-between">
              <h3 className="text-xl pb-2">Services</h3>
              <button className="bg-purple-600 px-3 py-2 text-sm text-white rounded-md hover:bg-purple-800">Add New</button>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100">
            <div className="px-4 sm:px-6">
              <div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Cloud :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  Silver Package
                </dd>
              </div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Service Includes : 
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  Compression, Face Recoginition, Image Enhancement
                </dd>
              </div>
                <div className="flex px-4 py-3 border-b border-gray-200">
                  <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                    Invites :
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700">
                    Video Invitation, Save the Date, Wedding Banner
                  </dd>
                </div>
                <div className="flex px-4 py-3 border-b border-gray-200">
                  <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                    Video Invitation :
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700">
                    1001 - Morning Love
                  </dd>
                </div>
                <div className="flex px-4 py-3 border-b border-gray-200">
                  <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                    Save the Date :
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700">
                    1001 - Happy Birthday
                  </dd>
                </div>
                <div className="flex px-4 py-3 border-b border-gray-200">
                  <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                    Wedding Banner :
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700">
                    502 - Congratulation Buddy
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ServiceInfo