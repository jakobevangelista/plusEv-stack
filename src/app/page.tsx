import { api } from "@/trpc/server";
import Hero from "./_components/hero";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  // const test = await api.post.hello({ text: "world" });
  const { userId } = auth();

  if (userId) {
    redirect("/protected");
  }

  // const test = { greeting: "Hello world (from server)" };
  return (
    <>
      <Hero />
    </>
  );
}
