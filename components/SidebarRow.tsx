import React, { SVGProps } from 'react'

interface PropTypes {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title?: string;
    onClick?: ()=> {}
}
const SidebarRow:React.FC<PropTypes> = ({Icon,title,onClick}) => {
  return (
    <div onClick={()=> onClick?.()} className="group flex max-w-fit items-center space-x-2 px-4 py-3 
        rounded-full hover:bg-gray-100 cursor-pointer transition-all">
        <Icon className="h-6 w-6" />
        <p className="hidden md:inline-flex group-hover:text-twitter
        text-base font-light lg:text-xl">{title}</p>
    </div>
  )
}

export default SidebarRow