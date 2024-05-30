import './Orders.css';
import React, { useContext } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Card, Paper } from '@mui/material';
import { DataContext } from '../../context/DataContext';
import CollapsibleRow from '../../components/CollapsibleRow/CollapsibleRow';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';


function Orders() {
  const {data} = useContext(DataContext);
  const orderHeaders = {
    'Date': 'Order Date',
    'CustomerName': 'Customer Name',
    'Total': 'Order Total'
  };

  const colors = [
    '#F94144',
    '#F8961E',
    '#F9C74F',
    '#90BE6D',
    '#43AA8B',
    '#577590',
  ];
  const pieData = [];

  data.customers.forEach((customer, index) => {
    const chartData = {
      name: customer.CustomerName,
      value: 0,
      color: colors[index]
    };
    customer.Orders.forEach(id => {
      const order = data.orders.find(o => o.OrderId === id);
      chartData.value += parseFloat(order.Total.replace('$', ''));
    })
    pieData.push(chartData);
  });

  function renderHeaders(orders) {
    const headers = [];
    for (const key in orderHeaders) {
      headers.push(<TableCell>{orderHeaders[key]}</TableCell>);
    }
    return headers;
  }

  function renderCustomLabel(props) {
    const radian = Math.PI / 180;
    const radius = props.innerRadius + (props.outerRadius - props.innerRadius) * 0.6;
    const x = props.cx + radius * Math.cos(-props.midAngle * radian);
    const y = props.cy + radius * Math.sin(-props.midAngle * radian);
    console.log(x,y);
    return (
      <text x={x} y={y} fill={'#fff'} textAnchor={'middle'} verticalAnchor={'middle'} dominantBaseline="central">
        ${props.value.toFixed(2)}
      </text>
    )
  }

  function renderRows(orders) {
    const rows = [];
    for (const order of orders) {
      const cells = [];
      for (const key in orderHeaders) {
        if (key === 'CustomerName') {
          cells.push(<TableCell><a className="Customer-Link" href={`/customer/${order.CustomerId}`}>{order[key]}</a></TableCell>);
        } else {
          cells.push(<TableCell>{order[key]}</TableCell>);
        }
      }

      let collapsedContent = (
        <React.Fragment>
          <h3>Order Summary</h3>
          <Table size="small">
            <TableHead className="order-summary-header">
              <TableRow sx={{ '& > *': { fontWeight: 'bold' }}}>
                <TableCell sx={{ paddingLeft: 0 }}>Item</TableCell>
                <TableCell sx={{ paddingLeft: 0 }}>Price</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.Items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ paddingLeft: 0 }}><a className="Item-Link" href={`/item/${item.Item}`}>{item.Item}</a></TableCell>
                  <TableCell sx={{ paddingLeft: 0 }}>{item.ItemPrice}</TableCell>
                  <TableCell>{item.Quantity}</TableCell>
                </TableRow>
              ))}
              <TableRow key={0}>
                <TableCell sx={{ backgroundColor: 'black', fontWeight: 'bold', color: 'white' }} colSpan={2} align="right">Total</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{order.Total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </React.Fragment>
      );

      rows.push(<CollapsibleRow cells={cells} collapsedContent={collapsedContent} uniqueKey={order.OrderId} context={data} />);
    }
    return rows;
  }

  return (
    <div className="order-interface">
      <Paper className="order-data">
        <h1 className="order-data-header">Orders</h1>
        <TableContainer component={Card}>
          <Table className="order-grid">
            <TableHead className="order-grid-header">
              <TableRow sx={{ '& > *': { fontWeight: 'bold' }}}>
                <TableCell></TableCell>
                {renderHeaders(data.orders)}
              </TableRow>
            </TableHead>
            <TableBody>
              {renderRows(data.orders)}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className="charts">
        <h1>Order Totals by Customer</h1>
        <ResponsiveContainer>
          <PieChart>
              <Pie
                dataKey="value"
                data={pieData}
                legendType="circle"
                fill="#8884d8"
                label={renderCustomLabel}
                labelLine={false}
                >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}



export default Orders;
