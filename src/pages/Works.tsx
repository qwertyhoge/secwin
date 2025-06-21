import { Container } from "@mui/material";
import worksBackground from "../assets/works_bg.jpg"
import gradCoop from "../assets/grad_coop.png";
import qtTimetableMenu from "../assets/qt_timetable_menu.png";
import blenderBook from "../assets/blender_book.png";
import WorkCard from "../components/WorkCard"
import PageWithHero from "../components/PageWithHero";

export default function Works() {
  return(
    <PageWithHero
      title="Works"
      bg={worksBackground}
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
        <WorkCard
          title="Web開発"
          thumbnail={gradCoop}
          cardLean={2}
          cardLeanHover={1}
          noteLean={-10}
          targetUrl="/works/webdev"
        >
        </WorkCard>

        <WorkCard
          title="ツール開発"
          thumbnail={qtTimetableMenu}
          cardLean={-3}
          cardLeanHover={-1}
          noteLean={-7}
          targetUrl="/works/toolsdev"
        >
        </WorkCard>

        <WorkCard
          title="3D・XR制作"
          thumbnail={blenderBook}
          cardLean={1}
          cardLeanHover={3}
          noteLean={-8}
          targetUrl="/works/xrdev"
        >
        </WorkCard>
      </Container>
    </PageWithHero>
  );
}