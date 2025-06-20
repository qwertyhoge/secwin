import { Typography, Container } from "@mui/material";
import Divider from '@mui/material/Divider';
import aboutBackground from "../assets/about_bg.jpg"
import PageWithHero from "../components/PageWithHero";

export default function About() {
  return(
    <PageWithHero
      title="About"
      bg={aboutBackground}
    >
      <Typography
        variant="h2"
        align="left"
        sx={{
          marginTop: 2
        }}
      >
        Profile
      </Typography>
      <Divider></Divider>
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        sx={{
          marginTop: 2
        }}
      >
        後藤 滉貴
      </Typography>
      <Typography align="left">
        <p>
          1998年に千葉県君津市に生まれ、隣市の木更津市で育った。今年2025年の8月で27歳を迎えることになる。
        </p>
        <p>
          両親ともにゲーマー、システムエンジニアで、家庭では電子機器にずっと触れて育ってきた。タイピング速度ならその辺の人が何百人かかってきても負ける気はしない。
        </p>
        <p>
          そんなPC、ゲーム好きが高じて木更津工業高等専門学校に入学。入学前から「どうやって機能を実現しているんだろう？」という知的好奇心をモチベーションにプログラミングを学び、在学中にもWebフロントエンドを中心に様々な知識を独学で身に着け、仲間内の遊びなどに役立ててきた。
        </p>
        <p>
          その知識が下地となって本科4年生で基本情報技術者試験に、卒業から2年後に応用情報技術者試験に、ともに一発合格している。
        </p>
      </Typography>

      <Typography
        variant="h2"
        align="left"
        sx={{
          marginTop: 2
        }}
      >
        Strength
      </Typography>
      <Divider></Divider>
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        sx={{
          marginTop: 2
        }}
        >
        圧倒的適応力
      </Typography>
      <Typography align="left">
        <p>
          「とりあえずこれで完遂できる」という段階に達するまでがものすごく早い。実際に手を動かして「これは上手くいくか？　これではダメか？」と実験を絶えず回すので「なぜ上手くいくのか？」という原理、全体像の分析が早い。これは趣味にも言えることで、友達と同時に始めたゲームでは大抵首位を取れる。
        </p>
        <p>
          これを裏打ちする分析力の高さは日頃からの構造化、言語化によるものと思われる。悩み事があれば主観を抜け出して背景にある問題を捉え、メタ認知によって精神の安定を図る癖がある。
        </p>
        <p>
          反面、一つの解決法を学ぶとそれにこだわって新規の金銭面や学習面でのコストを避ける傾向にあったり、客観視に頼って主観的な意志や勢いを失いがちな傾向にあったりも。後述する挑戦心を持ち始めたことで、これらはしだいに改善していくのではないかと期待している。  
        </p>
      </Typography>

      <Typography
        variant="h2"
        align="left"
        sx={{
          marginTop: 2
        }}
      >
        Career
      </Typography>
      <Divider></Divider>
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        sx={{
          marginTop: 2
        }}
        >
        再起。自分を誇り、存在を世に示す
      </Typography>
      <Typography align="left">
        <p>
          2018年。在学中には自分のキャリアに全く当事者感が持てず、なんとなく友達と同じ大学の編入試験を受け、格上だというのにろくに対策もせず不合格。それからなんとなく就活をし、自信と意志のなさを前面に出して面接に挑んでは「本当にうちに来たいんですか？」と聞かれて黙ってしまい、どこにも行けず。
        </p>
        <p>
          2019年3月にそのまま卒業。次第に「自分という負債を会社に押し付けたくない」と考えるようになり、それでもアルバイトならと2020年2月から塾講師に。教えるのは好きなので、せめてこれなら適性を活かせるだろうと考えての選択だった。
        </p>
        <p>
          そうして「このままでいいや」と惰性のまま生活し、5年半近くが経過。今年6月初め頃にプライベートでトラブルがあり、「自分はあまりにも選択の責任を放棄して生き続けてきたのでは？」とようやく気づく。
        </p>
        <p>
          自分の感性や直感に従って生き、その言動に責任を持ち、確固たる『自分』を確立する。またためらわず『これが自分だ』と宣言して現実にする。そういう生き方に人生を変えたいと決意した。
        </p>
        <p>
          もとより、技術力や戦力面で期待を下回るつもりはなかった。5年のブランクは痛手だが、それでも大きく後れを取るつもりはない。「やります！」と宣言して、どんなに辛くてもやり遂げる。そういう意志を見せつけていきたい。
        </p>
      </Typography>
    </PageWithHero>
  );
}