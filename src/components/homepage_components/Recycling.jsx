import { RecyclingData } from "../../data/RecyclingData"

const Recycling = () => {

 
  return <section>
    {/* title of section */}
    <h2 className="w-full mb-12 p-4 bg-primary40 text-white text-center font-bold">Recycling (Almost All Kinds of) Scrap</h2>

     {/* card container 1 */}
    <div className="flex flex-row w-[80vw] mx-auto justify-around flex-wrap border-b-primary40 border-b">
    
    {/* map card */}
    {
      RecyclingData.slice(0,3).map((item, index) => 
        // card component
          <div key={index} 
            className={`w-64 h-72 lg:w-[25vw] lg:h-[35vw] px-4 border flex flex-col justify-center items-center text-center mb-8 shadow-light`}>
            {/* icon */}
            <div className="w-24 h-24 rounded-[50%] bg-[#F2FAF7] p-8 mb-4 flex flex-row justify-center items-center lg:w-[12vw] lg:h-[12vw]">
              <img src={item.icon} alt={`${item.title} icon`} className="h-8 w-8 lg:w-[8vw] lg:h-[8vw]"/>
            </div>
            {/* title of card component and description */}
            <h2 className="text-primary40 font-bold py-4 lg:text-[1.4rem]">{item.title}</h2>
            <p className="w-full text-[1rem] pb-4 lg:text-[1.4rem]">{item.descr}</p>
        </div>
      )
    }
    </div>

     {/* card container 2 */}
     <div className="flex flex-row w-[80vw] mx-auto justify-around flex-wrap mt-12">
    
    {/* map card */}
    {
      RecyclingData.slice(3,6).map((item, index) => 
        // card component
          <div key={index} 
            className={`w-64 h-72 lg:w-[25vw] lg:h-[35vw] px-4 border flex flex-col justify-around items-center text-center mb-8 shadow-light`}>
            {/* icon */}
            <div className="w-24 h-24 rounded-[50%] bg-[#F2FAF7] p-8 mb-4 flex flex-row justify-center items-center lg:w-[12vw] lg:h-[12vw] ">
              <img src={item.icon} alt={`${item.title} icon`} className="h-8 w-8 lg:w-[8vw] lg:h-[8vw]"/>
            </div>
            {/* title of card component and description */}
            <h2 className="text-primary40 font-bold py-4 lg:text-[1.4rem]">{item.title}</h2>
            <p className="text-[1rem] pb-4 lg:text-[1.4rem]">{item.descr}</p>
        </div>
      )
    }
    </div>
  
  </section>
  
}

export default Recycling