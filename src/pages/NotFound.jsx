import { useEffect } from 'react'

export const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found - Portfolio'
  }, [])

  return (
    <div className=" bg-primary flex flex-col text-center pb-20">
      <h1 className=" text-primary font-mono text-[14vmax]">404</h1>
      <div className=" space-y-5">
        <h3 className=" text-primary font-sans text-3xl">Page Not Found</h3>
        <p className=" text-primary font-sans text-sm px-10">
          Oops! The page you are looking for does not exist. It might have been moved or delete.
        </p>
      </div>
    </div>
  )
}
