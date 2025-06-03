import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Gen-Ai | Auto gen sollution",
    desc: "No coding. No struggle. Just AI-powered device onboarding.",
    url: "https://github.com/YashYadav007/Gen-Ai-Iot-Devices-",
  },
  {
    id: 2,
    title: "One-Tap Video Object Eraser",
    desc: "Unwanted object? Gone in a tap — like magic for your videos",
    url: "https://github.com/YashYadav007",
  },
  {
    id: 3,
    title: "Perfect-Pixel",
    desc: "Generation of pixel perfect image with embedded data.",
    url: "https://github.com/YashYadav007/pixelperfect",
  },
  {
    id: 4,
    title: "Codsick",
    desc: "Take Your Career to the Next Level with CodSick.",
    url: "https://cod-sick.vercel.app/",
  },
];

export default Projects;
