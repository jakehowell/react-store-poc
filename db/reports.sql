-- Get repeat customers
WITH orders AS (
	SELECT customerId,COUNT(*) orders FROM dbo.Orders
	GROUP BY customerId HAVING COUNT(*) > 1
)
SELECT id,name,orders FROM dbo.Customers INNER JOIN orders ON orders.customerId = dbo.Customers.id
ORDER BY dbo.Customers.name;

-- Get total of all orders by customer
WITH orders AS (
	SELECT customerId,SUM(total) totals FROM dbo.Orders
	GROUP BY customerId
)
SELECT name,totals FROM dbo.Customers INNER JOIN orders ON orders.customerId = dbo.Customers.id
ORDER BY totals;

-- See how many distict customers have visited
SELECT COUNT(*) [Total Customers] FROM dbo.Customers;

-- See which items have been purchased the most
WITH orderedItems AS (
	SELECT itemId,SUM(quantity) totalOrdered FROM dbo.OrderItems
	GROUP BY itemId
)
SELECT name,totalOrdered FROM dbo.Items INNER JOIN orderedItems ON orderedItems.itemId = dbo.Items.id
ORDER BY totalOrdered DESC;
