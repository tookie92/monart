import Image from "next/image";
import MonCanvas from "./components/MonCanvas";

export default function Home() {
  return (
    <main className="flex h-[100vh]  items-center w-full">
      <MonCanvas/>
    </main>
  );
}
