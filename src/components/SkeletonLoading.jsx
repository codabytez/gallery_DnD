const SkeletonLoading = () => {
  return (
    <div>
      <div
        className="animate-pulse h-40 bg-gray-300"
        style={{ width: "150px", height: "150px" }}
      ></div>
      <div
        className="animate-pulse h-4 mt-2 bg-gray-300"
        style={{ width: "80px" }}
      ></div>
    </div>
  );
};

export default SkeletonLoading;
