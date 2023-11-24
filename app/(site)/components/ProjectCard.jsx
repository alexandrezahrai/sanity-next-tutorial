import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ href, src, alt, name, content }) {
  return (
    <Link
      href={href}
      className="shadow-sm rounded-xl bg-slate-900 border border-gray-700 shadow-slate-700/[.7] overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={750}
        height={100}
        className="object-cover object-center w-full"
      />
      <div className="p-4 md:p-5">
        <h2 className="text-3xl font-bold">{name}</h2>
        <div className="mt-4 text-ellipsis line-clamp-3">
          <PortableText value={content} />
        </div>
      </div>
    </Link>
  );
}
