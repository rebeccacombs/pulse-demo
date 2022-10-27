import React from 'react'
import June from "./Images/june.png"
import Rebecca from "./Images/rebecca.png"
import Faith from "./Images/faith.jpg"
import Helene from "./Images/helene.jpg"
import Maya from "./Images/maya.jpg"
import Mimi from "./Images/mimi.jpg"
import Tanushree from "./Images/tanushree.jpg"
import Chai from "./Images/chai.jpg"


function About() {
  return (
    <div>
    <h1 class="text-center mt-8 font-medium text-4xl text-teal-500">hi, we're pulse</h1>
    <div class="px-16 text-center mt-2 text-lg">In college, it's hard to balance school, work and health. We're here to provide evidence-based tips on improving quality of life</div>
    <h3 class="text-center mt-8 text-3xl font-medium">Our mission</h3>
    <div class="px-16 text-center mt-2 text-lg mb-8">We're going to conduct research on campus and create a holistic health tracking app. Our end goal is to provide more specific recommendations for DKU students to live well</div>
    <div class="flex justify-center mx-auto px-6 p-10 bg-teal-500 rounded">
        <div class="grid grid-rows-3 grid-flow-col">
        <div class="box px-6 py-4 bg-white max-w-sm mb-8 mr-8 rounded-lg">
            <div class="text-center font-bold text-xl mb-1">Literature Review</div>
            <div class="text-center italic mb-2">10/2022</div>
            <ul class="text-gray-700 mb-2 list-inside">
            <li>- Look into the effects of habits(ie sleep) on performance </li>
                    <li>- Create concise research backed educational resources</li>
                </ul>
            </div>
            
            <div class="box px-6 py-4 bg-white max-w-sm mb-8 mr-8 rounded-lg">
            <div class="text-center font-bold text-xl mb-1">Designing Experiments</div>
            <div class="text-center italic mb-2">10/2022</div>
            <ul class="text-gray-700 mb-2 list-inside">
            <li>- Design 2 experiments</li>
                    <li>- Recruit volunteers</li>
                </ul>
            </div>
            
            <div class="box px-6 py-4 bg-white max-w-sm mb-8 mr-8 rounded-lg">
            <div class="text-center font-bold text-xl mb-1">Conducting Experiments</div>
            <div class="text-center italic mb-2">01/2023-06/2024</div>
            <ul class="text-gray-700 mb-2 list-inside">
            <li>- Run experiments for weeks-months</li>
                    <li>- Collect data in our application</li>
                </ul>
            </div> 

            <div class="box px-6 py-4 bg-white max-w-sm mb-8 rounded-lg">
            <div class="text-center font-bold text-xl mb-1">Website Development</div>
            <div class="text-center italic mb-2">10/2022-current</div>
            <ul class="text-gray-700 mb-2 list-inside">
                <li>- Look into the effects of habits (ie sleep) on performance </li>
                <li>- Create concise research backed educational resources</li>
                </ul>
            </div>

            <div class="box px-6 py-4 bg-white max-w-sm mb-8 rounded-lg">
            <div class="text-center font-bold text-xl mb-1">App Development</div>
            <div class="text-center italic mb-2">01/2023-02/2023</div>
            <ul class="text-gray-700 mb-2 list-inside">
            <li>- The first version just needs to collect data</li>
                    <li>- Implement features over months</li>
                </ul>
            </div>

            <div class="box px-6 py-4 bg-white max-w-sm mb-8 rounded-lg">
            <div class="text-center font-bold text-xl mb-1">Data Analysis and Visualization</div>
            <div class="text-center italic mb-2">04/23-01/2024</div>
            <ul class="text-gray-700 list-inside">
            <li>- Create engaging and interactive models</li>
                    <li>- Share data with participants</li>
                    <li>- Draw conclusions</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-between flex-wrap p-6 ">
    <h3 class="mx-auto mt-6 text-3xl font-medium">Our current studies</h3>
    </div>
    <div class="flex items-center justify-between flex-wrap p-6 bg-teal-200 rounded">
    <div class="grid grid-flow-col flex justify-center mx-auto">
        <div class="mr-20">
        <button class="bg-white hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded inline-flex items-center">
  <span>study1 sleep vs caffeine vs nutrition over time </span>
</button>
        </div>
        <div>
        <button class="bg-white hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded inline-flex items-center">
  <span>study2 sleep vs performance </span>
</button>
        </div>
    </div>
    </div>
    <div class="flex items-center justify-between flex-wrap p-6">
    <h3 class="mx-auto mt-6 font-medium text-3xl">Our app</h3>
    </div>
    <div class="flex justify-center"> <iframe src="https://giphy.com/embed/m124t8N57KvZG2SLV8" width="500" height="500" scrolling="no"></iframe>
    </div>
    <div class="flex justify-center mx-auto">
    <h3 class="mx-auto mt-6 font-medium text-3xl">Contact us</h3>
    </div>
    <div class="flex justify-center mx-auto px-6 p-10">
    <div class="grid grid-rows-2 grid-flow-col flex ">
    <div class="relative h-64 w-64 rounded mb-2 mr-4">
    <div class="absolute inset-0 z-0 rounded-full bg-cover bg-center opacity-100 hover:opacity-50"> <img class="rounded-full shadow-md" src={June}/></div>
    <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 font-semibold text-black opacity-0 duration-300 hover:opacity-100">jl1100@duke.edu</div>
    </div>
    <div class="relative h-64 w-64 rounded">
    <div class="absolute inset-0 z-0 rounded-full bg-cover bg-center opacity-100 hover:opacity-50"> <img class="rounded-full shadow-md" src={Rebecca}/></div>
    <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 font-semibold text-black opacity-0 duration-300 hover:opacity-100">rdc47@duke.edu</div>
    </div>
    <div class="relative h-64 w-64 rounded mr-4">
    <div class="absolute inset-0 z-0 rounded-full bg-cover bg-center opacity-100 hover:opacity-50"> <img class="rounded-full shadow-md" src={Faith}/></div>
    <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 font-semibold text-black opacity-0 duration-300 hover:opacity-100">fjh5@duke.edu</div>
    </div>
    <div class="relative h-64 w-64 rounded">
    <div class="absolute inset-0 z-0 rounded-full bg-cover bg-center opacity-100 hover:opacity-50"> <img class="rounded-full shadow-md" src={Helene}/></div>
    <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 font-semibold text-black opacity-0 duration-300 hover:opacity-100">hlg25@duke.edu</div>
    </div>
    <div class="relative h-64 w-64 rounded mr-4">
    <div class="absolute inset-0 z-0 rounded-full bg-cover bg-center opacity-100 hover:opacity-50"> <img class="rounded-full shadow-md" src={Maya}/></div>
    <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 font-semibold text-black opacity-0 duration-300 hover:opacity-100">mls172@duke.edu</div>
    </div>
    <div class="relative h-64 w-64 rounded">
    <div class="absolute inset-0 z-0 rounded-full bg-cover bg-center opacity-100 hover:opacity-50"> <img class="rounded-full shadow-md" src={Mimi}/></div>
    <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 font-semibold text-black opacity-0 duration-300 hover:opacity-100">mls173@duke.edu</div>
    </div>
    <div class="relative h-64 w-64 rounded">
    <div class="absolute inset-0 z-0 rounded-full bg-cover bg-center opacity-100 hover:opacity-50"> <img class="rounded-full shadow-md" src={Tanushree}/></div>
    <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 font-semibold text-black opacity-0 duration-300 hover:opacity-100">tk202@duke.edu</div>
    </div>
    <div class="relative h-64 w-64 rounded">
    <div class="absolute inset-0 z-0 rounded-full bg-cover bg-center opacity-100 hover:opacity-50"> <img class="rounded-full shadow-md" src={Chai}/></div>
    <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 font-semibold text-black opacity-0 duration-300 hover:opacity-100">ceb118@duke.edu</div>
    </div>
    </div>
    </div>
    <div class="mx-auto mt-20"></div>
    </div>
  )
}

export default About