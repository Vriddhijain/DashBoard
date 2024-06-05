import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #1e1e2f;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

export const SidebarItem = styled.div`
  padding: 10px 15px;
  margin: 10px 0;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Navbar = styled.div`
  width: calc(100% - 250px);
  background-color: #fff;
  color: #333;
  padding: 15px 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f0f2f5;
`;
