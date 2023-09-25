import AppBar from "@/components/AppBar/AppBar";
import ProblemTable from "@/components/ProblemTable/ProblemTable";
import useGetProblems from "@/hooks/firestoreHooks/useGetProblems";

export default function Home() {
  const { problems, loading, error } = useGetProblems();
  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <AppBar />
      <h1 className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5">
        &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
      </h1>
      {!loading && error && (
        <p className="text-red-600 font-bold text-2xl text-center mt-10">
          {error.message}
        </p>
      )}

      <ProblemTable problems={problems} loading={loading} />
    </main>
  );
}
