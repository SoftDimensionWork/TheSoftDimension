export default function Hyperlink({ href, target, className, children }) {
  return <>

    <a
      href={ href }
      target={ target || "_blank" }
      className={`
        inline-block
        cursor-pointer
        text-blue-500
        text-base
        ${className}
      `}
    >
      { children }
    </a>

  </>
}