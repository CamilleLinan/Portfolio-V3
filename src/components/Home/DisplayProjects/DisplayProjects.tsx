import { FC } from "react";
import "./_DisplayProjects.scss";
import { projectsList } from "../../../data/projectsList";
import ProjectItem from "../../shared/ProjectItem/ProjectItem";

const DisplayProjects:FC = () => {
    return (
        <section className="projects">
            <ul className="projects-list">
                {projectsList.map(({ id, cover, name, resume }) => (
                    <ProjectItem
                        key={id}
                        id={id}
                        cover={cover}
                        name={name}
                        resume={resume}
                    />
                ))} 
            </ul>
        </section>
    )
}

export default DisplayProjects;