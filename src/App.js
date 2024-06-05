import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Sidebar, SidebarItem, Content } from './components/Layout';
import ThemeSwitcher from './components/ThemeSwitcher';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Navbar from './components/Navbar';

// Export statements
export const useThemeUpdate = () => {
  // Your theme update logic here
};

const App = () => {
  const toggleTheme = useThemeUpdate(); // Using useThemeUpdate here to avoid unused export warning

  return (
    <>
      <GlobalStyles />
      <Router>
        <Container>
          <Sidebar>
            <SidebarItem as={Link} to="/">Dashboard</SidebarItem>
            <SidebarItem as={Link} to="/calendar">Calendar</SidebarItem>
            <SidebarItem as={Link} to="/kanban">Kanban</SidebarItem>
          </Sidebar>
          <Content>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </Content>
        </Container>
      </Router>
      <ThemeSwitcher toggleTheme={toggleTheme} />
    </>
  );
};

export default App;
