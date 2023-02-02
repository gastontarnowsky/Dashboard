function Results(){
  return(
    <div className="flex items-center justify-between mb-4">
      <p className="text-gray-500">
        We've found <span className="text-purple-600 font-bold">523</span> jobs!
      </p>
      <p className="flex items-center gap-2">
        Sort by: <select className="bg-gray-100 text-purple-600 hover:cursor-pointer font-bold"><option>Date</option></select>
      </p>
    </div>
  );
}

export default Results;