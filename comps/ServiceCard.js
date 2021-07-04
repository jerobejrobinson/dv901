import { useContext } from 'react';
import Image from 'next/image';
import { Update } from '../pages/booking';

const ServiceCard = ({service, hours, price, desc, imgSrc, w, h, book}) => {
    const update = useContext(Update)
    const data = {
        service,
        hours,
        price,
        desc,
        imgSrc,
        w,
        h
    }
    const bookingTrue = "w-11/12 mt-10 mx-auto bg-gray-100 sm:w-80";
    const bookingFalse = "w-11/12 mt-10 mx-auto bg-gray-100 md:flex md:max-w-screen-md md:mx-auto";
    return (
        <div className={book?bookingTrue:bookingFalse}>
            <div className="w-full flex justify-center">
                <Image src={imgSrc} width={w} height={h}/>
            </div>
            <div className="px-5 mt-6 pb-4">
                <div className="flex justify-between">
                    <h2 className="font-bold">{service}</h2>
                    <span className="font-light">{hours} {price}</span>
                </div>
                <p className="mt-2">{desc}</p>
                {book?<button 
                    className="text-center bg-gray-200 w-full py-2 rounded mt-5"
                    onClick={() => {
                        update.page()
                        update.data(data)
                    }}
                >Book Now</button>:null}
            </div>
        </div>
    );
}
 
export default ServiceCard;