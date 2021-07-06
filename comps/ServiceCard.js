import Image from 'next/image';
import ContinueBtn from './ContinueBtn';

const ServiceCard = ({service, hours, price, desc, imgSrc, w, h, book}) => {
    
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
                {book?<ContinueBtn data={{service, hours, price, desc}} service={{service, hours, price, desc, imgSrc, w, h}}>Book Now</ContinueBtn>:null}
            </div>
        </div>
    );
}
 
export default ServiceCard;