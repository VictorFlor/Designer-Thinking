import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import PresentationPage from './pages/ApplicationPage';
import ResolvedDashboardPage from './pages/ResolvedDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/presentation" element={<PresentationPage />} />
        <Route path="/resolved" element={<ResolvedDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;