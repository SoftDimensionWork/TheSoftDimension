import Jumbotron from "./components/Jumbotron"
import Image from 'next/image'
import ButtonLight from "./components/ButtonLight"
import Service_card from "./components/Homepage/Service-card"
import Testimonial_card from "./components/Homepage/Testimonial_card"

export default function Homepage() {
  return (
    <>

    <Jumbotron innerClass="py-10 md:w-1/2 mx-auto text-center">
      <Image
        src={"/logo.png"}
        width={150}
        height={150}
        className="mb-10 mx-auto"
      />
      <h1 className="font-bold text-5xl mb-4">Soft Dimension</h1>
      <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit</p>
      <ButtonLight
        className="rounded-full mb-4 px-5"
      >
        Read More
      </ButtonLight>
    </Jumbotron>

    <Jumbotron innerClass="py-10 md:w-1/2 mx-auto text-center">
      <h2 className="font-bold text-3xl mb-4">
        The services that we offer!
      </h2>
      <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit</p>
    </Jumbotron>

    <Jumbotron innerClass="
      grid grid-cols-0 lg:grid-cols-3 gap-10 md:gap-20
      mb-10 md:w-2/3 mx-auto
    ">
      <Service_card
        image={"/logo.png"}
        name="UI/UX"
        className="col-span-1"
        href="/"
      />
      <Service_card
        image={"/logo.png"}
        name="Ecommerce Solution"
        className="col-span-1"
        href="/"
      />
      <Service_card
        image={"/logo.png"}
        name="Personal Web"
        className="col-span-1"
        href="/"
      />
      <Service_card
        image={"/logo.png"}
        name="Bug Finding"
        className="col-span-1"
        href="/"
      />
      <Service_card
        image={"/logo.png"}
        name="Blog Site"
        className="col-span-1"
        href="/"
      />
      <Service_card
        image={"/logo.png"}
        name="Realtime Solution"
        className="col-span-1"
        href="/"
      />
    </Jumbotron>

    <Jumbotron innerClass="py-10 md:w-1/2 mx-auto text-center">
      <h2 className="font-bold text-3xl mb-4">
        Client Feedback!
      </h2>
      <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit</p>
    </Jumbotron>

    <Jumbotron innerClass="mb-10 md:w-1/2 mx-auto">

      <Testimonial_card 
        image="/logo.png"
        name="Jonathon Git"
        comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit"
      />

    </Jumbotron>

    <Jumbotron innerClass="my-10" />

    </>
  )
}
