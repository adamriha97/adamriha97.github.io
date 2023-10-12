import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;
export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getProjects();

  // console.log(projects)

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello there.. It&apos;s-a me{" "}
        <span
          className="bg-gradient-to-r from-orange-500
      via-red-600 to-purple-500 bg-clip-text text-transparent hover:animate-pulse"
        >
          Adam-io
        </span>
        !
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Just enjoy these little things..
      </p>

      <h2 className="mt-24 text-3xl font-bold text-gray-700">
        Teeny Tiny Project-inies:
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="rounded-lg border-2 border-gray-500 bg-white p-1 shadow-md transition hover:scale-105 hover:shadow-2xl"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="rounded-lg border border-gray-500 object-cover"
              />
            )}
            <div className="mt-3 bg-clip-text font-extrabold">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
