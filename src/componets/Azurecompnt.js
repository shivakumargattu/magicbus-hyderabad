import {  CloudArrowUpIcon,  LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const features = [
  {
    name: 'Azure-900',
    description:
      'The AZ-900 exam is designed for candidates looking to demonstrate foundational-level knowledge of cloud services and how those services are provided with Microsoft Azure.',
    icon: CloudArrowUpIcon,
    buttn:"Get Started",
    linksto:"/azurenine"
  },
  {
    name: 'Azure-104',
    description:
      'Az-104 Responsibilities for an Azure Administrator include implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in a cloud environment, plus provision, size, monitor, and adjust resources, when needed.',
    icon: LockClosedIcon,
    buttn:"Get Started",
    linksto:"/azfoure"
  },
  
]

export default function Azurecompnt() {
  return (
    <div id="AzureCompnts" className="bg-black py-24 sm:py-32">
    
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
         
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            AZURE
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Microsoft Azure, formerly known as Windows Azure, is Microsoft's public cloud computing platform. It provides a broad range of cloud services, including compute, analytics, storage and networking</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            <Link to={feature.linksto}>   <button className='bg-indigo-600 p-2 rounded text-white m-3' >{feature.buttn}</button></Link> 
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
