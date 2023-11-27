import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { components } from "../../components/PortableTextComponents";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Image from "next/image";

export default async function Project({ params }) {
  const slug = params.project;

  const project = await getProject(slug);

  const gallery = project.gallery;

  // Parse the _createdAt value
  const createdAtDate = new Date(project._createdAt);
  // Format the date as 'Month day, year'
  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Section padding="py-10 md:py-[60px] lg:py-20">
      <article className="mx-auto w-full max-w-3xl">
        <header>
          <Heading tag="h1" style="heading-2 mb-4" label={project.name} />
          <address>
            <p className="text-gray-400 mb-6 lg:mb-8">
              Published on {formattedDate}
            </p>
          </address>
        </header>
        <figure className="block mb-8">
          <Image
            src={project.image}
            alt={project.name}
            width={750}
            height={100}
            className="object-cover object-center w-full rounded-xl border border-gray-700"
          />
          {project.caption ? (
            <figcaption className="text-base mt-4 text-gray-400 text-center">
              {project.caption}
            </figcaption>
          ) : null}
        </figure>

        <div className="mb-6">
          <PortableText value={project.content} components={components} />
        </div>

        {gallery ? (
          <div className="carousel w-full rounded-xl">
            {gallery.map((image, index) => {
              const isFirstSlide = index === 0;
              const isLastSlide = index === gallery.length - 1;

              return (
                <div
                  key={index}
                  id={`slide${index}`}
                  className="carousel-item relative w-full"
                >
                  <Image
                    src={image.image}
                    alt="gallery image"
                    width={750}
                    height={100}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${index - 1}`}
                      className="btn btn-circle"
                      disabled={isFirstSlide ? true : false}
                    >
                      <span className="sr-only">Previous Slide Button</span>❮
                    </a>
                    <a
                      href={`#slide${index + 1}`}
                      className="btn btn-circle"
                      disabled={isLastSlide ? true : false}
                    >
                      <span className="sr-only">Next Slide Button</span>❯
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </article>
    </Section>
  );
}
