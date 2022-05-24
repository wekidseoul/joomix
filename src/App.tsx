import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Comments from './pages/Comments';
import NotFound from './pages/NotFound';
import ContextProvider from './context';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
