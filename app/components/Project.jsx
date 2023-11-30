
export function Project({title, src}) {
  return (
    <>  
      <div className="rounded-lg flex items-center m-[2px] text-[0.6rem] 
                      hover:scale-105 bg-gradient-to-r hover:from-dark-100
                       hover:to-mint-100 cursor-pointer" >
        <img className="max-w-[20px] m-0.5" src={src} alt="project image" />
        <div className="text-yellow-200 ">{title}</div>
      </div>
    </>
  )
}