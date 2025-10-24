import React from 'react'

const Services = [
    {
    id: 1,
    title: "Responsive Website Design",
    description: "Building website appealing and mobile friendly website that adapt to all screen sizes.",
    },
    {
    id: 2,
    title: "Custom Web Application Development",
    description: "Developing interactive and dynamic web application using modern tech like React.js.",
    },
    {
    id: 3,
    title: "UI/UX Implementation",
    description: "Turning design prototypes (Figma etc.) into clean, efficent & perfect user interfaces.",
    },
    {
    id: 4,
    title: "Landing Page Development",
    description: "Designing & developing landing pages for products.",
    },
    {
    id: 5,
    title: "Version Control & Deployment",
    description: "Managing code with Git/Github and deploying projects seamlessy to platforms.",
    },
];

const Service = () => {
  return (
        <div className='bg-black text-white py-20' id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {Services.map(Service => (

                <div key={Service.id}
                className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
                transition-transform duration-300 hover:scale-105'>
                <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-600 to-blue-400 '>
                    
                {Service.id}

                </div>
                <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500'>
                    {Service.title}
                </h3>
                <p className='mt-2 text-gray-300'>{Services.description}</p>
                <a href='#' className='-mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>

                </div>
                ))}
            </div>
        </div>
        </div>
  )
}

export default Service
