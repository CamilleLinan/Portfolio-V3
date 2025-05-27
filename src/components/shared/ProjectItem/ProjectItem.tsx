import { FC } from "react";
import "./_ProjectItem.scss";

interface ProjectItemProps {
    id: string;
    cover: string;
    name: string;
    resume: string;
    className?: string;
}

const ProjectItem:FC<ProjectItemProps> = ({ id, cover, name, resume, className }) => {
    return (
        <li key={id} className={`project-item ${className}`}>
            <a href={'/project/' + name}>
                <figure className="project-item-figure background-section">
                    <img src={cover} alt={`cover ${name} openclassrooms`} loading="lazy" />
                    <figcaption className="project-item-figcaption">
                        <h3 className="project-item-figcaption_title">{name}</h3>
                        <p className="project_item_figcaption_subtitle">{resume}</p>
                    </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default ProjectItem;