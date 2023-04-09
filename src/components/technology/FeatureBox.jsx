import Image from 'next/image'
import { useState } from 'react'
function FeatureBox({ title, content }) {
  const [show, setShow] = useState(false)
  return (
    <div
      className={`box my-lg-4 my-0 ${show ? 'show' : ''}  ${!content ? 'no-content' : ''}`}
    >
      <span className="closeable" onClick={() => setShow(!show)}>
        <Image src={show ? '/home/minus.svg' : '/home/plus.svg'} alt="toggleable Button" />
      </span>
      {!show && title && <div className={`w-100 title `} >{title}</div>}
      {show && content && <div className="w-100 content" onClick={() => setShow(!show)}>{content} </div>}
    </div>
  )
}
export default FeatureBox