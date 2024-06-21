import React from 'react';

function ToolTable() {
  const tools = [
    { name: 'JavaScript Frameworks and Libraries', description: 'Proficient in React.js and Next.js I leverage these powerful tools to build dynamic, interactive user interfaces with a focus on performance and maintainability.' },
    { name: 'APIs', description: 'Experienced in integrating RESTful APIs and GraphQL to connect and manage data efficiently, ensuring seamless communication between frontend and backend systems.' },
    { name: 'Markup and Static Site Generators', description: 'Skilled in HTML5, CSS3, and SASS, I use tools like Gatsby and Hugo to generate static sites that are both lightning-fast and SEO-friendly.' },
    { name: 'Version Control', description: 'Git and GitHub are essential parts of my workflow, enabling collaborative development and effective version management.' },
    { name: 'Build Tools and Package Managers', description: ' Competent with Webpack, Vite, and npm/yarn, ensuring that my projects are optimized and dependencies are managed efficiently.' },
    { name: 'Design Systems and UI Frameworks', description: 'Familiar with Material-UI and Tailwind CSS, I create cohesive and visually appealing interfaces that enhance user experience.' },
    { name: 'Testing and Quality Assurance', description: 'Implementing Jest for unit and end-to-end testing, I ensure the reliability and robustness of my applications.' },
    { name: 'Deployment and Hosting', description: 'Utilizing platforms like Netlify, Vercel, and AWS, I deploy and host applications with ease, ensuring they are performant and highly available.' },
    { name: 'Content Management Systems (CMS)', description: ' Worked with headless CMS solutions like Prismic, allowing for flexible content management and delivery.' },
    { name: 'Performance Optimization', description: 'Focused on optimizing web performance through lazy loading, code splitting, and image optimization techniques.' }
  ];

  return (
        <div className='w-full'>
          {tools.map((tool, index) => (
              <div key={index}  className={`border-t-2 border-cyan-300 flex flex-col w-full overflow-hidden
                relative cursor-pointer py-4 px-1 hover:bg-cyan-950 hover:bg-opacity-45
                `}>
                            
                <div className='title-h5 z-[10] w-full flex items-center '>
                  {`[${index + 1}]`} &nbsp; {tool.name}
                </div>
                <div className='text-xxsmall-min z-[10] flex justify-start items-center w-full pb-1 lg:pb-0'>
                  {tool.description}
                </div>
            </div>
          ))}
      </div>
  );
}

export default ToolTable;
