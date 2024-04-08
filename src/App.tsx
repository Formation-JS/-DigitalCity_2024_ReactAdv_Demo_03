import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/Header';

function App() {

  return (
    <>
      <Header />

      <main>
        <h1>Demo 02 - Routing</h1>
        <Outlet />
      </main>

      <footer>
        <span>Footer</span>
      </footer>
    </>
  );
}

export default App;
