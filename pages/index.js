import ServiceCard from "../comps/ServiceCard";

export default function Home() {
  const handleClick = () => {
    //put data into local storage
    //grab data from LS to generate Service Card on Booking
    //make sure to clear data once booking has been made

  }
  return (
    <>
    <div className="bg-gray-100 text-center py-12">
      <div className="max-w-4xl mx-auto">
        <div className="p-5">
          <h1 className="font-bold text-3xl">Dreamy Vibes 901</h1>
          <p className="uppercase">Where your lash dreams come true!</p>
        </div>
        <p className="p-5 mt-12">Hello, my dreamers!<br/>My name is Angelica Holmes and I&apos;m a lash tech based in Memphis, Tn Here you can fulfil your lash dreams, either it&apos;s a <strong>classic</strong>, <strong>hybrid</strong>, or <strong>volume</strong> set. I can fulfil that for you! </p>
        <button className="bg-gray-50	p-5 mt-12">
          Book A Session Now
        </button>
      </div>
    </div>
    <div>
      
    </div>
    </>
  )
}
