import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"scandiweb"
})

app.get("/products", (req, res)=>{
    const q = "SELECT * FROM products"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
})

app.post("/", (req, res)=>{
    const q = "INSERT INTO products (`SKU`, `Name`, `Price`, `Size`) VALUES (?)"
    const values = [
            req.body.SKU,
            req.body.Name,
            req.body.Price,
            req.body.Size
        ]

    db.query(q, [values], (err, data)=>{ 
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/products/:id", (req, res)=>{
    const productID = req.params.id;
    const q = "DELETE FROM products WHERE product_id = ?"

    db.query(q, [productID], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Deleted")
    })
})

app.listen(8800, ()=> {
    console.log("Connected to backend!!");
})