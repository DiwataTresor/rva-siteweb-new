import { inter, lora, poiret, pignon, poppins, michroma } from "../style/fonts";
const TitrePage=({titre})=>{
    return(
      <div className=" h-[100px] text-center flex flex-col justify-center bg-slate-300">
        <h1 className="text-3xl" style={poppins.style}># {titre}</h1>
      </div>
    )
}
export default TitrePage