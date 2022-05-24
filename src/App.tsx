import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Comments from './pages/Comments';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="comments" element={<Comments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
