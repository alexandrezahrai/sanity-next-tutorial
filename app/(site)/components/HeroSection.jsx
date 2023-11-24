import Image from "next/image";

export default function HeroSection({ src, heading, tag }) {
  return (
    <div className="py-8 px-4 text-center lg:py-16 lg:px-12 relative bg-[#1F2937] overflow-hidden min-h-[500px] flex flex-col justify-center items-center border border-gray-700 rounded-3xl">

      {src && (
        <>
          <div className="w-full h-full inset-0 absolute">
            <Image
              src={src}
              alt="background image"
              width={800}
              height={800}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Overlay */}
          <div className="w-full h-full absolute inset-0 bg-black opacity-60"></div>
        </>
      )}

      {heading && (
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl relative">
          {heading}
        </h1>
      )}

      {tag && (
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-4 text-gray-400 max-w-[700px] mx-auto balance-text relative">
          {tag}
        </p>
      )}

    </div>
  );
}
