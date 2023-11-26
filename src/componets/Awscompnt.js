import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const features = [
  {
    name: ' Security & Python',
    description:
      'Reporting security issues. The Python Software Foundation and the Python developer community take security vulnerabilities very seriously.',
    icon: CloudArrowUpIcon,
    buttn:"Get Started",
    linto:"/security"
    
  },
  {
    name: 'Network & Databases',
    description:
      'Network database is based on a traditional hierarchical database, except it allows each object to have multiple parents instead of a single parent. This allows you to model more complex relationships.',
    icon: LockClosedIcon,
    buttn:"Get Started",
    linto:"/network"
  },
 
  {
    name: 'Architecture & Tooling',
    description:
      'AWS architechture is a process of planning,designing, and implementing AWS resources.Tools, such as diagramming software, low-code applications, and frameworks, make it possible to experiment quickly.',
    icon: LockClosedIcon,
    buttn:"Get Started",
    linto:"/architecture"
  },
  {
    name: 'Servers, Scaling & Container', 
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
    buttn:"Get Started",
    linto:"/server"
  },
 
 
  
]

export default function Awscompnt() {
  return (
    <div id="AwsConpent" className="bg-gray-900  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
         
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            AWS(re/Start)
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
             <Link to={feature.linto}>   <button className='bg-indigo-600 p-2 rounded text-white m-3'>{feature.buttn}</button></Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
