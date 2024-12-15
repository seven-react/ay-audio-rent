import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  About,
  FooterWidgets,
  Footer,
  Service,
  Hero,
  Navbar,
  Banner,
  Testimonials,
  BookNow,
} from "@home";
import { Contact, WeedingEvents } from "@/pages";



// Create a browser router with routes defined
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>

        <Navbar  />
        
     
        
        
        <div className=" bg-heroImg bg-no-repeat bg-cover w-full   h-hero-sm md:h-hero-md lg:h-hero-lg">
          <Hero />
        </div>

        <Service />
        <Banner />
        <About />
        <Testimonials />
        <BookNow />
        <Outlet />
        <FooterWidgets />
        <Footer />
      </>
    ),
  },

  {
    path: "/WeedingEvents",

    element: (

      <>
       <Navbar/>
        <div className=" bg-weeding bg-[bottom_] bg-no-repeat bg-cover w-full h-weeding-sm md:h-weeding-md lg:h-weeding-lg">
          <WeedingEvents />
        </div>
      
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
       <Navbar />
        <div className=" bg-heroImg bg-no-repeat bg-cover w-full h-[22rem]">
          <Contact />
        </div>
       
      </>
    ),
  },
]);

// App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
