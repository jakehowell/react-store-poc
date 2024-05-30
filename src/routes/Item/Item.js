import './Item.css';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Container } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { ReactComponent as BackArrow } from '../../assets/back-arrow.svg';

function Item() {
  const { itemId } = useParams();
  const { data } = useContext(DataContext);
  const itemsOrdered = [];
  data.orders.forEach(order => order.Items.forEach(i => {
    if (i.Item === itemId) {
      itemsOrdered.push({
        Date: order.Date,
        Quantity: i.Quantity
      });
    }
  }));

  if (itemsOrdered.length > 0){
    return (
      <Container maxWidth="lg">
        <Paper className="item-data">
            <h1 className="item-header">
            <NavLink className="back-link" to="/"><BackArrow></BackArrow></NavLink>
              Item: {itemId}
            </h1>
            <div className="item-data-body">
                <h2>Item Orders</h2>
                <Table size="large">
                    <TableHead>
                        <TableRow sx={{ '& > *': { fontWeight: 'bold' }}}>
                            <TableCell sx={{ paddingLeft: 0 }}>Order Date</TableCell>
                            <TableCell sx={{ paddingLeft: 0 }}>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {itemsOrdered.map((item) => (
                            <TableRow>
                                <TableCell sx={{ paddingLeft: 0 }}>{item.Date}</TableCell>
                                <TableCell sx={{ paddingLeft: 0 }}>{item.Quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Paper>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg">
        <Paper className="item-data">
            <h1 className="item-header">
            <NavLink className="back-link" to="/"><BackArrow></BackArrow></NavLink>
              Item: {itemId}
            </h1>
            <div className="item-data-body">
                <h2>Item Orders</h2>
                <h3>No orders for this item</h3>
            </div>
        </Paper>
      </Container>
    )
  }


}

export default Item;
