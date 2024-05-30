import './Customer.css';
import { Paper, Table, TableHead, TableCell, TableRow, TableBody, Container} from '@mui/material';
import { useContext} from 'react';
import { DataContext } from '../../context/DataContext';
import { NavLink, useParams } from 'react-router-dom';
import { ReactComponent as BackArrow } from '../../assets/back-arrow.svg';

function Customer() {
    const { customerId } = useParams();
    const { data } = useContext(DataContext);
    const customer = data.customers.find(c => c.id === parseInt(customerId)) || { CustomerName: 'Not Found', CustomerId: 0 };

    if (customer.CustomerId !== 0) {
        return (
            <Container maxWidth="lg">
                <Paper className="customer-data">
                    <h1 className="customer-header">
                        <NavLink className="back-link" to="/"><BackArrow></BackArrow></NavLink>
                        Customer: {customer.CustomerName}
                    </h1>
                    <div className="customer-data-body">
                        <h2>Orders</h2>
                        <Table size="large">
                            <TableHead>
                                <TableRow sx={{ '& > *': { fontWeight: 'bold' }}}>
                                    <TableCell sx={{ paddingLeft: 0 }}>Order Date</TableCell>
                                    <TableCell sx={{ paddingLeft: 0 }}>Order Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.orders.filter(o => o.CustomerId === customer.id).map((order) => (
                                    <TableRow>
                                        <TableCell sx={{ paddingLeft: 0 }}>{order.Date}</TableCell>
                                        <TableCell sx={{ paddingLeft: 0 }}>{order.Total}</TableCell>
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
                <Paper className="customer-data">
                    <h1 className="customer-header">
                        <NavLink className="back-link" to="/"><BackArrow></BackArrow></NavLink>
                        Customer: {customer.CustomerName}
                    </h1>
                    <div className="customer-data-body">
                        <h2>Orders</h2>
                        <h3>No orders for this customer</h3>
                    </div>
                </Paper>
            </Container>
          );
    }
}

export default Customer;
