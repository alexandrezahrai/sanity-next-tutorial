import Image from "next/image";
import Heading from "./Heading";

export default function HeroSection({ src, heading, tag }) {
  return (
    <div className="py-8 px-4 text-center lg:py-16 lg:px-12 relative bg-base-300 border border-gray-700 shadow-slate-700/[.7] overflow-hidden min-h-[500px] flex flex-col justify-center items-center rounded-3xl mb-10 lg:mb-20 last:mb-0">
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
        <Heading
          tag="h1"
          style="heading-1 relative"
          label={heading}
        />
      )}

      {tag && (
        <p className="mt-4 mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-4 text-gray-400 max-w-[700px] mx-auto balance-text relative">
          {tag}
        </p>
      )}
    </div>
  );
}
