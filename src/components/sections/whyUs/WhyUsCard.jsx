export default function WhyUsCard({ heading, text, number }) {
  return (
    <div className="border border-amber-400 p-6 w-[90%]  backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl text-amber-400 font-semibold">{heading}</h2>
        <p className="text-7xl md:text-8xl text-[#242424] font-black opacity-30 select-none">
          {number}
        </p>
      </div>
      <div className="h-[1px] bg-[#242424] my-4" />
      <p className="text-lg text-gray-100 leading-relaxed">{text}</p>
    </div>
  );
}
