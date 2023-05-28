import pool from '../config/connectDB'


let getHomePage = async (req, res)=>{
    const [rows, fields] = await pool.execute('select * from card')

    // phân trang
    var page = parseInt(req.query.page) || 1
    var perPage = 8
    var start = (page - 1) * perPage
    var end = page * perPage
    return res.render('index.ejs', { data: rows.slice(start, end) })
}

let createNewProduct = (req, res)=>{
    return res.render('createNewProduct.ejs');
}

module.exports={
    getHomePage:getHomePage,
    createNewProduct:createNewProduct
}