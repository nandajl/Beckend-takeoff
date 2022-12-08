const wishlistService = require("../../../services/wishlistService")

module.exports = {
    async handleCreateWishlist(req, res){
        try {
            const body = req.body
            console.log(body)
            const wishlist = await wishlistService.create(body)
            res.status(201).json({
                status: "OK",
                data: wishlist
            })
        } catch (err) {
            res.status(400).json({
                status: "FAIL",
                message: err.message
            })
        }
    },

    async handleUpdateWishlist(req, res){
        try {
            const body = req.body
            const id = req.params.id
            const wishlist = await wishlistService.update(id, body)
            res.status(201).json({
                status: "OK",
                data: body
            })
        } catch (err) {
            res.status(400).json({
                status: "FAIL",
                message: err.message
            })
        }
    },

    async handleListWishlist(req, res){
        try {
            const { data, count } = await wishlistService.getAllWishlist()
            res.status(201).json({
                status: "OK",
                data: data,
                total: count
            })
        } catch (err) {
            res.status(400).json({
                status: "FAIL",
                message: err.message
            })
        }
    },

    async handleGetWishlist(req, res){
        try {
            const id = req.params.id
            const wishlist = await wishlistService.getWishlist(id)
            res.status(201).json({
                status: "OK",
                data: wishlist
            })
        } catch (err) {
            res.status(400).json({
                status: "FAIL",
                message: err.message
            })
        }
    },

    async handleDeleteWishlist(req, res){
        try {
            const id = req.params.id
            const wishlist = await wishlistService.delete(id)
            res.status(200).json({
                status: "OK",
                message: "Wishlist successfully deleted"
            })
        } catch (err) {
            res.status(400).json({
                status: "FAIL",
                message: err.message
            })
        }
    }
}