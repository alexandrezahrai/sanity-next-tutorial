import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Page({params}) {
  const slug = params.slug;
  const page = await getPage(slug)
  console.log(page)

  return (
    <section className="container py-10 md:py-[60px] lg:py-20">
      <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">
        {page.title}
      </h1>
      <PortableText value={page.copy} />
    </section>
  );
}
