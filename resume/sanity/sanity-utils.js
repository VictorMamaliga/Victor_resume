import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: "zt1oa1hr",
        dataset: "production",
        apiVersion: "2023-06-12",
        useCdn: false
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            description
        }`
    )
};