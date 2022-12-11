const { Wishlist } = require("../models")

module.exports = {
    create(body){
        return Wishlist.create(body)
    },

    update(id, body){
        return Wishlist.update(body, {
            where: {
                id
            }
        })
    },

    getAllWishlists(){
        return Wishlist.findAll({
            include: [ { all: true, nested: true } ]
        })
    },

    getWishlist(id){
        return Wishlist.findByPk(id)
    },

    delete(id){
        return Wishlist.destroy({
            where : {
                id
            }
        })
    },

    getTotalCount(){
        return Wishlist.count()
    }
}