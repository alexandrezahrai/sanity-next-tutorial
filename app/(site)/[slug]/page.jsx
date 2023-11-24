import { getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Video from "../components/Video";
import { Fragment } from "react";

export default async function Page({ params }) {
  const slug = params.slug;
  const page = await getPage(slug);

  // Sort the pageBuilder array based on the order property
  const sortedPageBuilder = page.pageBuilder.sort((a, b) => a.order - b.order);

  const pageTitle = page.title;

  return (
    <section className="container py-10 md:py-[60px] lg:py-20">
      {sortedPageBuilder.map((block, index) => {
        switch (block._type) {
          case "hero":
            const heroHeading = block.heading;
            const heroTag = block.tagline;
            const heroImage = block.image;

            return (
              <HeroSection
                key={index}
                src={heroImage}
                heading={heroHeading ? heroHeading : pageTitle}
                tag={heroTag}
              />
            );
          case "video":
            const videoURL = block.url;

            return <Video key={index} url={videoURL} width="750" height="200" />;
          case "gallery":
            const galleryImages = block.images;

            return galleryImages ? (
              <Fragment key={index}>
                <h2 className="text-3xl font-bold mt-8 mb-4">Gallery:</h2>
                <div className="carousel w-full rounded-xl max-w-[800px] mx-auto">
                  {galleryImages.map((image, galleryIndex) => {
                    const isFirstSlide = galleryIndex === 0;
                    const isLastSlide = galleryIndex === galleryImages.length - 1;

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
                            <span className="sr-only">Previous Slide Button</span>❮
                          </a>
                          <a
                            href={`#slide${galleryIndex + 1}`}
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
              </Fragment>
            ) : null;
          default:
            return null;
        }
      })}
    </section>
  );
}
