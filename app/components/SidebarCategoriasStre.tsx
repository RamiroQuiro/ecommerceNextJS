import UlCategoriasSidebar from "./UlCategoriasSidebar";
export default  function SidebarCategoriasStre({data}) {
  // const [openFilter,setOpenFilter]=useState(true)
  return (
    <div className="md:w-[280px] md:min-w-[280px] w-full  py-10 pl-10 bg-white sticky top-[68px] md:h-[97vh]  border-2 flex-col flex ">
      {/* <button
      onClick={()=>{
        // setOpenFilter(!openFilter)
      }}
      className="md:hidden w-full h-10 flex items-center justify-between px-10 mx-auto font-semibold">
        <svg
          width="18"
          height="14"
          className="fill-gray-600"
          viewBox="0 0 18 14"
        >
          <path
            d="M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z"
            transform="translate(-925 -1292.064)"
            fill="currentColor"
          ></path>
          <path
            d="M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z"
            transform="translate(-925 -1939.001)"
            fill="currentColor"
          ></path>
          <path
            d="M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z"
            transform="translate(-1158.213 -1122.489)"
            fill="currentColor"
          ></path>
          <path
            d="M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z"
            transform="translate(-2330.617 -1769.425)"
            fill="currentColor"
          ></path>
        </svg>
        <span>Categorias</span>
      </button> */}
     
        <UlCategoriasSidebar
        data={data}
        // categorias={categorias}
        key={1}
      />
    </div>
  );
}
