import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title, 
      "slug": slug.current,
    }`
  );
}

export async function getPage(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title, 
      "slug": slug.current,
      copy
    }`,
    { slug }
  );
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
