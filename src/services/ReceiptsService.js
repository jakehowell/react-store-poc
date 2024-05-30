const formatData = (data) => {
  const output = {
    customers: [],
    orders: [],
    items: []
  };

  for (const order of data) {
    const d = new Date(order.Date);
    order.Date = d.toLocaleString('en-us', {dateStyle: 'medium', timeStyle: 'short'});
    order.Total = `$${parseFloat(order.Total.replace('$', '')).toFixed(2)}`;
    const customer = {};
    order.id = order.OrderId;
    order.Items.forEach(item => {
      const itemData = {};
      itemData.Item = item.Item;
      itemData.ItemPrice = item.ItemPrice;

      if (output.items.filter(i => i.Item === item.Item).length === 0) {
        output.items.push(itemData);
      }
    });

    const existingCustomer = output.customers.find(c => c.id === order.CustomerId);

    if (!existingCustomer) {
      customer.id = order.CustomerId;
      customer.CustomerName = order.CustomerName;
      customer.Orders = [order.OrderId];
      output.customers.push(customer);
    } else {
      existingCustomer.Orders.push(order.OrderId);
    }

    output.orders.push(order);
  }

  output.items.forEach((item, index) => {
    item.id = index + 1;
  });

  console.log(output);

  return output;
}

export async function getReceipts() {
  return await fetch('http://localhost:3001/content/receipts.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then((data) => {
    return formatData(data);
  });
}
