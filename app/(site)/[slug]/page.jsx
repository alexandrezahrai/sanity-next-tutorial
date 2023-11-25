import { getPage, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Video from "../components/Video";
import imageUrlBuilder from "@sanity/image-url";
import config from "@/sanity/config/client-config";
import { PortableText } from "@portabletext/react";
import { components } from "../components/PortableTextComponents";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

// Create a builder that can be used to create URLs
const builder = imageUrlBuilder(config);
// Function to get the URL for an image
const urlFor = (source) => builder.image(source);

export default async function Page({ params }) {
  const slug = params.slug;
  const page = await getPage(slug);
  const projects = await getProjects();

  // Sort the pageBuilder array based on the order property (reflects the order seen in the studio)
  const sortedPageBuilder =
    page?.pageBuilder && page.pageBuilder.sort((a, b) => a.order - b.order);

  const pageTitle = page.title;
  const heroHeading = page.heading;

  return (
    <Section padding="py-10 md:py-[60px] lg:py-20">
      {pageTitle && (
        <HeroSection
          src={page?.hero?.image ? urlFor(page.hero.image).url() : undefined}
          heading={heroHeading ? heroHeading : pageTitle}
          tag={page?.hero?.tagline ? page.hero.tagline : undefined}
        />
      )}

      {slug === "projects" && (
        <div className="flex flex-col gap-4 lg:gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 bg-base-300 border rounded-xl shadow-sm p-4 md:p-6 border-gray-700 mb-10 lg:mb-20">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project._id}
                href={`/projects/${project.slug}`}
                src={project.image}
                alt={project.name}
                name={project.name}
                content={project.content}
              />
            );
          })}
        </div>
      )}

      {sortedPageBuilder && (
        <div className="flex flex-col gap-10 lg:gap-20">
          {sortedPageBuilder.map((block, index) => {
            switch (block._type) {
              case "content":
                return block.editor ? (
                  <div>
                    <PortableText
                      value={block.editor}
                      components={components}
                    />
                  </div>
                ) : null;
              case "video":
                const videoURL = block.url;

                return videoURL ? (
                  <Video key={index} url={videoURL} width="750" height="200" />
                ) : null;
              case "gallery":
                const galleryImages = block.images;

                return galleryImages ? (
                  <div key={index} className="grid place-center">
                    <h2 className="heading-3 text-center mb-8">Gallery:</h2>
                    <div className="carousel w-full rounded-xl max-w-[800px] mx-auto">
                      {galleryImages.map((image, galleryIndex) => {
                        const isFirstSlide = galleryIndex === 0;
                        const isLastSlide =
                          galleryIndex === galleryImages.length - 1;

                        return (
                          <div
                            key={galleryIndex}
                            id={`slide${galleryIndex}`}
                            className="carousel-item relative w-full"
                          >
                            <Image
                              src={image.asset.url}
                              alt={image.alt}
                              width={750}
                              height={100}
                              className="w-full object-cover object-center"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a
                                href={`#slide${galleryIndex - 1}`}
                                className="btn btn-circle"
                                disabled={isFirstSlide ? true : false}
                              >
                                <span className="sr-only">
                                  Previous Slide Button
                                </span>
                                ❮
                              </a>
                              <a
                                href={`#slide${galleryIndex + 1}`}
                                className="btn btn-circle"
                                disabled={isLastSlide ? true : false}
                              >
                                <span className="sr-only">
                                  Next Slide Button
                                </span>
                                ❯
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null;
              default:
                return null;
            }
          })}
        </div>
      )}
    </Section>
  );
}
