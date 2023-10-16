import Link from "next/link"

export default function ButtonLight({
  href, className, handleClick, children
}) {

  return <>

    <Link
      href={ href || "" }
    >
      <button
        className={`
          px-2 py-1
          font-medium
          text-gray-900
          border border-gray-300
          focus:outline-none focus:ring-4 focus:ring-gray-200
          bg-white hover:bg-gray-100
          ${className}
        `}
        onClick={handleClick}
      >
        { children }
      </button>
    </Link>

  </>
}