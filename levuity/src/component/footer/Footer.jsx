import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-[#141D4B] relative rounded-t-3xl">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="pl-24 pt-20">
              <p
                href="#"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter font-bold text-white rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Levuity
              </p>
              <p className="max-w-sm mt-6 font-poppins font-medium text-white">
                Transform the way you learn with cutting-edge AI, personalized strategies, and a thriving community that pushes the boundaries of academic success.
              </p>

              <div className="flex mt-20 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600 rounded-full border p-1 duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600 rounded-full border p-1 duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  <TbBrandLinkedin />
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600 rounded-full border p-1 duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mt-6 lg:mt-0 lg:w-2/5 lg:flex lg:justify-end">
            <div className="pt-20">
              <h2 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-poppins font-bold text-white">
                Contact Us
              </h2>
              <div className="mt-2 font-poppins text-[#F9FAFF]">
                <p className="font-poppins font-bold text-sm ">Email:</p>
                <ul className="font-poppins font-normal text-sm">
                  <li>levuity@gmail.com</li>
                  <li>khushjangid@levuity.com</li>
                  <li>rounakbanerjee0204@gmail.com</li>
                </ul>
                <p className="mt-5 font-poppins font-bold text-sm ">Head Office:</p>
                <p className="font-poppins font-normal text-sm">30, Surya Vihar, Dadi ka phatak</p>
                <p className="font-poppins font-normal text-sm">Jhotwara, Jaipur, Rajasthan, 302012</p>
                <p className="mt-5 font-poppins font-bold text-sm ">Phone number:</p>
                <ul className="font-poppins font-normal text-sm">
                  <li>Khush Jangid: 9461183262</li>
                  <li>Rounak Banerjee: 8072828372</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 ml-20  mr-20 border-t border-[#E5E5E5] pt-6 text-center">
          <p className="font-poppins font-normal text-sm text-white">
            © Copyright Levuity. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;