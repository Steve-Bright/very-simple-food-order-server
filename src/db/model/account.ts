import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: { createdAt: true, updatedAt: true }
}
)

export default mongoose.model("Account", AccountSchema);