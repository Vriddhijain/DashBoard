import React from 'react';
import styled from 'styled-components';
import ChartComponent from '../components/ChartComponent';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Widget = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Widget>
        <h2>Sales Overview</h2>
        <ChartComponent />
      </Widget>
      <Widget>
        <h2>Performance Metrics</h2>
        {/* Add other components here */}
      </Widget>
    </DashboardContainer>
  );
};

export default Dashboard;
