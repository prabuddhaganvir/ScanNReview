import mongoose, { Schema, models, Document } from "mongoose";

export interface IScan extends Document {
  businessId: mongoose.Types.ObjectId;
  device?: string;
  userAgent?: string;
  ip?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ScanSchema = new Schema<IScan>(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    device: { type: String },
    userAgent: { type: String },
    ip: { type: String },
  },
  { timestamps: true }
);

const Scan = models.Scan || mongoose.model<IScan>("Scan", ScanSchema);
export default Scan;
