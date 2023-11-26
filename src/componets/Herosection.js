import { Carousel, Typography } from "@material-tailwind/react";
import Typewriter from 'typewriter-effect';

 
export function Herosection() {
  return (
    <Carousel className="bg-black">
      <div className="relative h-120vh w-full">
        <img
          src="https://akm-img-a-in.tosshub.com/sites/rd/resources/201911/matthewspacie_04_1574842274_1200x675.jpeg?size=684:384?size=1200:675"
          alt="magicbus1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              

              <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('It all began with a game of rugby!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>

            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-lg  opacity-80"
            >

            " Helping those in need is a compassionate way to create brighter future for every one "  
              </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://www.magicbus.org/uploads/team_images/main_1559740006.jpg"
          alt="magicbus2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Founder of Magic Bus
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12  text-md opacity-80"
            >
              Matthew Spacie (born 19 January 1967) is India-based British entrepreneur,
               humanitarian, and a former international rugby player.Matthew is the co-founder of Cleartrip, 
               a global online travel company. He is also the former chief operating officer 
               (COO) of the travel group, Cox & Kings Ltd. He is the founder of Magic Bus 
               (also known as the Magic Bus India Foundation), a non-governmental organisation
                working with children and youth taking them from childhood to livelihood.

He has been accorded numerous accolades including Member of the Order of the British Empireand Business Standard Social Entrepreneur of the Year 2018
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="magicbus3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Magic Bus Locations
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12  opacity-80"
            >
              Magic Bus foundation located in various locations such as Hyderabad, Chennai, Bangalore, Punjab etc.... and it is widely spreaded across India.
              <p> In Hyderabad, Magic Bus provides technical support in <u>Azure</u> at <b>Balnagar</b> and in <u>AWS</u> at<b> JNTU</b> location.</p>
            </Typography>
            
          </div>
        </div>
      </div>
    </Carousel>
  );
}