import { defer, type MetaFunction } from "@remix-run/node";
import { Await, useLoaderData, useNavigation } from "@remix-run/react";
import { getStoredProjects } from "~/data/getProjects";
import { ProjectList } from "~/components/ProjectList";
import { ProjectListSkeleton } from "~/components/ProjectListSkeleton";
import { ErrorElement } from "~/components/ErrorElement"
import { Suspense } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App" },
    { name: "Projects app", content: "Welcome to projects tracking app!" },
  ];
};

export default function Index() {
  const { projects } = useLoaderData();
  
  return (
    <div className="conteiner bg-dark-200 h-screen">
      <Suspense fallback={<ProjectListSkeleton/>}>
        <Await 
          resolve={projects}
          errorElement={<ErrorElement/>}
        >
          {(projects) => <ProjectList projects={ projects }/> }
        </Await>
      </Suspense>
    </div>
  );
}

export async function loader() {
  const projects = getStoredProjects();
  return defer({projects})
}

