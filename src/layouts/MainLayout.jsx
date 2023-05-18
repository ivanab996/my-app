import { Link } from "react-router-dom";

export default function MainLaoyut({ children }) {
  return (
    <main className="main">
      <h1 className="title-main matrix-txt-layer">The Matrix</h1>
      <div className="container">
        {children}
      </div>
     {/*  <Link className="faq-link" to="/faq">
        Read The FAQ
      </Link> */}
    </main>
  )
}