import React from 'react';

function ToolTable() {
  const tools = [
    { name: 'SaaS / SCSS', description: 'Powerful CSS extensions that help write clean, efficient, and reusable styles.' },
    { name: 'JavaScript', description: 'A crucial language for adding interactivity, enabling dynamic features in web apps.' },
    { name: 'React.js', description: 'A library for building user interfaces with component-based architecture.' },
    { name: 'Next.js', description: 'A React framework for building efficient, scalable web applications..' },
    { name: 'GSAP', description: 'A High-performance JavaScript library for complex, flexible web animations.' },
    { name: 'prismic', description: 'A headless CMS that enables content management via APIs.' },
    
  ];

  return (
        <div className='w-full'>
      {tools.map((tool, index) => (
          <div key={index} className='flex flex-col lg:flex-row border-t-[1px]  border-zinc-500 py-1'>
          <div className='title-xsmall border-r-none lg:border-r-[1px] border-zinc-500 w-full lg:w-[20%] flex items-center ml-4'>
            {tool.name}
          </div>
          <div className='text-xxsmall-min ml-4 flex justify-start items-center w-[92%] lg:w-[72%] pb-1 lg:pb-0'>
            {tool.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToolTable;
