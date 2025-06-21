import Divider from '@mui/material/Divider';
import {Typography,  Container} from '@mui/material';
import ImageCardWithCaption from "../components/ImageCardWithCaption";
import WorkPage from './WorkPage';
import githubIcon from "../assets/github-mark.svg"
import slackDicebot from "../assets/slack_dicebot.png";
import qtTimetableMenu from "../assets/qt_timetable_menu.png";
import qtTimetableEdit from "../assets/qt_timetable_edit.png";
import arknightsRecommender from '../assets/arknights_recommender.png';


export default function ToolsDev() {
  return (
    <WorkPage
      title="ほか制作ツール"
      thumbnail={qtTimetableMenu}
    >
      <Typography variant="h4" align="left">
        Slackダイスボット
        <a href='https://github.com/qwertyhoge/sw2-damage-calc-bot' target='_blank' style={{verticalAlign: "middle"}}>
          <img src={githubIcon} style={{height: 32, margin: "0px 8px"}}/>
        </a>
      </Typography>
      <Typography>
        <p>
          ボードゲーム仲間とTRPG(SW2.0)をSlack上で遊んでいたが、ダメージ計算がものすごく面倒だった。サイコロを振り、攻撃力と出目の表からダメージを出し、さらに出目が高ければもう一度振り直してそのダメージを加算することを繰り返し、最終的に補正を乗せて最終ダメージ計算。
        </p>
        <p>
          毎回時間がかかるので、せっかくSlack上でやっているのだからBotにやらせようと考案し開発。サーバ上で常に使ってもらう程度には愛用してもらえた。
        </p>
      </Typography>
      <Container 
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ImageCardWithCaption 
          image={slackDicebot}
          caption='Node.jsで開発した、Slack上で動くダイスボット。文字列をパースする練習にも。'
          cardWidth='60vw'
          imageHeight='300px'
        >
        </ImageCardWithCaption>
      </Container>
      
      <Divider sx={{margin: 10}}/>

      <Typography variant="h4" align="left">
        時間割管理ツール(Qt)
        <a href='https://github.com/qwertyhoge/timetable_qt' target='_blank' style={{verticalAlign: "middle"}}>
          <img src={githubIcon} style={{height: 32, margin: "0px 8px"}}/>
        </a>
      </Typography>
      <Typography>
        <p>
          卒業前後の時期、自己管理のためのツールを作ることに興味があり、Vue.jsで一度時間割を作ったことがあった。これをWindows向けアプリケーションとして動かし、常駐させたいと思ったのでQtで作り直すことに。
        </p>
        <p>
          「キャラクターが時間割の管理を手伝ってくれる」というコンセプトで作り始めたが、インタラクティブ性を突き詰められず頓挫。
        </p>
        <p>
          なお開発画面右上のキャラクターは、キャラクター画像作成サイトPicrew上の<a href='https://picrew.me/ja/image_maker/3154' target='_blank'>したののキャラメーカー</a>から作成している。
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
          image={qtTimetableMenu}
          caption='キャラクターをクリックするとメニューが開き、予定の追加ができる。'
          cardWidth='60vw'
          imageHeight='200px'
        >
        </ImageCardWithCaption>
        <ImageCardWithCaption 
          image={qtTimetableEdit}
          caption='予定クリックから削除や編集が可能。'
          cardWidth='60vw'
          imageHeight='200px'
        >
        </ImageCardWithCaption>
      </Container>
      
      <Divider sx={{margin: 10}}/>

      <Typography variant="h4" align="left">
        募集属性決定ツール
        <a href='https://github.com/qwertyhoge/an_offer_recommender' target='_blank' style={{verticalAlign: "middle"}}>
          <img src={githubIcon} style={{height: 32, margin: "0px 8px"}}/>
        </a>
      </Typography>
      <Typography>
        <p>
          アークナイツというスマートフォン向けゲームには「いくつかの属性を組み合わせ、該当するキャラクターを入手する」という機能があるが、どんな属性を組み合わせればよい結果になるか毎回調べるのが面倒だった。
        </p>
        <p>
          そこで画面をスクリーンショットで取得し、画像認識によってボタンを認識。データベースを利用して適切な組み合わせを導き出すツールをPythonで開発した。
        </p>
      </Typography>
      <Container 
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ImageCardWithCaption 
          image={arknightsRecommender}
          caption='ボタン認識。初期は文字認識を試みていたが画像認識に変更。この後コンソールで★4以上確定の組み合わせがあれば表示する。'
          cardWidth='60vw'
          imageHeight='300px'
        >
        </ImageCardWithCaption>
      </Container>

    </WorkPage>
  );
}