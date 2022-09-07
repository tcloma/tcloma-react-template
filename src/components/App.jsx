import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';
import Layout from './Layout';
import '../styles/App.scss';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
