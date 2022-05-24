import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GenerateAvatar from './pages/GenerateAvatar';
import Comments from './pages/Comments';
import NotFound from './pages/NotFound';
import ContextProvider from './context';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<GenerateAvatar />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
