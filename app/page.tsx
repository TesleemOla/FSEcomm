import { TodayFlash, Hero } from "@/components/ui";


export default async function Index() {
  return (
    <div className="grid min-h-screen w-screen m-2 p-2 gap-5 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <TodayFlash />
    </div>
  );
}
