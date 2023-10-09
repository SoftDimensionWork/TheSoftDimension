import Link from "next/link"

export default function Navlink({ href, className, active, children }) {
  return <>

    <Link 
      href={href}
      className={`
        inline-block
        py-2 md:px-4
        text-slate-200 hover:text-white
        ${className}
        ${active ? "font-bold" : ""}
      `}
    >
      { children }
    </Link>

  </>
}