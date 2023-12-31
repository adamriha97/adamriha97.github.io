import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;
export const dynamic = 'force-dynamic';

export default async function Home() {
  const projects = await getProjects();

  // console.log(projects)

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello.. <span className="bg-gradient-to-r
      from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Adam</span> here!</h1>

      <p className="mt-3 text-xl text-gray-600">Just enjoy these little things..</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Teeny Tiny Project-inies:</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="bg-gray-400 border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500">
          {project.image && (
            <Image src={project.image} alt={project.name} width={750} height={300} className="object-cover rounded-lg border border-gray-500" />
          )}
          <div className="mt-3 font-extrabold bg-gradient-to-r 
          from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div>
        </Link>
      ))}
      </div>
    </div>
  );
}
