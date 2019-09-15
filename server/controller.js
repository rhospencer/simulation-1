module.exports = {
    getItems: (req, res) => {
        const db = req.app.get('db')
        // console.log()
        db.get_inventory().then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addItem: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        db.create_product([name, price, img]).then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteItem: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product([id]).then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    editItem: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, img} = req.body
        db.update_product([id, name, price, img]).then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    getItem: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_item([id]).then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}