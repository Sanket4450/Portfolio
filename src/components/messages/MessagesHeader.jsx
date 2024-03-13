const SingleHeaderSection = ({ name, width }) => {
  return <p className={` w-[${width}] text-center`}>{name}</p>
}

export const MessagesHeader = ({ screenWidth }) => {
  return (
    <div className=" flex items-center h-11 bg-text-theme-primary text-bg-primary text-lg lg:text-xl font-semibold">
      <SingleHeaderSection name="Sender Name" width={screenWidth >= 768 ? '20%' : '25%'} />
      <SingleHeaderSection name="Email" width="30%" />
      <SingleHeaderSection name="Date Received" width={screenWidth >= 768 ? '25%' : '30%'} />
      <SingleHeaderSection name="Status" width="15%" />
      {screenWidth >= 768 && <SingleHeaderSection name="Actions" width="10%" />}
    </div>
  )
}
