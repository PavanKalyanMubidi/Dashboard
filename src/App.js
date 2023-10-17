import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import NotFound from './Components/NotFound';
import TeamMatches from './Components/TeamMatches';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-matches/:id" element={<TeamMatches />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
