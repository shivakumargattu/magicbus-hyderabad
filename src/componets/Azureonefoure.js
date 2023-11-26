
const Azureconcepts = [
  {
    id: 3,
    name: 'Prerequisites for Azure Administration',
    href: 'https://learn.microsoft.com/en-us/training/paths/azure-administrator-prerequisites/',
    vist: 'Read More',
    imageSrc: 'https://learn.microsoft.com/en-us/training/achievements/azure-administrator-prerequisites-social.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    description:" fundamental knowledge of computer systems, data base, Virtual Machines or VMs, development and networking"
  },
  {
    id: 4,
    name: 'Identities & Governance',
    href: 'https://learn.microsoft.com/en-us/training/paths/azure-administrator-manage-identities-governance/',
    vist: 'Read More',
    imageSrc: 'https://img2.helpnetsecurity.com/posts2022/ForgeRock_Identity_Governance.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description:"Identity Governance is about visibility, segregation of duties, role management, attestation, analytics and reporting"
  },
  {
    id: 5,
    name: 'Azure Storage',
    href: 'https://learn.microsoft.com/en-us/training/paths/az-104-manage-storage/',
    vist: 'Read More',
    imageSrc: 'https://learn.microsoft.com/en-us/training/achievements/az-104-manage-storage-social.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description:"Azure Storage offers highly available, massively scalable, durable, and secure storage for a variety of data objects in the cloud."
  },
  {
    id: 6,
    name: 'Azure Compute Services',
    href: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/',
    vist: 'Read More',
    imageSrc: 'https://learn.microsoft.com/en-us/training/achievements/azure-administrator-manage-compute-resources-social.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description:"Computing resources, for instance, processors, memory, storage, operating systems, networking are all provided by the Azure Compute"
  },
  {
    id: 7,
    name: 'Virtual Network',
    href: 'https://learn.microsoft.com/en-us/training/paths/azure-administrator-manage-virtual-networks/',
    vist: 'Read More',
    imageSrc: 'https://learn.microsoft.com/en-us/training/achievements/azure-administrator-manage-virtual-networks-social.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description:" Virtual Network is a service that provides the fundamental building block for your private network in Azure"
  },
  {
    id: 8,
    name: 'Monitor & Backup',
    href: 'https://learn.microsoft.com/en-us/training/paths/azure-administrator-monitor-backup-resources/',
    vist: 'Read More',
    imageSrc: 'https://learn.microsoft.com/en-us/training/achievements/az-104-monitor-backup-resources-social.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description:"Azure Backup provides built-in monitoring and alerting capabilities in a Recovery Services vault"
  },
  
  
  // More products...
]

export default function Azureonefoure() {
  return (
    <div className="bg-">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Azure-900</h2>
        
        <div className="grid grid-cols-1  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Azureconcepts.map((Azureconcept) => (
            <a key={Azureconcept.id} href={Azureconcept.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={Azureconcept.imageSrc}
                  alt={Azureconcept.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{Azureconcept.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-800">{Azureconcept.description}</p>
              <button className="mt-3 p-2 text-white rounded bg-blue-600">{Azureconcept.vist}</button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
 
