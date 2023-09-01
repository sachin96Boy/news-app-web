type BreaknewsProps = {
    "title": string;
}

function BreakingHotSection(props: BreaknewsProps) {
    const {title} = props;
  return (
    <div className="flex items-center justify-center gap-2 my-2 bg-red-800 text-white">
      <div className="bg-white p-5 text-red-800 my-5">Breaking News</div>
      <div className="font-poppins font-medium">{title}</div>
    </div>
  );
}

export default BreakingHotSection;
