import React from "react";
import ScrollIcon from "@svg/scroll_Icon.svg?react"; 
import {Footer, FooterWidgets} from '@home';

const Contact = () => {
  // Scroll handler function to scroll down by 5rem
  const handleScroll = () => {
    window.scrollBy({
      top: 514, // Adjust this value (5rem = 80px, considering 16px base font size)
      behavior: "smooth",
    });
  };

  return (
    
    <div className="w-full h-full ">
  
    
    {/* Scroll Down Section */}
    <div className="scroll-down-wrap no-border flex flex-col items-center justify-end w-full h-full flex-shrink-0">
      <div>
        {/* Main Section Down Arrow */}
        <div className="relative overflow-visible text-center opacity-100 h-auto animate-nudgeMouse flex items-center justify-center">
          <ScrollIcon
            className="nectar-scroll-icon w-[35px] h-[50px] cursor-pointer border-white/50 stroke-white/50"
            aria-label="Scroll down to view more content"
            onClick={handleScroll}
          />

          {/* Arrow Pointer */}
          <div className="absolute animate-arrowFadeSlide top-[10px] left-1/2 w-[2px] h-[5px] -ml-[1px] bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>

   {/* Title Section */}
   <div className="relative text-center pt-[2.7rem]">
        <h2 className="leading-[3.875rem]  mb-[0.5rem] text-[54px] font-semibold text-gray">
          <span>Contact Us</span>
        </h2>
      </div>


      <div className="relative mt-4.2 mx-auto my-70 w-[100%] flex flex-col gap-7  lg:flex-row flex-wrap items-baseline justify-between px-[7%]">
        {/* Flex-1 Section on the Left */}
        <div className="basis-full lg:basis-1/2 px-[0.7451rem]  ">
          <form className="space-y-4  ">
            <div className="flex flex-col lg:flex-row gap-3 items-center justify-center mx-auto ">
              <div className=" w-full lg:w-1/2">
                <label className="block  text-sm font-medium text-cello">
                  First name*
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full lg:w-[15.35rem]   h-[2.375rem] p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
                />
              </div>
              <div className=" w-full lg:w-1/2">
                <label className="block text-sm font-medium  text-cello">
                  Last name*
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full lg:w-[15.35rem]   h-[2.375rem] p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-cello">
                Email*
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-cello">
                Phone number*
              </label>
              <input
                type="tel"
                className="mt-1 block w-full p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-cello">
                Date needed
              </label>
              <input
                type="date"
                className="mt-1 block w-full p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
              />
            </div>

            <div className="">
              <div className="mb-2">
                <p className="text-sm font-medium text-cello">
                  Want us to Deliver and / or Pickup at your event? (Additional
                  Cost)
                </p>
                <br />
                <p className="text-sm font-medium text-cello">
                  Select all that apply
                </p>
              </div>

              <ul className="space-y-1 text-cello">
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    id="delivery"
                    className="h-[0.9rem] w-[0.9rem] cursor-pointer text-white bg-light-blue rounded-[0.1875rem] checked:bg-blue-600
         checked:text-white hover:bg-cello border-none mt-[0.1875rem] mr-[0.3125rem] mb-[0.1875rem] ml-0"
                  />
                  <label
                    htmlFor="delivery"
                    className="text-[0.875rem] cursor-pointer"
                  >
                    Delivery
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    type="checkbox"
                    id="pickup"
                    className="h-[0.9rem] w-[0.9rem] cursor-pointer text-white bg-light-blue rounded-[0.1875rem] checked:bg-blue-600
         checked:text-white hover:bg-cello border-none mt-[0.1875rem] mr-[0.3125rem] mb-[0.1875rem] ml-0"
                  />
                  <label
                    htmlFor="pickup"
                    className="text-[0.875rem] cursor-pointer"
                  >
                    Pickup
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    type="checkbox"
                    id="none"
                    className="h-[0.9rem] w-[0.9rem] cursor-pointer text-white bg-light-blue rounded-[0.1875rem] checked:bg-blue-600
         checked:text-white hover:bg-cello border-none mt-[0.1875rem] mr-[0.3125rem] mb-[0.1875rem] ml-0"
                  />
                  <label
                    htmlFor="none"
                    className="text-[0.875rem] cursor-pointer"
                  >
                    None - I will Pickup the Equipment at Your Store
                  </label>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-cello"
                htmlFor="delivery_address"
              >
                Delivery Address (If you want us to add delivery)
              </label>
              <input
                className="  w-full mt-1 p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue "
                id="delivery_address"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-cello"
                htmlFor="equipment_package"
              >
                What Equipment or Package are you Inquiring about?
              </label>
              <input
                className="  w-full mt-1 p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue "
                id="equipment_package"
                type="text"
                placeholder=""
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-cello" htmlFor="message">
                Message
              </label>
              <legend className="mb-[0.375rem] text-[0.6875rem] text-slate-gray font-semibold ">
                Things you might include: What package you're interested in,
                Date and time of your event, How many people you're expecting,
                Delivery address (if applicable), etc...
              </legend>
              <textarea
                className=" w-full mt-1 mb-[1.125rem] py-[0.625rem] px-[0.9375rem]  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
                id="message"
                rows="4"
                placeholder=""
              ></textarea>
            </div>

            <div className="py-[1.0625rem] my-[1.125rem]">
              <button
                className="relative inline-block leading-[0.75rem] text-center bg-blue-100 hover:bg-[rgba(18,104,251,0.9)] text-white font-bold py-3 px-6  
        border border-solid text-[0.875rem] rounded-[0.1875rem] transition-all duration-150 ease-linear border-blue-100"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Flex-2 Section on the Right */}
        <div className=" basis-[50%] px-[0.7451rem] items-baseline  text-gray">
          <h2 className="text-[2.125rem] pb-[0.35rem] leading-[2.75rem] font-semibold mb-[0.4375rem] ">
            AY Audio Rent
          </h2>

          <div className="leading-7 pb-[1.6875rem] font-normal">
            <p className=" text-[0.875rem] ">Email: AYaudiorental@gmail.com.</p>
            <p className="text-[0.875rem] ">Phone: 09-7433-1530</p>
          </div>

          <h3 className=" text-[0.875rem] pb-[0.35rem] leading-relaxed font-semibold">
            Retail Store
          </h3>
          <p className="text-[0.875rem] leading-relaxed font-normal pb-[1.6875rem] ">
            5908 W 59th Terrace,
            <br />
            Mission, Kansas 66202
          </p>

          <p className="text-[0.875rem] leading-relaxed font-normal pb-[1.6875rem] ">
            Please arrange to check out equipment by appointment to ensure we
            can serve you best.
          </p>

          <h3 className="text-[0.875rem] pb-[0.35rem] leading-relaxed font-semibold">
            Retail Hours:
          </h3>

          <div className="text-[0.875rem] leading-relaxed font-normal ">
            <p>9:30-5:00 Monday-Friday</p>
            <p>Closed Saturday</p>
            <p>Closed Sunday</p>
          </div>
        </div>
      </div>

    
    
    
    <FooterWidgets/>
    
    <Footer/>
  </div>
  );
};

export default Contact;
