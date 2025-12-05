import mongoose from "mongoose";

export interface IBusiness extends mongoose.Document {
  ownerId: string;
  businessName: string;
  address: string;
  email: string;
  placeId: string;
  googleReviewLink: string;

  // ⭐ SIMPLE PLAN LOGIC (manual control)
  plan: "free" | "paid";
  trialUsed: boolean;

  currentMonthScans: number;
  maxScansPerMonth: number;

  createdAt: Date;
  updatedAt: Date;
}

const BusinessSchema = new mongoose.Schema<IBusiness>(
  {
    ownerId: {
      type: String,
      unique: true,
    },

    businessName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    placeId: {
      type: String,
      required: true,
    },

    googleReviewLink: {
      type: String,
    },

    // ⭐ Simple Plan Control
    plan: {
      type: String,
      enum: ["free", "paid"],
      default: "free", // Free tag, BUT limit stays 0 until manual activation
    },

    trialUsed: {
      type: Boolean,
      default: false, // Owner has NOT used trial yet
    },

    // ⭐ Scan Limit Controls
    currentMonthScans: { type: Number, default: 0 },

    // ⭐ DEFAULT SHOULD BE 0 — NO FREE REVIEWS unless YOU activate them
    maxScansPerMonth: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Auto-create Google review link
BusinessSchema.pre("save", { document: true }, function () {
  if (this.placeId) {
    this.googleReviewLink = `https://search.google.com/local/writereview?placeid=${this.placeId}`;
  }
});

export const Business =
  mongoose.models.Business ||
  mongoose.model<IBusiness>("Business", BusinessSchema);
