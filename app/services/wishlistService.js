const wishlistRepository = require("../repositories/wishlistRepository")

module.exports = {
    create(body){
        return wishlistRepository.create(body)
    },

    update(id, body){
        return wishlistRepository.update(id, body)
    },

    getWishlist(id){
        return wishlistRepository.getWishlist(id)
    },

    findWishlist(id){
        return wishlistRepository.findUserWishlist({user_id : id})
    },

    async getAllWishlist(){
        try {
            const wishlists = await wishlistRepository.getAllWishlists()
            const count = await wishlistRepository.getTotalCount()
            return {
                data: wishlists,
                count: count
            }
        } catch (err) {
            return err
        }
    },

    destroy(id){
        return wishlistRepository.destroy(id)
    }
}