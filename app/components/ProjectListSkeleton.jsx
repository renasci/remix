
import { ProjectSkeleton } from "~/components/ProjectSkeleton"

export function ProjectListSkeleton() {
  return (
    <div className="flex flex-col rounded-lg container mx-auto 
                    max-w-[500px] h-screen bg-dark-100 p-5 text-xs"> 
      <p className="animate-pulse mx-auto rounded-lg  m-0.5 h-[30px] 
                    w-[150px] bg-yellow-200"></p> 
      <ul>
        <li className="animate-pulse"> <ProjectSkeleton/> </li>
        <li className="animate-pulse"> <ProjectSkeleton/> </li>
        <li className="animate-pulse"> <ProjectSkeleton/> </li>
      </ul>
    </div>
  )
}


