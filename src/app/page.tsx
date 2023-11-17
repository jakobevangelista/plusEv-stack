import { api } from "@/trpc/server";

export default async function Home() {
  const test = await api.post.hello.query({ text: "world" });
  console.log(test.greeting);
  return (
    <>
      <div>hello</div>
    </>
  );
}
