import { LeftArrow, RightArrow } from "../icons";
import HeaDing from "./heading";
import RedDiv from "./redDiv";

export default async function TodayFlash() {
    

    return <div>
       <RedDiv />
       <div className="flex flex-basis-1 sm:flex-basis-0 justify-between items-start">
       <div>
        <HeaDing item="Flash Sales" />
       </div>
       <div className="grid grid-flow-row">
        <span className="flex gap-4 justify-around">
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
        </span>
        <span className="flex gap-2">
            <HeaDing item="00" />:
            <HeaDing item="00" />:
            <HeaDing item="00" />:
            <HeaDing item="00" />      
        </span>
       </div>
       <div className="flex gap-5">
        <span className="bg-gray-400 p-1 rounded-full">
        <LeftArrow/>
        </span>
        <span className="bg-gray-400 p-1 rounded-full">
        <RightArrow/>
        </span>
       </div>
        </div>
        <div>
            {/* {
                products.map(({id, name, price, avgRatings, noOfReviews, imgsrc })=>{
                    return (
                        <div key={id}>

                        </div>
                    )
                })
            } */}
     </div>
    </div>
}