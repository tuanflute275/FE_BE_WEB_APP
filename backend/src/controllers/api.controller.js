import pool from '../config/connectDB'

let getAllProduct = async (req, res) => {
    const [rows, field] = await pool.execute('select * from card')
    var page = parseInt(req.query.page) || 1
    var perPage = 8
    var start = (page - 1) * perPage
    var end = page * perPage
    return res.status(200).json({
        message: "select success",
        data:rows.slice(start, end)
    })
}

let createNewProduct = async (req, res) => {
    const { image,title, price, salePrice } = req.body
    if (!image, !title, !price, !salePrice) {
        return res.status(200).json({
            message: "missing require params"
        })
    }
    await pool.execute('insert into card(image,title, price, salePrice) values (?, ?, ?, ?)', [image,title, price, salePrice])
    return res.status(200).json({
        message: "create card success",
    })
}

let updateProduct = async (req, res) => {
    const id = req.params.id
    const { image,title, price, salePrice } = req.body
    if (!image, !title, !price, !salePrice) {
        return res.status(200).json({
            message: "missing require params"
        })
    }
    await pool.execute('update card set image = ?, title = ?, price = ?, salePrice = ? where id = ? ', [image, title, price, salePrice, id])
    return res.status(200).json({
        message: "update card success"
    })
}

let deleteProduct = async (req, res) => {
    const cardId = req.params.id
    if (!cardId) {
        return res.status(200).json({
            message: "missing require params"
        })
    }

    await pool.execute('delete from card where id = ?', [cardId])
    return res.status(200).json({
        message: "delete card success"
    })
}

module.exports = {
    getAllProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
}