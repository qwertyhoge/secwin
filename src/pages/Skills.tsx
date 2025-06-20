import { Container } from "@mui/material";
import skillsBackground from "../assets/skills_bg.jpg"
import gradCoop from "../assets/grad_coop.png";
import qtTimetableMenu from "../assets/qt_timetable_menu.png";
import blenderBook from "../assets/blender_book.png";
import SkillCard from "../components/SkillCard"
import PageWithHero from "../components/PageWithHero";

export default function Skills() {
  return(
    <PageWithHero
      title="Skills"
      bg={skillsBackground}
    >
      <Container 
        sx={{
          marginTop: 10,
          display: "flex",
          justifyContent: 'left',
          flexFlow: "column",
          gap: 14
        }}
        >
        <SkillCard
          title="Web開発"
          thumbnail={gradCoop}
          cardLean={2}
          cardLeanHover={1}
          noteLean={-10}
          targetUrl="/skills/webdev"
        >
        </SkillCard>

        <SkillCard
          title="ツール開発"
          thumbnail={qtTimetableMenu}
          cardLean={-3}
          cardLeanHover={-1}
          noteLean={-7}
          targetUrl="/skills/toolsdev"
        >
        </SkillCard>

        <SkillCard
          title="3D・XR制作"
          thumbnail={blenderBook}
          cardLean={1}
          cardLeanHover={3}
          noteLean={-8}
          targetUrl="/skills/xrdev"
        >
        </SkillCard>
      </Container>
    </PageWithHero>
  );
}