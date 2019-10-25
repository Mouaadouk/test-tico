const mongoose = require('mongoose');
const schema = mongoose.Schema;

const StageSchema = new schema({
    name:{
        type: String,
        required: [true,'name is required']
    },
    type:{
        type: String,
        required: [true,'type is required']
    },
    price:{
        type: Number,
        required: [true,'price is required']
    },
    rating:{
        type: Number,
        required: [true,'rating is required']
    },
    warranty_years:{
        type: Number,
        required: [true,' warranty_years is required']
    },
    available:{
        type: Boolean,
        required: [true,' available is required']
    }
})

module.exports  = mongoose.model("StageDb", StageSchema)
