import { getSpots } from "@/lib/seoul";
import { isAuthenticated } from "@/lib/auth";
import SeoulAdmin from "@/components/SeoulAdmin";

export const dynamic = "force-dynamic";

export default async function SeoulPage() {
  const spots = await getSpots();
  const auth = await isAuthenticated();

  return <SeoulAdmin initialSpots={spots} initialAuth={auth} />;
}
