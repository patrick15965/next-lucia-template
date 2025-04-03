import { getCurrentSession } from "@/lib/server/session";
import { redirect } from "next/navigation";

export default async function LandingPage() {
  const { user } = await getCurrentSession();
  if (user === null) {
    return redirect("/login");
  } else {
    return (
      <div>
        logged in
      </div>
    )
  }
}
