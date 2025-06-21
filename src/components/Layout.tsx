import React from 'react';
import Divider from '@mui/material/Divider';
import { AppBar, Toolbar, Tabs, Tab} from '@mui/material';
import {Link, useLocation, useOutlet} from 'react-router-dom';
import './Layout.css';
import { AnimatePresence } from 'framer-motion';
import FadeWrapper from './FadeWrapper';


const Layout: React.FC = () => {
  const location = useLocation();
  const outlet = useOutlet();

  const getTabValue = () => {
    if(location.pathname.startsWith('/works')) return '/works';

    return location.pathname;
  };

  return (
    <div className="app-background">
      <AppBar position="fixed" className="header" style={{
        width: "100vw",
        zIndex: 5,
        backgroundColor: "#ffffffcc"
      }}>
        <Toolbar>
          <Tabs
            value={getTabValue()}
            textColor="primary"
            indicatorColor="secondary"
            centered
            sx={{flexGrow: 1}}
          >
            <Tab label="Home" value="/" component={Link} to="/"/>
            <Tab label="About" value="/about" component={Link} to="/about"/>
            <Tab label="Works" value="/works" component={Link} to="/works"/>
          </Tabs>
        </Toolbar>
      </AppBar>
      <Divider></Divider>

    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo({top: 0})
      }}
    >
      <FadeWrapper key={location.pathname}>
        {outlet}
      </FadeWrapper>
    </AnimatePresence>

      <div className="footer">
        <div style={{
          height: "300px",
          width: "100%",
          backgroundColor: "#eee",
          marginTop: "80px",
        }}>
        <Divider></Divider>
        </div>
      </div>
    </div>
  );
};

export default Layout;