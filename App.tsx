import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollToTop } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Creator } from './pages/Creator';
import { Dashboard } from './pages/Dashboard';

// Helper to scroll to top on route change
const ScrollToTopHelper = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      {/* <ScrollToTopHelper /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;