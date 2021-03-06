import React, {useState} from "react";
import ProgressBar from "../comps/ProgressBar";
import ServiceCard from "../comps/ServiceCard";
import Calender from "../comps/Calender"
import TimeSlot from "../comps/TimeSlot/";
import Forms from "../comps/Forms";
import TermsAgree from "../comps/TermsAgree";
import ThankYou from "../comps/ThankYou";
import { useRouter } from 'next/router'
export const Update = React.createContext();

export default function Booking() {
    const router = useRouter();

    const pagesTotal = 100/6;
    const [page, setPage] = useState(1);
    const [percent, setPercent] = useState(pagesTotal);
    const [data, setData] = useState({});
    const [serviceSelected, setServiceSelected] = useState({});
    const update = {
        page: () => {
            if(page === 7) return;
            setPage(prev => prev + 1);
            setPercent(pagesTotal * (page + 1));
        }, 
        data: (data) => {
            setData(prev => {
                return {...prev, ...data}
            });
        },
        serviceSelected: (service) => {
            setServiceSelected(prev => {
                return {...prev, ...service}
            })
        },
        getData: data,
        getPage: page, 
    
    }
        
    
    return (
        <>
            <Update.Provider value={update} >
                <ProgressBar percent={percent} />
                {page === 1 && <SelectServices />}
                {page === 2 && <ShowPolicy data={serviceSelected} />}
                {page === 3 && <SelectDate data={serviceSelected}/>}
                {page === 4 && <SelectTime data={serviceSelected}/>}
                {page === 5 && <GetCustomerInfo data={serviceSelected}/>}
                {page === 6 && <ShowThankYou data={serviceSelected} />}
                {page === 7 && (() => {router.push("/")})()}
            </Update.Provider >
        </>
    );
}

const SelectServices = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mt-10">Select Service</h1>
            <div className="flex flex-col md:flex-row md:space-x-10">
                <ServiceCard
                    service="Classic Set" 
                    hours="3hr" 
                    price="$65" 
                    desc="Classic set gives you a more natural look. 1 lash extension to 1 natural lash. You may get any length between 8mm-14mm." 
                    imgSrc="/services/classic-set.png" 
                    w={354}
                    h={174}
                    book={true}
                />
                <ServiceCard 
                    service="Hybrid Set" 
                    hours="3hr" 
                    price="$65" 
                    desc="Classic set gives you a more natural look. 1 lash extension to 1 natural lash. You may get any length between 8mm-14mm." 
                    imgSrc="/services/hybrid-set.png" 
                    w={354}
                    h={174}
                    book={true}
                />
                <ServiceCard 
                    service="Volume Set" 
                    hours="3hr" 
                    price="$65" 
                    desc="Classic set gives you a more natural look. 1 lash extension to 1 natural lash. You may get any length between 8mm-14mm." 
                    imgSrc="/services/volume-set.png" 
                    w={354}
                    h={174}
                    book={true}
                />
            </div>
        </div>
    );
}

const SelectDate = ({data}) => {
    return (
        <div className="space-y-10">
            <h1 className="text-4xl font-bold text-center mt-10">Select Date</h1>
            <Calender />
            <ServiceCard
                service={data.service} 
                hours={data.hours} 
                price={data.price} 
                desc={data.desc}
                imgSrc={data.imgSrc} 
                w={data.w}
                h={data.h}
                book={false}
            />
        </div>
    );
}

const SelectTime = ({data}) => {
    return (
        <div className="p-2">
            <h1 className="text-4xl font-bold text-center mb-10">Select Time</h1>
            <TimeSlot />
            <ServiceCard
                service={data.service} 
                hours={data.hours} 
                price={data.price} 
                desc={data.desc}
                imgSrc={data.imgSrc} 
                w={data.w}
                h={data.h}
                book={false}
            />
        </div>
    );
}

const GetCustomerInfo = ({data}) => {
    return (
        <div>
            <Forms />
            <ServiceCard
                service={data.service} 
                hours={data.hours} 
                price={data.price} 
                desc={data.desc}
                imgSrc={data.imgSrc} 
                w={data.w}
                h={data.h}
                book={false}
            />
        </div>
    );
}

const ShowPolicy = ({data}) => {
    return (
        <div>
            <TermsAgree data={data} />
            <ServiceCard
                service={data.service} 
                hours={data.hours} 
                price={data.price} 
                desc={data.desc}
                imgSrc={data.imgSrc} 
                w={data.w}
                h={data.h}
                book={false}
            />
        </div>
    )    ;
}

const ShowThankYou = ({data}) => {
    return (
        <div>
            <ThankYou data={data} />
            <ServiceCard
                service={data.service} 
                hours={data.hours} 
                price={data.price} 
                desc={data.desc}
                imgSrc={data.imgSrc} 
                w={data.w}
                h={data.h}
                book={false}
            />
        </div>
    )    ;
}
