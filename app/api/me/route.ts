import { auth, currentUser } from "@clerk/nextjs/server";
import ConnectDB from "@/lib/db";
import { Business } from "@/models/Business";


export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return Response.json({ onboarded: false });

    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) return Response.json({ onboarded: false });

    await ConnectDB();
    // ⭐ Now this will work because model import is correct
    const business = await Business.findOne({ email : email });

     if (!business) {
      return Response.json({ onboarded: false });
    }

     return Response.json({
      onboarded: true,
      business: {
        _id: business._id.toString(),
        businessName: business.businessName,
        address: business.address,
        email: business.email,
        placeId: business.placeId,
        googleReviewLink: business.googleReviewLink, // ⭐ IMPORTANT
      },
    });
    
  } catch (err) {
    console.error("ERROR IN /api/me:", err);
    return Response.json({ onboarded: false });
  }
}
