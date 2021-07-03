import Image from 'next/image';
import Link from 'next/link'

const ServiceCard = ({service, hours, price, desc, imgSrc, url, w, h}) => {
    return (
        <div className="mt-10 w-11/12 sm:w-80 mx-auto bg-gray-100">
            <div>
                <Image src={imgSrc} width={w} height={h}/>
            </div>
            <div className="px-5 mt-6 pb-4">
                <div className="flex justify-between">
                    <h2 className="font-bold">{service}</h2>
                    <span className="font-light">{hours} {price}</span>
                </div>
                <p className="mt-2">{desc}</p>
                <button className="text-center bg-gray-200 w-full py-2 rounded mt-5">
                    <Link href={url}>
                        <a>Book Now</a>
                    </Link>
                </button>
            </div>
        </div>
    );
}
 
export default ServiceCard;