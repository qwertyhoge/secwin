import Divider from '@mui/material/Divider';
import {Typography,  Container} from '@mui/material';
import ImageCardWithCaption from "../components/ImageCardWithCaption";
import githubIcon from "../assets/github-mark.svg"
import FC2Note from "../assets/fc2note.png";
import whiteboxSpec from "../assets/whitebox_spec.png";
import gradCoop from "../assets/grad_coop.png";
import vueTimetable from "../assets/vue_timetable.png";
import WorkPage from './WorkPage';

export default function WebDev() {
  return (
    <WorkPage
      title="Web開発"
      thumbnail={gradCoop}
    >
      <Typography variant="h4" align="left">
        授業ノート
      </Typography>
      <Typography>
        <p>
          <a href="http://mcmo.web.fc2.com/indexa.html" target="_blank">FC2ホームページ</a>で授業内容をまとめたのがWeb開発の始まり。難解だと思った部分を教科書を読みなおしながら嚙み砕いて自分の言葉でまとめ、それをクラスメートに共有したいと思ってアップロードしていた。
        </p>
        <p>
          当初はMarkdown=&gt;HTMLの変換(pandoc使用)で作っており、それでは不十分なところからHTML、Javascript、CSSを学んで織り交ぜていった。
        </p>
      </Typography>
      <Container 
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ImageCardWithCaption
          image={FC2Note}
          caption="学生時代に作った授業ノート。クオリティに自信はなかったので、一部の友人に見せていた。"
          cardWidth='60vw'
          imageHeight='300px'
        >
        </ImageCardWithCaption>
      </Container>

      <Divider sx={{margin: 10}}/>

      <Typography variant="h4" align="left">
        サークル用ホームページ
        <a href='https://github.com/qwertyhoge/whitebox_hp' target='_blank' style={{verticalAlign: "middle"}}>
          <img src={githubIcon} style={{height: 32, margin: "0px 8px"}}/>
        </a>
        <Typography color='textSecondary' component={'span'} variant='caption'>
          Private
        </Typography>
      </Typography>
      <Typography>
        <p>
          在学中に遊んでいたボードゲーム仲間がサークルを立ち上げ、ホームページ作成を依頼されて作ったもの。
        </p>
        <p>
          結局大々的な活動にはならず、計画は頓挫してしまったがページ構成や動的ページの作成、データベースの設計や連携、また認証についても学ぶ機会になった。
        </p>
      </Typography>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ImageCardWithCaption
          image={whiteboxSpec}
          caption="ホームページの仕様書。PHP+MySQLでスクラッチ開発したが、ページ画面の記録は紛失。"
          cardWidth='60vw'
          imageHeight='300px'
        >
        </ImageCardWithCaption>
      </Container>

      <Typography
        sx={{margin: "40px 0px"}}
      >

      <Typography variant="h4" align="left">
        専門学校の卒業制作
        <a href='https://github.com/qwertyhoge/grad_coop' target='_blank' style={{verticalAlign: "middle"}}>
          <img src={githubIcon} style={{height: 32, margin: "0px 8px"}}/>
        </a>
        <Typography color='textSecondary' component={'span'} variant='caption'>
          Private
        </Typography>
      </Typography>
        <p>
          また、デザインの専門学生だった友人の卒業制作(ゲーム販売ページ制作)に協力したことも。簡易的ながら、デザイナーとエンジニアの連携を体験できた。
        </p>
      </Typography>
      <Container>
        <ImageCardWithCaption
          image={gradCoop}
          caption="自力/委託問わずWeb媒体が条件だったとのこと。知り合いの中でも技術を信頼できるとして任せてもらった。"
          cardWidth='60vw'
          imageHeight='300px'
        >
        </ImageCardWithCaption>
      </Container>

      <Divider sx={{margin: 10}}/>

      <Typography variant="h4" align="left">
        時間割管理ツール(Vue.js)
        <a href='https://github.com/qwertyhoge/timetable_vue' target='_blank' style={{verticalAlign: "middle"}}>
          <img src={githubIcon} style={{height: 32, margin: "0px 8px"}}/>
        </a>
      </Typography>
      <Typography>
        <p>
          卒業前後の時期は「自分自身にいかにモチベーションを出させるか？」という点を考え、ゲーミフィケーションを主題に自己管理用のアプリケーションをいくつか作っていた。その最中「学校のように決まった時間割があれば規則正しく生活できるのでは？」と考え、Vue.jsの勉強を兼ねて時間割を作った。
        </p>
      </Typography>
      <Container>
        <ImageCardWithCaption
          image={vueTimetable}
          caption="5分前や時間になるとチャイムが鳴る仕様。のちにWin向けアプリとして作り直した。"
          cardWidth='60vw'
          imageHeight='300px'
        >
        </ImageCardWithCaption>
      </Container>
    </WorkPage>
  )
}