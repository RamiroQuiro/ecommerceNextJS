import InputSearch from "./InputSearch";

export default function Banner() {




  return (
    <div className="bg-paleta-300/50 w-screen h-[90vh] flex items-center justify-center mx-auto">
      <div className="items-center text-center flex gap-8 -translate-y-7 flex-col ">
        <h1 className="text-6xl  font-medium">Farmacia Belgrano</h1>
        <span className="text-xl  ">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </span>
        <InputSearch label={"banner"}
        
        />      
      </div>
    </div>
  );
}
