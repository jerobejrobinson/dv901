import React, {useState, useContext} from "react";
import ProgressBar from "../comps/ProgressBar";
import ServiceCard from "../comps/ServiceCard";
import Calender from "../comps/Calender"


export default function Booking() {
    const pagesTotal = 100/5;
    const [page, setPage] = useState(1);
    const [percent, setPercent] = useState(pagesTotal);
    const [data, setData] = useState({});
    const use = {
        updatePage: () => {
            if(page === 5) return;
            setPage(prev => prev + 1);
            console.log(page)
            setPercent(pagesTotal * (page + 1));
        }, 
        updateData: (data) => {
            setData({...data});
        }}
    
    return (
        <>
            
                {/* progress bar */}
                <ProgressBar percent={percent} />

                {/* display booking ui */}

                {/* this component won't */}
                {page === 1 && <SelectServices use={use} id={1}/>}
                {page === 2 && <SelectDate use={use} id={2} />}
                {page === 3 && <SelectServices use={use} id={3} />}
                {page === 4 && <SelectServices use={use} id={4} />}
                {page === 5 && <SelectServices use={use} id={5} />}
            
        </>
    );
}

const SelectServices = ({use, id}) => {
    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mt-10">services</h1>
                <div>
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
                    <button onClick={use.updatePage} id={1}>
                        this {id}
                    </button>
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
    );
}

const SelectDate = ({use, id}) => {
    return (
        <div>
            <Calender />
            <button onClick={use.updatePage} id={1}>
                this {id}
            </button>
        </div>
    );
}

const SelectTime = () => {
    return (
        <div>

        </div>
    );
}

const GetCustomerInfo = () => {
    return (
        <div>

        </div>
    );
}

const ShowPolicy = () => {
    return (
        <div>

        </div>
    )    ;
}
