import { auth } from "@clerk/nextjs/server";
import ConnectDB from "@/lib/db";
import { Business } from "@/models/Business";
import RealtimeScanAnalytics from "@/components/dashboard/RealtimeScanAnalytics";


export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) return <div>Unauthorized</div>;

  await ConnectDB();
  const business = await Business.findOne({ ownerId: userId });

  const placeId = business?.placeId;

  if (!business) return <div>No business found</div>;

  return (
    <div className="min-h-screen flex bg-gray-50">
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-semibold mb-6">Dashboard Overview</h2>

        {/* 🔥 Realtime analytics (today, weekly, monthly) */}
        <RealtimeScanAnalytics />
        <div className="mt-6">
<iframe
  src={`https://www.google.com/maps?q=place_id:${placeId}&output=embed`}
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: "12px" }}
  allowFullScreen
  loading="lazy"
/> </div>
       
      </main>
    </div>
  );
}
