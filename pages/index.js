import ServiceCard from "../comps/ServiceCard";

export default function Home() {
  return (
    <>
    <div className="bg-gray-100 text-center py-12">
      <div className="max-w-4xl mx-auto">
        <div className="p-5">
          <h1 className="font-bold text-3xl">Dreamy Vibes 901</h1>
          <p className="uppercase">Where your lash dreams come true!</p>
        </div>
        <p className="p-5 mt-12">Hello, my dreamers!<br/>My name is Angelica Holmes and I'm a lash tech based in Memphis, Tn Here you can fulfil your lash dreams, either it's a <strong>classic</strong>, <strong>hybrid</strong>, or <strong>volume</strong> set. I can fulfil that for you! </p>
        <button className="bg-gray-50	p-5 mt-12">
          Book A Session Now
        </button>
      </div>
    </div>
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10">services</h1>
        <div className="">
          <ServiceCard 
            service="Classic Set" 
            hours="3hr" 
            price="$65" 
            desc="Classic set gives you a more natural look. 1 lash extension to 1 natural lash. You may get any length between 8mm-14mm." 
            imgSrc="/services/classic-set.png" 
            url="#"
            w={354}
            h={174}
          />
          <ServiceCard 
            service="Hybrid Set" 
            hours="3hr" 
            price="$65" 
            desc="Classic set gives you a more natural look. 1 lash extension to 1 natural lash. You may get any length between 8mm-14mm." 
            imgSrc="/services/hybrid-set.png" 
            url="#"
            w={354}
            h={174}
          />
          <ServiceCard 
            service="Volume Set" 
            hours="3hr" 
            price="$65" 
            desc="Classic set gives you a more natural look. 1 lash extension to 1 natural lash. You may get any length between 8mm-14mm." 
            imgSrc="/services/volume-set.png" 
            url="#"
            w={354}
            h={174}
          />
        </div>
      </div>
    </div>
    </>
  )
}
