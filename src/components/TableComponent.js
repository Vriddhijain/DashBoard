import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

const TableContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 500px;
  width: 100%;
`;

const TableComponent = ({ rows, columns }) => {
  return (
    <TableContainer>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </TableContainer>
  );
};

export default TableComponent;
