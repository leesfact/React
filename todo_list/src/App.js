// App.js
import { Global } from '@emotion/react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Route, Routes } from 'react-router-dom';
import MainAside from './components/Aside/MainAside/MainAside';
import Container from './components/Container/Container';
import Todo from './pages/Todo/Todo';
import UserInfo from './pages/UserInfo/UserInfo';
import { reset } from './styles/Global/reset';



function App() {
  return (
    <>
      <Global styles={reset} />
      <Container>
        <MainAside />
        <Routes>
          <Route path="/userInfo" Component={UserInfo} />
          <Route path="/todo" Component={Todo} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
