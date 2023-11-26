
import "./index.css"
export default function AwsServer() {
    return (
      <div className="bg-white bgimge1 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Servers, Scaling & Container
            </p>
          
            
            <p className="mt-6 text-md leading-8 text-gray-800">
            There are two ways to scale an application: up or out. The former refers to adding capacity to a single resource, while the latter refers to adding more resources to increase capacity.

The simple solution: scaling up
Upgrading an existing host server with increased CPU, memory, disk I/O speed, and network I/O speed is known as scaling up. Scaling up a cloud-native application involves choosing more capable resources from the cloud vendor. For example, you can create a new node pool with larger VMs in your Kubernetes cluster. Then, migrate your containerized services to the new pool. </p>
            <p className="mt-6 text-md leading-8 text-gray-800"> AServerless apps scale up by choosing the premium Functions plan or premium instance sizes from a dedicated app service plan.

Scaling out cloud-native apps
Cloud-native applications often experience large fluctuations in demand and require scale on a moment's notice. They favor scaling out. Scaling out is done horizontally by adding additional machines (called nodes) or application instances to an existing cluster. In Kubernetes, you can scale manually by adjusting configuration settings for the app (for example, scaling a node pool), or through autoscaling.
</p>
          </div>
        </div>
      </div>
    )
  }
  