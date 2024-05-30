
const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
}));

app.get('/content/receipts.json', (req, res) => {
    res.send([
        {
            "OrderId": 1,
            "CustomerId": 1,
            "CustomerName": "Elizabeth",
            "Total": "$30.00",
            "Date": "2021-02-01 08:30:00.000",
            "Items": [
                {
                    "Item": "Candle",
                    "ItemPrice": "$3.00",
                    "Quantity": "3"
                },
                {
                    "Item": "Book",
                    "ItemPrice": "$15.00",
                    "Quantity": "1"
                },
                {
                    "Item": "Pen",
                    "ItemPrice": "$0.75",
                    "Quantity": "1"
                },
                {
                    "Item": "Paper",
                    "ItemPrice": "$5.25",
                    "Quantity": "1"
                }
            ]
        },
        {
            "OrderId": 2,
            "CustomerId": 2,
            "CustomerName": "Alexander",
            "Total": "$52.50",
            "Date": "2021-02-02 10:00:00.000",
            "Items": [
                {
                    "Item": "Book",
                    "ItemPrice": "$15.00",
                    "Quantity": "1"
                },
                {
                    "Item": "Jar",
                    "ItemPrice": "$12.50",
                    "Quantity": "3"
                }
            ]
        },
        {
            "OrderId": 3,
            "CustomerId": 1,
            "CustomerName": "Elizabeth",
            "Total": "$6.00",
            "Date": "2021-02-02 12:46:00.000",
            "Items": [
                {
                    "Item": "Pen",
                    "ItemPrice": "$0.75",
                    "Quantity": "1"
                },
                {
                    "Item": "Paper",
                    "ItemPrice": "$5.25",
                    "Quantity": "1"
                }
            ]
        },
        {
            "OrderId": 4,
            "CustomerId": 3,
            "CustomerName": "Emira",
            "Total": "$30.50",
            "Date": "2021-02-03 15:25:00.000",
            "Items": [
                {
                    "Item": "Candle",
                    "ItemPrice": "$3.00",
                    "Quantity": "1"
                },
                {
                    "Item": "Book",
                    "ItemPrice": "$15.00",
                    "Quantity": "1"
                },
                {
                    "Item": "Jar",
                    "ItemPrice": "$12.50",
                    "Quantity": "1"
                }
            ]
        },
        {
            "OrderId": 5,
            "CustomerId": 4,
            "CustomerName": "LJ",
            "Total": "$36.00",
            "Date": "2021-02-04 18:50:00.000",
            "Items": [
                {
                    "Item": "Pen",
                    "ItemPrice": "$0.75",
                    "Quantity": "1"
                },
                {
                    "Item": "Book",
                    "ItemPrice": "$15.00",
                    "Quantity": "2"
                },
                {
                    "Item": "Paper",
                    "ItemPrice": "$5.25",
                    "Quantity": "1"
                }
            ]
        },
        {
            "OrderId": 6,
            "CustomerId": 5,
            "CustomerName": "Armand",
            "Total": "$52.50",
            "Date": "2021-02-04 08:05:00.000",
            "Items": [
                {
                    "Item": "Book",
                    "ItemPrice": "$15.00",
                    "Quantity": "1"
                },
                {
                    "Item": "Jar",
                    "ItemPrice": "$12.50",
                    "Quantity": "3"
                }
            ]
        },
        {
            "OrderId": 7,
            "CustomerId": 6,
            "CustomerName": "Elizabeth",
            "Total": "$30.50",
            "Date": "2021-02-06 17:30:00.000",
            "Items": [
                {
                    "Item": "Movie",
                    "ItemPrice": "$18.00",
                    "Quantity": "1"
                },
                {
                    "Item": "Jar",
                    "ItemPrice": "$12.50",
                    "Quantity": "1"
                }
            ]
        },
        {
            "OrderId": 8,
            "CustomerId": 3,
            "CustomerName": "Emira",
            "Total": "$18",
            "Date": "2021-02-08 16:30:00.000",
            "Items": [
                {
                    "Item": "Movie",
                    "ItemPrice": "$18.00",
                    "Quantity": "1"
                }
            ]
        }
    ])
});

app.listen(process.env.PORT || 3001);
console.log('Server running at http://localhost:3001/');
