import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {Typography, Button} from '@mui/material';
import {motion} from 'framer-motion';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography variant="h1" gutterBottom>
        Vite + React
      </Typography>
      <div className="card">
        <Button variant="contained" color="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </motion.div>
  );
}

export default App;
