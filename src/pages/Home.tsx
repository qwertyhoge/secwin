import Divider from '@mui/material/Divider';
import {Typography,  ListItemButton, Box} from '@mui/material';
import homeBackground from "../assets/home_bg.jpg"
import wantedlyIcon from "../assets/wantedly_logo.svg"
import githubIcon from "../assets/github-mark.svg"
import atcoderIcon from "../assets/atcoder_logo.png"
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PageWithHero from '../components/PageWithHero';


export default function Home() {
  return (
    <PageWithHero
      title="Second Wind"
      bg={homeBackground}
    >
      <Typography variant="h2" align="left">
        Portfolio
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
        このページについて
        <a href='https://github.com/qwertyhoge/secwin' target='_blank' style={{verticalAlign: "middle"}}>
          <img src={githubIcon} style={{height: 32, margin: "0px 8px"}}/>
        </a>
      </Typography>
      <Typography align="left">
        <p>
          2025年6月から(6年越しに)就職活動を再開するにあたって、新しく書いたポートフォリオ。数年のブランクなど物の数ではないと証明するためにも、勉強中だったReact+TypeScriptの環境で作成している。ChatGPTを活用しつつ、不得手としていたデザインやレイアウトの勉強も兼ねてスピードと学びを両立しながら制作。制作期間は四日。
        </p>
      </Typography>
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        sx={{
          marginTop: 2
        }}
        >
        各種アカウント
      </Typography>
      <Typography align="left">
        <List
          sx={{
            width: 'fit-content'
          }}
        >
          <ListItemButton href='https://www.wantedly.com/id/kouki_gotou_l' target='_blank'>
            <ListItemIcon>
              <img src={wantedlyIcon} style={{height: 32}}/>
            </ListItemIcon>
            <ListItemText primary="Wantedly"/>
          </ListItemButton>
          <ListItemButton href='https://github.com/qwertyhoge' target='_blank'>
            <ListItemIcon>
              <img src={githubIcon} style={{height: 32}}/>
            </ListItemIcon>
            <ListItemText primary="Github" secondary="当ページ掲載物の一部はPrivate設定"/>
          </ListItemButton>
          <ListItemButton href='https://atcoder.jp/users/foobarhogefuga' target='_blank'>
            <ListItemIcon>
              <img src={atcoderIcon} style={{height: 32}}/>
            </ListItemIcon>
            <ListItemText primary="Atcoder" secondary="レート: 869/975"/>
          </ListItemButton>
        </List>
      </Typography>
      
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        sx={{
          marginTop: 2
        }}
        >
        実績等
      </Typography>
      <Box>
        <List>
          <ListItemText primary="基本情報技術者試験 合格" secondary="2017/5"/>
          <ListItemText primary="TOEIC L&R 640点" secondary="2018/10"/>
          <ListItemText primary="普通自動車第一種運転免許(AT限定)" secondary="2019/6"/>
          <ListItemText primary="応用情報技術者試験 合格" secondary="2022/4"/>
        </List>
      </Box>
    </PageWithHero>
  )
}