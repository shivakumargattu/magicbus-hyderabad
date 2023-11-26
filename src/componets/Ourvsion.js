
const product = {
  name: 'Our Vision',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://i.ibb.co/t88dhsk/IMG-20231123-195645.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://i.ibb.co/2Zy8Q8f/Whats-App-Image-2023-11-23-at-7-03-39-PM.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://i.ibb.co/d0yPXMf/IMG-20231122-WA0044.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://i.ibb.co/z8hvhg7/IMG-20231123-WA0130.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'FA world where young people* break out of poverty to lead fulfilling, rewarding lives and contribute positively to their communities.',
  highlights: [
    'Passion : We will work with entrepreneurial zeal to achieve organisational objectives.',
    'Integrity : We will be truthful to ourselves and Magic Bus.',
    'Respect : We will respect our internal and external stakeholders, diversity of people, ideas & culture.    ',
    'Innovation : We will promote viable and implementable innovation at our workplace. ',
    "Collaboration : We will always be a united team at Magic Bus by upholding our core purpose, cooperating with each other and honouring one another’s commitments."
  ],
  details:
    'To equip vulnerable young people* with the life skills** that enable them to thrive in the transition to adulthood.',
}




export default function Ourvision() {

  return (
    <div className="bg-yellow-50">
      <div className="pt-6">
        <p className='mx-4 font-bold text-indigo-600 text-2xl'>Balanagar/JNTU</p>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 underline sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 underline sm:text-3xl">Our Values</h3>

              <div className="mt-4">
                <ul  className="list-disc font-bold space-y-2 pl-4 text-md">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 underline sm:text-3xl">Our Mission</h1>

              <div className="mt-4 space-y-6">
                <p className="text-md text-gray-600">{product.details}</p>
                <br/>
                <br/>
                <h1 className='font-bold text-cyan-800 text-2xl text-center mb-10'>" You can support
children and young people’s journey
from Childhood to Livelihood "</h1>
              </div>
            </div>
          </div>
          <div>
          <img  alt="texts" src='https://i.ibb.co/Wz5WPMD/IMG-20231123-184754.jpg'/><br/>
          <img  alt="sdsfdd" src='https://i.ibb.co/x6Yz7qS/IMG-20231108-WA0083.jpg'/><br/>
          <img alt="diwali" src="https://i.ibb.co/DLnSCpG/IMG-20231111-WA0123.jpg"/>
          </div>
        </div>
        
      </div>
      
      
    </div>
  )
}
