
import { Project } from "~/components/Project"

export function ProjectList({ projects }) {
  return (
    <div className="flex flex-col rounded-lg container mx-auto 
                    max-w-[500px] h-screen bg-dark-100 p-5 text-xs"> 
      <h1 className="mx-auto text-yellow-100 m-0.5">My projects</h1> 
      <ul>
        {projects.map(({name, logo, id})=> {
          return <li key={id}> <Project title={name} src={logo} /> </li>
        })} 
      </ul>
    </div>
  )
}


