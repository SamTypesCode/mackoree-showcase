import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import MediaDialog from "@/components/portfolio/media-dialog";

interface ProjectType {
  name: string;
  media: string[];
}

async function getProjects(): Promise<ProjectType[]> {
  const projectsDir = path.join(process.cwd(), "public/projects");
  const projectFolders = fs
    .readdirSync(projectsDir)
    .filter((file) => fs.statSync(path.join(projectsDir, file)).isDirectory());

  const Projects: ProjectType[] = projectFolders.map((folder) => {
    const folderPath = path.join(projectsDir, folder);
    const files = fs.readdirSync(folderPath);
    const media = files
      .filter((f) => /\.(png|jpg|jpeg|webp|gif|mp4|webm)$/i.test(f))
      .map((file) => `/projects/${folder}/${file}`);
    return { name: folder, media };
  });

  return Projects;
}

export const dynamic = "force-dynamic";

export default async function Portfolio() {
  const Projects = await getProjects();

  return (
    <>
      <aside className="w-full min-h-16 text-[0.72rem] font-medium z-50 flex justify-start items-center p-6 max-md:p-5 space-x-8">
        <Link href="/#projects">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl max-md:text-2xl font-medium font-serif">
          Our Portfolio
        </h1>
      </aside>

      <main className="">
        <section id="projects" className="w-full pt-16 pb-24 max-md:py-16">
          <div className="max-w-[1440px] mx-auto px-12 max-md:px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Projects.map(
                (project) =>
                  project.media.length > 0 &&
                  project.media.map((src, index) => (
                    <MediaDialog
                      key={`${project.name}-${index}`}
                      src={src}
                      name={project.name}
                    />
                  ))
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
