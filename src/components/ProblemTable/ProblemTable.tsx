import React, { FC } from "react";

import TableHead from "@/components/TableHead/TableHead";
import TableRow from "@/components/TableRow/TableRow";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import useYoutube from "@/hooks/YoutubeHooks/useYoutube";
import TabularLoadingSkeleton from "@/components/Skeletons/TabularLodingSkeleton";
import { DBProblem } from "@/utils/types/problem";

type ProblemTableProps = {
  loading: boolean;
  problems: DBProblem[];
};

const tableColumns: string[] = [
  "Status",
  "Title",
  "Difficulty",
  "Category",
  "Solution",
];

const ProblemTable: FC<ProblemTableProps> = ({ loading, problems }) => {
  const { isOpen, openYoutubePlayer, closeYoutubePlayer, videoId } =
    useYoutube();
  return (
    <div className="relative overflow-x-auto mx-auto px-6 pb-10">
      {loading && (
        <div className="relative overflow-x-auto mx-auto sm:w-7/12 w-full animate-pulse">
          {[...Array(10)].map((_, idx) => (
            <TabularLoadingSkeleton key={idx} />
          ))}
        </div>
      )}
      {!loading && (
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
          <TableHead cols={tableColumns} />
          <tbody className="text-white">
            {problems.map((problem, idx) => {
              return (
                <TableRow
                  problem={problem}
                  isDark={idx % 2 == 1}
                  key={problem.id}
                  openYoutubePlayer={openYoutubePlayer}
                />
              );
            })}
          </tbody>
          {isOpen && (
            <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
              <div
                className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"
                onClick={closeYoutubePlayer}
              ></div>
              <div className="w-full z-50 h-full px-6 relative max-w-4xl">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="w-full relative">
                    <IoClose
                      fontSize="35"
                      className="cursor-pointer absolute -top-16 right-0"
                      onClick={closeYoutubePlayer}
                    />
                    <YouTube
                      videoId={videoId}
                      loading={"lazy"}
                      iframeClassName={"w-full min-h-[500px]"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </table>
      )}
    </div>
  );
};

export default ProblemTable;
