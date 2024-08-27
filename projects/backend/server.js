const express = require("express");

const cors = require("cors")
const productData = require("./MOCK_DATA.json")

const app = express();
const PORT = "4800";

//Parse JSON data
app.use(cors());

// Define a route to get the list of items
app.get("/api/product-data", (req,res)=>{
    return res.json(productData);
})

app.get("/api/product-data/:id", (req, res)=>{
    const id = Number(req.params.id);
    const product = productData.find((product) => product.id === id);
    return res.json(product);
})

//Start the server
app.listen(PORT , () => {
    console.log(`Server is listining on port: ${PORT}`)
});