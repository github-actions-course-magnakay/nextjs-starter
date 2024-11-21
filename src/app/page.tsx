import Link from "next/link";
import flagsmith from "@/utils/flagsmith";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  console.log(flags.isFeatureEnabled("searching"));
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
      </div>
      <Link href="/about">About</Link>
      <br />
      {flags.isFeatureEnabled("searching") && <input placeholder="search" />}
    </main>
  );
}
