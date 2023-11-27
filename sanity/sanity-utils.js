import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      hero,
      pageBuilder[]{
        _type == "hero" => {
          _type,
          heading,
          tagline,
          "image": image.asset->url,
        },
        _type == "video" => {
          _type,
          videoLabel,
          url
        },
        _type == "gallery" => {
          _type,
          "images": images[]->{
            alt,
            image
          },
        },
        _type == "content" => {
          _type,
          editor
        }
      },
    }`
  );
}

export async function getPage(slug) {
  const [page] = await createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      hero,
      pageBuilder[]{
        _type == "hero" => {
          _type,
          heading,
          tagline,
          "image": image.asset->url,
        },
        _type == "video" => {
          _type,
          videoLabel,
          url
        },
        _type == "gallery" => {
          _type,
          "images": images[]{
            alt,
            "asset": asset->  // This fetches the asset details
          },
        },
        _type == "content" => {
          _type,
          editor
        }
      },
    }`,
    { slug }
  );

  return page;
}

export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      lead,
      content,
      "caption": image.caption,
      "gallery": gallery[] {
        "image": image.asset->url,
        "caption": caption,
        "alt": alt
      }
    }`
  );
}

export async function getProject(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name, 
      "slug": slug.current,
      "image": image.asset->url,
      url,
      lead,
      content,
      "caption": image.caption,
      "gallery": gallery[] {
        "image": image.asset->url,
        "caption": caption,
        "alt": alt
      }
    }`,
    { slug: slug }
  );
}
