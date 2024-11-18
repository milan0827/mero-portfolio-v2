const TechStackTags = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-full border-gray-500/50 border  py-1 px-5 text-gray-300 text-[14px] hover:scale-105 transition-all duration-300 shadow-[5px_0px_10px_rgba(180,_180,_255,_0.1)] ${className}`}
    >
      {title}
    </div>
  );
};

export default TechStackTags;
