import { getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Video from "../components/Video";

export default async function Page({ params }) {
  const slug = params.slug;
  const page = await getPage(slug);

  const pageTitle = page.title;
  console.log(pageTitle);
  const heroHeading = page.pageBuilder && page.pageBuilder[0].heading;
  const heroTag = page.pageBuilder && page.pageBuilder[0].tagline;
  const heroImage = page.pageBuilder && page.pageBuilder[0].image;
  const videoURL = page.pageBuilder && page.pageBuilder[1].url;
  const galleryImages = page.pageBuilder && page.pageBuilder[2].images;

  return (
    <section className="container py-10 md:py-[60px] lg:py-20">
      <HeroSection
        src={heroImage}
        heading={heroHeading ? heroHeading : pageTitle}
        tag={heroTag}
      />

      <Video url={videoURL} width="750" height="200" />

      {galleryImages ? (
        <>
          <h2 className="text-3xl font-bold mt-8 mb-4">Gallery:</h2>
          <div className="carousel w-full rounded-xl max-w-[800px] mx-auto">
            {galleryImages.map((image, index) => {
              const isFirstSlide = index === 0;
              const isLastSlide = index === galleryImages.length - 1;

              return (
                <div
                  key={index}
                  id={`slide${index}`}
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
        </>
      ) : null}
    </section>
  );
}
