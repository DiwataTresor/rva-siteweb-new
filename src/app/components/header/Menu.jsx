import React from "react";

function Menu() {
  return (
    <>
      <nav>
        <ul class="flex justify-center font-semibold flex-col md:flex-row items-start md:items-start text-white">
          <li class="relative group px-3 py-2">
            <button
              class="hover:opacity-50 cursor-default text-center justify-center items-center flex flex-col"
              aria-haspopup={true}
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M10 18v-3a2 2 0 012-2v0a2 2 0 012 2v3M2 8l9.732-4.866a.6.6 0 01.536 0L22 8" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span className="font-bold text-xl">Accueil</span>
            </button>
            <div
              style={{ display: "block" }}
              class="absolute ml-7 lg:-left-48 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] md:min-w-[560px] sm:max-w-[200px] w-[80%] transform"
            >
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div className="flex flex-row gap-5 mb-4">
                  <a href="" className="text-blue-500 text-[14px] border-b border-blue-500">Actualités</a>
                  <a href="" className="text-blue-500 text-[14px] border-b border-blue-500">Evènements</a>
                  <a href="" className="text-blue-500 text-[14px] border-b border-blue-500">Offre d'emploi</a>
                  
              </div>
                {/* <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm -ml-10"></div> */}
                <div class="relative z-10">
                  <div
                      class="mb-4 text-center block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold "
                    >
                    Nos aéroports internationaux
                    
                  </div>
                  <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-6">
                    <div>
                      <p
                        class="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b"
                        onClick={() => alert("yyhh")}
                      >
                        Kinshasa
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              A Propos de l'aeroport
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Trouvez toutes les informations sur l'aeroport
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Trafic
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Informations sur les vols
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Services et contact
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Les services de l'aeroport
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b">
                        Luano - Lubumbashi
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              A Propos de l'aeroport
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Trouvez toutes les informations sur l'aeroport
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Trafic
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Informations sur les vols
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Services et contact
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Les services de l'aeroport
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b">
                        Goma
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              A Propos de l'aeroport
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Trouvez toutes les informations sur l'aeroport
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Trafic
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Informations sur les vols
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Services et contact
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Les services de l'aeroport
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b">
                        Kisangani
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              A Propos de l'aeroport
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Trouvez toutes les informations sur l'aeroport
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Trafic
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Informations sur les vols
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            <div className="flex flex-row gap-2">
                              <svg
                                width="24px"
                                height="24px"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#fb6a09"
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="#fb6a09"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Services et contact
                            </div>
                            <p class="text-gray-500 font-normal text-[13px]">
                              Les services de l'aeroport
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                  <div
                      class="mb-4 text-center block w-full p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold "
                    >
                    Nos aéroports nationaux
                    
                  </div>
                  <div className="text-center mt-3">
                    <a href="#" className="text-blue-800 font-bold hover:bg-blue-800 hover:text-white hover:rounded-md p-2">Parcourir</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group px-3 py-2">
            <button
              class="hover:opacity-50 cursor-default text-center justify-center items-center flex flex-col"
              aria-haspopup="true"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fb6a09"
              >
                <path
                  d="M9.019 9A6.5 6.5 0 1115 14.981M8.5 22a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM22 17a3 3 0 01-3 3h-2m0 0l2-2m-2 2l2 2M2 7a3 3 0 013-3h2m0 0L5 6m2-2L5 2"
                  stroke="#fb6a09"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="font-bold text-xl">Business</span>
            </button>
            <div class="absolute lg:-left-24 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-[105px] duration-500 ease-in-out rounded-sm"></div>
                <div class="relative z-10">
                  {/* <a
                    href="#"
                    class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Documentation
                    <p class="text-gray-500 font-normal">
                      Start integrating in no time
                    </p>
                  </a> */}
                  <div class="grid grid-cols-3 gap-3 mt-6">
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 text-[13px] border-b">
                        Opportunité d'affaires
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal text-[13px]"
                          >
                            New Airline Request
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal text-[13px]"
                          >
                           Opportunity Development and
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal text-[13px]"
                          >
                            Investment
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal text-[13px]"
                          >
                           Traffic Development
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b">
                        Commercial
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Business Opportunities
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                           Capacity Allocation Mechanism
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b">
                        Tarifs
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Airport tarifs
                          </a>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-6 mt-6">
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 text-[13px] border-b">
                        Careers
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            careers oportunities
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Carreers portal
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Learnership
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b">
                        Investor Relations
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Economic Regulation
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 p-0 block font-normal text-[13px]"
                          >
                            Financial Information
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Investor Information
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Strategic Direction
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="px-3 py-2 relative group">
            <button
              class="hover:opacity-50 cursor-default text-center justify-center items-center flex flex-col"
              aria-haspopup="true"
            >
              <svg
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fb6a09"
              >
                <path
                  d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  stroke="#fb6a09"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="font-bold text-xl">A Propos</span>
            </button>
            <div class="absolute lg:-left-24 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-[105px] duration-500 ease-in-out rounded-sm"></div>
                <div class="relative z-10">
                  <div
                    
                    class="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    A Propos de la RVA
                    <p class="text-gray-500 font-normal">
                      
                    </p>
                  </div>
                  <div class="grid grid-cols-2 gap-6 mt-6">
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 text-[13px] border-b">
                        About
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Awards
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Company Profil
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            History
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Our Structures
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b">
                        Executive Management
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            General Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Bord of Directors
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Organigram
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Create stunning effects
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-6 mt-6">
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 text-[13px] border-b">
                        Security
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Prohibeted items
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Liquids, Aerosols and Gels
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            COVID-19
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 text-[13px] border-b">
                        Directions
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Finance
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Commercial
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Exploitation
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Approvisionnement
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Technique
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="px-3 py-2 relative group">
            <button
              class="hover:opacity-50 cursor-default text-center justify-center items-center flex flex-col"
              aria-haspopup="true"
            >
              <svg
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fb6a09"
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10M13 2.05S16 6 16 12"
                  stroke="#fb6a09"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11 21.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12M2.63 8.5h18.74"
                  stroke="#fb6a09"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271z"
                  stroke="#fb6a09"
                  stroke-width="1.5"
                ></path>
              </svg>
              <span className="font-bold text-xl">Contact</span>
            </button>
            <div class="absolute lg:-left-24 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-[105px] duration-500 ease-in-out rounded-sm"></div>
                <div class="relative z-10">
                  <a
                    href="#"
                    class="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Contact

                  </a>
                  <div class="grid grid-cols-2 gap-6 mt-6">
                    <div>
                      
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                             Nos contacts
                          </a>
                        </li>
                        
                        
                        
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
