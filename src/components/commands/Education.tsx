import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science",
    desc: "Thapar university of engineering and technology | 2022 ~ 2026",
  },
  {
    title: "high school",
    desc: "Government Model seniour secondary high school | 2020 - 2022",
  },
];

export default Education;
