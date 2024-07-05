import HomePage from "./(pages)/homePage/page";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <HomePage />
      <SpeedInsights />
    </>
  );
}
