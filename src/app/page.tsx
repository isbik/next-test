"use client"
import { Notes } from "@/components/notes";
import "@/styles/main.scss";
import "@/styles/base/icons.scss";
import "@/styles/base/buttons.scss";

export default function Home() {
  return (
    <main className="main">
      <Notes />
    </main>
  );
}
