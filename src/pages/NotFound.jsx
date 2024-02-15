export const NotFound = () => {
  return (
    <div className=" bg-primary flex flex-col text-center">
      <h1 className=" text-primary font-mono text-[14vmax]">404</h1>
      <h3 className=" text-primary font-sans text-3xl mb-5">Page Not Found</h3>
      <p className=" text-primary font-sans text-sm px-6">
        Oops! The page you are looking for does not exist. It might have been moved or delete.
      </p>
    </div>
  )
}
