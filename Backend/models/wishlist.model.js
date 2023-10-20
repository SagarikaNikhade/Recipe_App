const mongoose=require("mongoose");

const wishlistSchema =mongoose.Schema({
title: {type:String,required:true},
image: {type:String,required:true},
author: {type:String},
authorID :{type: mongoose.Schema.Types.ObjectId, ref: 'user'}
},{
    versionKey:false
})
const WishlistModel = mongoose.model("wishlist",wishlistSchema)

module.exports={WishlistModel}