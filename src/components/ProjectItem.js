import React from "react";

function ProjectItem({ id, project:{ name, about, technologies }}) {
  return (
    <div className="project-item" id = {id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map(technology => (
            <span>
              {technology}
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
