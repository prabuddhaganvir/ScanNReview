"use client";

import { useEffect, useState } from "react";

export default function QRPage() {
  const [loading, setLoading] = useState(true);
  const [qrImage, setQrImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getQR = async () => {
      try {
      const businessRes = await fetch("/api/me");
      const data = await businessRes.json();

const business = data.business;
const businessId = business?._id;

if (!business?.googleReviewLink) {
  setError("Google Review Link missing.");
  setLoading(false);
  return;
}

        // 2. Call QR API with DB link
        const qrRes = await fetch("/api/qr", {
          method: "POST",
          body: JSON.stringify({ url: `${process.env.NEXT_PUBLIC_BASE_URL}/r/${businessId}` }),
        });

        const qrData = await qrRes.json();

        if (qrData.qrImage) {
          setQrImage(qrData.qrImage);
        } else {
          setError("Failed to generate QR.");
        }

      } catch (err) {
        console.error(err);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    getQR();
  }, []);

  if (loading) return <p className="text-center mt-10">Generating QR...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
   <div className="flex flex-col items-center mt-16 gap-6">

  {/* SaaS Branding */}
  <div className="flex items-center gap-2 mb-2">
    <img 
      src="/logo.svg" 
      alt="ScanNReview Logo" 
      className="h-8 w-8 rounded-md"
    />
    <span className="text-xl font-semibold tracking-tight">
      ScanNReview
    </span>
  </div>

  {/* Title */}
  <h1 className="text-3xl font-bold text-center">
    Your Google Review QR Code
  </h1>

  {/* QR Container */}
  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center">
    <img
      src={qrImage}
      alt="QR Code"
      className="p-3 bg-white rounded-xl shadow-md"
      width={260}
    />

    <p className="text-gray-600 text-sm mt-3">
      Scan to leave a Google review
    </p>
  </div>

  {/* Download Button */}
  <a
    href={qrImage}
    download="google-review-qr.png"
    className="mt-4 px-6 py-3 rounded-xl bg-black text-white font-medium shadow-lg hover:opacity-90 transition"
  >
    Download QR Code
  </a>
</div>

  );
}