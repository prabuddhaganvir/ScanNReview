import { auth } from "@clerk/nextjs/server";
import ConnectDB from "@/lib/db";
import { redirect } from "next/navigation";
import { Business } from "@/models/Business";


export default async function AuthRedirect() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  await ConnectDB();
  const business = await Business.findOne({ ownerId: userId });

  // If NOT onboarded → go to onboarding
  if (!business) {
    redirect("/onboarding");
  }

  // If already onboarded → go to dashboard (or homepage)
  redirect("/dashboard");
}
