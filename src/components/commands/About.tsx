import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Yash Yadav</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack and Gen-Ai developer</HighlightAlt> based in India.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
