import React from "react";
import "./Projects.css";
import { projectData } from "../ProjectData";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="projects-text">PROJECTS</div>
      <div className="projects">
        {projectData.map((data) => {
          return (
            <div className="single-project" key={data.repoLink}>
              <span>{data.name}</span>
              <a href={data.repoLink}>go to repo</a>
              {data.siteLink && <a href={data.siteLink}>go to live site</a>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
