import Image from 'next/image'
import Jumbotron from '../Global/Jumbotron'
import ButtonLight from '../Global/ButtonLight'
import Service_card from './Service_card'
import Testimonial_card from './Testimonial_card'
import SwiperTestomonial from './SwiperTestomonial'
import Footer from '../Global/Footer'

export default function HomeSection() {
  return (
    <>
      <div className='w-full h-full t-black'>
        <Jumbotron innerClass="py-16 md:w-1/2 mx-auto text-center">
          <Image
            src={"/SVG/HomepageSVG/SoftDimensionLogo.svg"}
            width={500}
            height={500}
            className="mb-10 mx-auto "
          />
          <h1 className="2xl:text-[80px] md:text-6xl text-3xl md:font-normal font-bold my-10 mt-16 uppercase text-white txt-shadow">Soft Dimension</h1>
          <div className='w-full flex justify-center mb-10'>
            <p className="max-w-[700px] text-center text-white text-lg">Let’s join with us to develop or upgrade project. We can provide web or software reated any types of solutions.</p>
          </div>
          <button
            className="rounded-full mb-4 px-14 text-blue py-2 shadow-md bg-white font-semibold"
          >
            Our Services
          </button>
        </Jumbotron>

        <Jumbotron innerClass="py-10 md:w-1/2 mx-auto text-center">
          <h2 className="font-bold 2xl:text-[40px] text-2xl mb-4 text-white txt-shadow">
            The services which you can take from us
          </h2>
          {/* <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit</p> */}
        </Jumbotron>

        <Jumbotron innerClass="
      grid grid-cols-0 lg:grid-cols-3 gap-10 md:gap-20
      mb-10 md:w-2/3 mx-auto
    ">
          <Service_card
            image={"/SVG/HomepageSVG/UIUX.svg"}
            name="UI/UX"
            className="col-span-1"
            href="/"
          />
          <Service_card
            image={"/SVG/HomepageSVG/E-com.svg"}
            name="Ecommerce Solution"
            className="col-span-1"
            href="/"
          />
          <Service_card
            image={"/SVG/HomepageSVG/Personal_Web.svg"}
            name="Personal Web"
            className="col-span-1"
            href="/"
          />
          <Service_card
            image={"/SVG/HomepageSVG/Bug_Finding.svg"}
            name="Bug Finding"
            className="col-span-1"
            href="/"
          />
          <Service_card
            image={"/SVG/HomepageSVG/Blog.svg"}
            name="Blog Site"
            className="col-span-1"
            href="/"
          />
          <Service_card
            image={"/SVG/HomepageSVG/RealtimeSolution.svg"}
            name="Realtime Solution"
            className="col-span-1"
            href="/"
          />
        </Jumbotron>

        <Jumbotron innerClass="py-10 md:w-1/2 mx-auto text-center mt-20">
          <h2 className="font-bold text-[40px] mb-4 text-white txt-shadow">
            Client Feedback
          </h2>
          <p className="my-7 text-white text-[19px] font-light">We already completed a huge number of clients works and all off them are satisfy by our work. Even some of the clients are continuously completing their works by us. </p>
          <h2 className='text-[29px] text-white mt-10'>
            Some of their comments:
          </h2>
        </Jumbotron>

        <Jumbotron innerClass="mb-10 2xl:w-1/2 md:w-3/4 mx-auto">

          <SwiperTestomonial />

        </Jumbotron>

        <Footer />

      </div>
    </>
  )
}