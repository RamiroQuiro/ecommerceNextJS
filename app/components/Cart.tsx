import Products from "./Products";

export default function Carts({ isOpen, getSubtotal, items }) {
  return (
    <div
      className={`${
        isOpen ? "translate-x-[0%]" : "translate-x-[100%]"
      } top-30 right-0 duration-200 max-w-screen-xl px-4 mx-auto z-20 sm:px-6 lg:px-8`}
    >
      <div className="w-full mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none flex flex-col items-center justify-around">
        <div className="px-6 py-8 bg-white w-full flex flex-col items-center gap-2 ">
          {items?.map((product) => (
            <Products showAs={"listItem"} item={product} />
          ))}
        </div>
        <div className="px-6 pb-4 bg-white  lg:flex-shrink-1 lg:p-12 w-full">
          <p className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
            Total:
          </p>
          <div className="flex items-center justify-center text-3xl font-extrabold leading-none text-gray-900 dark:text-white">
            <span>${getSubtotal}</span>
          </div>
          <p className="mt-4 text-sm leading-5">
            <span className="block font-medium text-gray-500 dark:text-gray-400">
              Card payments:
            </span>
            <span className="inline-block font-medium text-gray-500  dark:text-gray-400">
              2.9% + 20p per transaction
            </span>
          </p>
          <div className="mt-6">
            <div className="rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Create your store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
