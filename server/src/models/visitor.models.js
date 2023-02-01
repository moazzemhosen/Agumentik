const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true},
    role:{type:String,require:true}
    
  },
  { versionKey: false, timestamps: true }
);

const Visitor=mongoose.model("visitor", visitorSchema);
module.exports=Visitor;