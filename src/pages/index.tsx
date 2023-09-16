import AppBar from "@/components/AppBar/AppBar";
import ProblemTable from "@/components/ProblemTable/ProblemTable";

export default function Home() {
  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <AppBar />
      <h1 className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5">
        &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
      </h1>

      <ProblemTable />
    </main>
  );
}
