export default function Video({url, width, height}) {
  return (
    <div className="my-10 lg:my-20 w-full flex justify-center items-center">
      {url && (
        <iframe
          width={width}
          height={height}
          src={url}
          allowFullScreen
          className="border border-gray-700 rounded-xl md:h-[450px]"
        ></iframe>
      )}
    </div>
  );
}
