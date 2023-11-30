import { useAsyncError } from "@remix-run/react";

export function ErrorElement() {
  const error = useAsyncError();
  return (
    <div className="flex flex-col rounded-lg container mx-auto 
                    max-w-[500px] h-screen bg-dark-100 p-5 text-xs"> 
      <span className="text-yellow-200 mx-auto">
        {error.message ? error.message : "Oops! Something went wrong"}
      </span> 
    </div>
  )
}