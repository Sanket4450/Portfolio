export const LinkList = ({ title, items }) => {
  return (
    <div className=" space-y-3">
      <h4 className=" text-primary font-semibold">{title}</h4>
      <div className=" flex flex-col space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            className=" text-gray-primary text-sm hover:underline hover:underline-offset-2 hover:decoration-gray-primary"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
