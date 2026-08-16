import { HashRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import PresentationPage from './pages/ApplicationPage';
import ResolvedDashboardPage from './pages/ResolvedDashboardPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/presentation" element={<PresentationPage />} />
        <Route path="/resolved" element={<ResolvedDashboardPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;