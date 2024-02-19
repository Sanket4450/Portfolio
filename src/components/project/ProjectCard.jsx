import React from 'react'

export const ProjectCard = ({ image, title, titleDesc, projectURL, githubURL, descPoints, technologies }) => {
  return (
    <div className=" flex flex-col lg:flex-row lg:justify-between rounded-md">
      <div className=" w-full lg:w-[45%] rounded-md">
        <img src={image} />
      </div>
      <div className=" w-[45%]">
        <h2 className=" text-primary font-semibold">
          {title} <h2 className=" text-gray-strong font-normal"> - {titleDesc}</h2>
        </h2>
        <div>
          <a href={projectURL} className=" text-theme-primary hover:text-theme-hover-primary">
            {projectURL}
          </a>
          <a href={githubURL} className=" text-theme-primary hover:text-theme-hover-primary">
            {githubURL}
          </a>
        </div>
        <div>
          {descPoints.map((point) => (
            <div key={point.id}>
              <h4>{point.id}</h4>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h3>Tools & Technologies</h3>
          <div>
            {technologies.map((technology) => (
              <img key={technology.id} src={technology.logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
