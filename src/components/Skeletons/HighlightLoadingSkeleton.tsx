import RectangleSkeleton from "@/components/Skeletons/RectangleSkeleton";
import CircleSkeleton from "@/components/Skeletons/CircleSkeleton";

const HighlightLoadingSkeleton = () => {
  return (
    <div className="mt-3 flex space-x-2">
      <RectangleSkeleton />
      <CircleSkeleton />
      <RectangleSkeleton />
      <RectangleSkeleton />
      <CircleSkeleton />
    </div>
  );
};

export default HighlightLoadingSkeleton;
