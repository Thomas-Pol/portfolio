import ProjectsScrollClient from "./ProjectsScrollClient";
import { projects } from "@/data/projects";

export default async function ProjectsScroll() {
  return <ProjectsScrollClient projects={projects} />;
}
