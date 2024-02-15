import React from 'react'

export const InfoList = ({ title, items }) => {
  return (
    <div className=" space-y-3">
      <h4 className=" text-primary font-semibold">{title}</h4>
      <div className=" flex flex-col space-y-2">
        {items.map((item) => (
          <span key={item.id} className=" text-gray-primary text-[13px]">
            {item.title}
          </span>
        ))}
      </div>
    </div>
  )
}
