import Divider from '@mui/material/Divider';
import {Typography,  Container} from '@mui/material';
import ImageCardWithCaption from "../components/ImageCardWithCaption";
import blenderBook from "../assets/blender_book.png";
import blenderMopeFlower from "../assets/blender_mope_flower.png";
import picholoIdle from "../assets/picholo_idle.gif";
import picholoSwipe from "../assets/picholo_swipe.gif";
import SkillPage from './SkillPage';

export default function XRDev() {
  return (
    <SkillPage
      title="3D・XR制作"
      thumbnail={blenderBook}
    >
      <Typography variant="h4" align="left">
        小規模3Dモデル
      </Typography>
      <Typography>
        <p>
          2024年からVRChatというVRSNSをきっかけに、3Dモデルの制作に興味を持ち始めた。まだまだ初学者の域を出ないが、Blenderで何度かちょっとしたモデルを作っている。
        </p>
      </Typography>
      <Container 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: {
            xs: 'column',
            md: 'row'
          },
          gap: 2
        }}
      >
        <ImageCardWithCaption 
          image={blenderBook}
          caption='魔法使いイメージのアバターに持たせる、魔導書のイメージで作成。'
          cardWidth='60vw'
          imageHeight='200px'
        >
        </ImageCardWithCaption>
        <ImageCardWithCaption 
          image={blenderMopeFlower}
          caption='花のキャラクター。VRChat内で掴んで動かせる。'
          cardWidth='60vw'
          imageHeight='200px'
        >
        </ImageCardWithCaption>
      </Container>

      <Divider sx={{margin: 10}}/>

      <Typography variant="h4" align="left">
        ホログラム
      </Typography>
      <Typography>
        <p>
          VRChat上で動作するホログラムモジュールを制作した。手を左右に振ってスワイプすると次または前のホログラムにスライドして切り替わる。
        </p>
        <p>
          勝手を知らないシェーダープログラムを自分で作らなければならなかったが、高専で学んだ画像処理のノウハウがある程度活かせたおかげもあり一週間程度で作れた。
        </p>
      </Typography>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: {
            xs: 'column',
            md: 'row'
          },
          gap: 2
        }}
      >
        <ImageCardWithCaption 
          image={picholoIdle}
          caption='線のスキャンやグリッチ表現をシェーダーで実装した。'
          cardWidth='60vw'
          imageHeight='200px'
        >
        </ImageCardWithCaption>
        <ImageCardWithCaption 
          image={picholoSwipe}
          caption='手を左右に振ることで画像を切り替えられる。'
          cardWidth='60vw'
          imageHeight='200px'
        >
        </ImageCardWithCaption>
      </Container>

    </SkillPage>
  )
}