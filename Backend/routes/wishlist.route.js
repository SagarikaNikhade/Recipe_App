const express = require("express");
const { WishlistModel } = require("../models/wishlist.model");
const wishlistRouter = express.Router();

wishlistRouter.post("/addtocart",async(req,res)=>{
   
    try{
       let data = new WishlistModel(req.body);
         await data.save();
         res.send(data);  
    }catch(err){
        res.send(err.message);
    }

})

wishlistRouter.get('/',async (req, res) => {
    try {
      const authorID = req.userID;
      const wishlist = await WishlistModel.find({ author:authorID });
      console.log("wishlist",wishlist)
      res.send(wishlist);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

// wishlistRouter.delete("/delete/:id",async(req,res)=>{
//     const {id} = req.params;
//    try{
//       let data = await WishlistModel.findByIdAndDelete({_id:id});
//         res.send(data);  
//    }catch(err){
//        res.send(err.message);
//    }

// })

wishlistRouter.delete('/delete/:id', auth, async (req, res) => {
    const userId = req.user.userID;
  
    try {
      const wishlistItem = await WishlistModel.findOne({ _id: req.params.id, author: userId });
      if (!wishlistItem) {
        return res.status(404).send({ message: 'Wishlist item not found' });
      }
  
      await WishlistModel.deleteOne({ _id: req.params.id });
      res.send({ message: 'Wishlist item deleted successfully' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

module.exports={ wishlistRouter }