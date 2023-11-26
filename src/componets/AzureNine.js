
const Azureconcepts = [
  {
    id: 1,
    name: 'Cloud Concepts',
    href: 'https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
    vist: 'Read More',
    imageSrc: 'https://www.microteklearning.com/blog/wp-content/uploads/2023/11/how-to-become-microsoft-azure-fundamentals-certified-professional-1536x864.png',
    imageAlt: "Cloud computing is the practice of using a network of remote servers hosted on the internet to store, manage, and process data. It allows you to access your files and applications from anywhere, without the need for physical storage or computing resources on your local device. With cloud computing, you can scale your resources up or down as needed, pay for only what you use, and benefit from the flexibility and agility of the cloud. It's a game-changer for businesses and individuals alike!",
    description:"Cloud computing is the practice of using a network of remote servers hosted on the internet to store, manage, and process data. It allows you to access your files and applications from anywhere "
  },
  {
    id: 2,
    name: 'Azure Architecture & Services',
    href: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/',
    vist: 'Read More',
    imageSrc: 'https://theicttrends.com/wp-content/uploads/2023/01/4-Pillars-of-Cloud-Computing-1.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description:"Microsoft Azure is a cloud-based platform for testing, deploying, building and managing applications and services through Microsoft managed the data-center."
  },
  
  
  // More products...
]

export default function AzureNine() {
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
