export default function ButtonCaregorias({ onClick, imgSrc, name, isOpen }) {
  return (
    <li className="w-full">
      <button
        onClick={onClick}
        className="py-3 tracking-wide w-full   gap-2 cursor-pointer font-semibold group"
      >
        <div className="w-full flex items-center justify-between ">
          <img src={imgSrc} alt="" />
          <span>{name}</span>
          <svg
            className={
              isOpen ? "rotate-180  duration-150" : "rotate-0 duration-150"
            }
            width="15"
            height="15px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9201 15.0501L13.4001 8.53014C12.6301 7.76014 11.3701 7.76014 10.6001 8.53014L4.08008 15.0501"
              stroke="#6B72A1"
              stroke-width="1.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
    </li>
  );
}
