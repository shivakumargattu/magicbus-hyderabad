import { Typography } from "@material-tailwind/react";
 
export function Footersection() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-white bg-black text-center md:justify-between">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGhUbACO0n72sedAxO-eFG5wv5SRxTLLX3SsYa1_h&s" alt="logo-ct" className="w-13" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#Aboutus"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#AzureCompnts"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Azure
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#AwsConpent"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              AWS
            </Typography>
          </li>
          </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Magic Bus
      </Typography>
    </footer>
  );
}