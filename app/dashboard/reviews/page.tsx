import ConnectDB from '@/lib/db';
import { Business } from '@/models/Business';
import React from 'react'
import { auth } from "@clerk/nextjs/server";

export default async function Review() {

    const { userId } = await auth();
    if (!userId) return <div>Unauthorized</div>;
  
    await ConnectDB();
    const business = await Business.findOne({ ownerId: userId });
  
    const placeId = business?.placeId;
  
    if (!business) return <div>No business found</div>;
  return (
    <div>
  <div className="mt-6">
<iframe
  src={`https://www.google.com/maps?q=place_id:${placeId}&output=embed`}
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: "12px" }}
  allowFullScreen
  loading="lazy"
/> 
</div>
</div>
  )
}
