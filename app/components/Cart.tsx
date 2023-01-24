"use client"
import { useCarritoCompras } from '../../context/contextStore'

export default function Carts() {



  return (
    
<div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
        <div className="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
            <h3 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                Zero Commission
            </h3>
            <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                Start selling online for free with all the features you need to launch your local delivery and pick-up service, nothing more. We don&#x27;t charge commission or monthly fees, keep all your margin.
            </p>
            <div className="mt-8">
                <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                        What&#x27;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200">
                    </div>
                </div>
                <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            All illimited components
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            Own custom Tailwind styles
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            Unlimited Templates
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            Free premium dashboard
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            Best ranking
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            Prenium svg
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            My wife
                        </p>
                    </li>
                </ul>
            </div>
            <div className="mt-8">
                <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                        &amp; What&#x27;s not
                    </h4>
                </div>
                <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            No Contracts. No monthly, setup, or additional payment processor fees
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                            No 2-week on-boarding, it takes 20 minutes!
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                Free
            </p>
            <div className="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
                <span>
                    $0/mo
                </span>
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
                    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Create your store
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
