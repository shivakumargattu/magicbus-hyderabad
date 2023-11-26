
export default function Aboutus() {
  return (
    <div id="Aboutus" className="overflow-hidden  bg-black py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
                           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">About Us</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Magic Bus is one of the top five NGOs in the education and skilling space in India. Founded in Mumbai in 1999, we have grown into an organisation with a pan-India presence. Magic Bus works with young people living in poverty, taking them from a childhood full of challenges to a life with meaningful livelihoods. We work with young people's ecosystems (parents, peers, community, and local institutions) to create a network of support for them.
              </p>
             <br/> <br/> <p className='text-gray-400 mt-8'> <b>Mobile</b> : +91 9642656480</p><br/>
              <p className='text-gray-400'><b>email</b> : info@magicbusindia.org</p>
              
            </div>
          </div>
          <div>
          <img
            src="https://www.magicbus.org/demo/images/about-magic-bus-01a.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          {/*imge */}
          </div>
        </div>
      </div>
      
    
    </div>
  )
}
