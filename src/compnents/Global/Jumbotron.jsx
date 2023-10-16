
export default function Jumbotron({ outerClass, innerClass, children }) {

  return <>
  
  <div className={outerClass}>

    <div className={`
      container mx-auto
      w-full
      p-4
      ${innerClass}
    `}
    >

      { children }

    </div>

  </div>
  
  </>

}