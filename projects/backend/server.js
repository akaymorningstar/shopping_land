const express = require("express");
const bodyParser = require('body-parser');

const cors = require("cors")
const productData = require("./MOCK_DATA.json")
const cartData = require("./CART_MOCK_DATA.json")
const path = require('path');
const filePath = path.join(__dirname, './CART_MOCK_DATA.json');

const app = express();
const PORT = "4800";

// To push body in JSON mock data file
const fs = require("fs");

//Parse JSON data

//Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

// Define a route to get the list of items


// API to get products list
app.get("/api/product-data", (req,res)=>{
    return res.json(productData);
})

//API to get product details based in clicked Item ID
app.get("/api/product-data/:id", (req, res)=>{
    const id = Number(req.params.id);
    const product = productData.find((product) => product.id === id);
    return res.json(product);
})


// API to insert data in my cart
// Utility function to read and write the file
const readFile = (callback) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File does not exist, initialize with empty array
                callback(null, []);
            } else {
                callback(err);
            }
        } else {
            try {
                callback(null, JSON.parse(data));
            } catch (parseError) {
                callback(parseError);
            }
        }
    });
};

const writeFile = (data, callback) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', callback);
};

app.post("/api/cart/product", (req, res) => {
    const body = req.body;
    const productId = body.id;
    readFile((err, cartData) => {
        if (err) {
            return res.status(500).json({ status: "Error", message: err.message });
        }
        // Find the product in the cartData
        const existingProduct = cartData.find(item => item.id === productId);
        const numericPrice = parseFloat(body.product_price.replace(/[^0-9.-]+/g,""));
        if (existingProduct) {
            // Update the quantity of the existing product
            existingProduct.product_quantity = Number(existingProduct.product_quantity || 0) + Number(body.product_quantity || 1);
            existingProduct.product_total_amount = Number(numericPrice) * Number(existingProduct.product_quantity);
        } else {
            // Add the new product
            cartData.push({ ...body, cart_id: cartData.length + 1, product_quantity: Number(body.product_quantity || 1), product_total_amount: Number(numericPrice) * Number(body.product_quantity)});
        }
        writeFile(cartData, (err) => {
            if (err) {
                return res.status(500).json({ status: "Error", message: err.message });
            }
            res.json({ status: "Success" });
        });
    });
});

//API to fetch data from my-cart database to show my-cart products

app.get("/api/cart/products", (req,res)=>{
    return res.json(cartData);
})


//API to checkout
app.post("/api/cart/place-order", (req, res) => {
    const orderData = req.body;
    console.log('Order received:', orderData);
    res.status(200).send({ message: 'Order placed successfully!' });
    res.status(200).json({ status: 'success', message: 'Order placed successfully!' });
});


//Start the server
app.listen(PORT , () => {
    console.log(`Server is listining on port: ${PORT}`)
});