const SingleHeaderSection = ({ name, width }) => {
  return <div className={`${width} text-center`}>{name}</div>
}

export const MessagesHeader = ({ screenWidth }) => {
  return (
    <div className=" flex items-center h-11 bg-text-theme-primary text-bg-primary text-lg lg:text-xl font-semibold">
      <div className=" w-[4%] lg:w-[3%]" />
      <SingleHeaderSection name="Sender Name" width={screenWidth >= 1280 ? 'w-[17%]' : 'w-[22%]'} />
      <SingleHeaderSection name="Email" width={screenWidth >= 1280 ? 'w-[30%]' : 'w-[50%]'} />
      {screenWidth >= 1280 && <SingleHeaderSection name="Subject" width="w-[35%]" />}
      <SingleHeaderSection
        name="Date Received"
        width={screenWidth >= 1280 ? 'w-[15%]' : screenWidth >= 1024 ? 'w-[25%]' : 'w-[24%]'}
      />
    </div>
  )
}
