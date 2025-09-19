import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");  // send user to home layout
}

