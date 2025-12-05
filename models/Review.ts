import mongoose, { Schema, models } from "mongoose";

 export interface IReview extends mongoose.Document {
  businessId: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  source: string;
  customerName: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new mongoose.Schema<IReview>(
  {
    businessId: { type: Schema.Types.ObjectId, ref: "Business", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, default: "" },
    source: { type: String, default: "qr" }, // qr | google
    customerName: { type: String, default: "Anonymous" },
  },
  { timestamps: true }
);

export const Review = mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
