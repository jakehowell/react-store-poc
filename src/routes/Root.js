import './Root.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { DataContext } from '../context/DataContext';
import { Container } from '@mui/material';
import { getReceipts } from '../services/ReceiptsService';


function Root() {
  const [data, setData] = useState({customers: [], orders: [], items: []});

  useEffect(() => {
    getReceipts().then((data) => {
      setData(data);
    });
  },[]);

  const context = {
    data,
    setData
  }

  return (
    <div className="Root">
      <div className="root-header">
        <h1>General Store</h1>
      </div>
      <main className="root-main">
        <DataContext.Provider value={context}>
          <Container className="canvas" maxWidth="xl">
            <Outlet />
          </Container>
        </DataContext.Provider>
      </main>

    </div>
  );
}

export default Root;
