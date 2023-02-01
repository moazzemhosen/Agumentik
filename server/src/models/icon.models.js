const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema(
  {
    img:{type:String,required:true},
    linkUrl: { type: String, required: true }
    
  },
  { versionKey: false, timestamps: false }
);

const Social=mongoose.model("social",socialSchema);
module.exports=Social;