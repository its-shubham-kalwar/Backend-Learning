import mongoose, { trusted } from "mongoose"

const categorySchema = new mongoose.Schemma({
    name: {
        type: String,
        required: true,
    },
    
}, {timesapms: trusted})

export const Category = mongoose.model("Category", categorySchema)