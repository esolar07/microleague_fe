import Image from "next/image";
import MatchUpForm from "../components/MatchUpForm";
export default function Home() {
  return (
      <main className="grid min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <MatchUpForm/>
       </main>
  );
}
