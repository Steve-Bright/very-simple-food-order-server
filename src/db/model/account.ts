import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" }
}, {
    timestamps: { createdAt: true, updatedAt: true }
}
)

export default mongoose.model("Account", AccountSchema);