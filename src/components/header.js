import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"
import { StaticImage } from "gatsby-plugin-image"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `darkblue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        paddingTop:"1.45rem",
        paddingBottom:"1.45rem",
        paddingLeft:"1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <StaticImage src="../images/logo.png" style={{
          width:"10vw",
          verticalAlign:"middle"
        }}/>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display:"inline",
            verticalAlign:"middle"
          }}
        >
          {siteTitle}
        </Link>
        <div style={{display: "inline-block", position: "absolute", verticalAlign: "middle"}}>
          <ul style={{minWidth: "20vw", listStyle: "none", dislpay:"inline-block "}}>
            <li style={{
              width: "123px",
              height: "43px", 
              boxSizing: "border-box",
              overflow: "visible",
              visibility: "inherit",
              dislpay: "inline-block ",
              float:"left"
              }}
            aria-hidden="false">
              <Link data-testid="linkElement" to="/agile" target="_self" aria-haspopup="false" style={{
                display: "inline-block ",
                height: "100%",
                width: "100%",
                float:"left",
                cursor: "pointer",
                textDecoration: "none",
                paddingRight: "2rem"
              }}>
                <button style= {{width: "123px",
              height: "43px", 
              display:"inline-block",
              float:"left",
              fontSize:"1.5rem",
              verticalAlign: "middle",
              textAlign: "center",
              padding:"0",
              lineHeight:"0"
              }}>Agile</button>
              </Link>
            </li>
            <li style={{
              width: "123px",
              height: "43px", 
              boxSizing: "border-box",
              overflow: "visible",
              visibility: "inherit",
              float:"left",
              dislpay: "inline-block ",
              paddingRight: "1rem",
              }}
            aria-hidden="false">
              <Link data-testid="linkElement" to="/quiz" target="_self" aria-haspopup="false" style={{
                display: "inline-block ",
                height: "100%",
                width: "100%",
                float:"left",
                cursor: "pointer",
                textDecoration: "none",
                paddingLeft: "1rem",
                paddingRight: "1rem"
              }}>
                <button style= {{width: "123px",
              height: "43px", 
              display:"inline-block",
              float:"left",
              fontSize:"1.5rem",
              verticalAlign: "middle",
              textAlign: "center",
              padding:"0",
              lineHeight:"0"
              }}>Quiz</button>
              </Link>
            </li>
            <li style={{
              width: "123px",
              height: "43px", 
              boxSizing: "border-box",
              overflow: "visible",
              visibility: "inherit",
              float:"left",
              dislpay: "inline-block ",
              paddingRight: "1rem",
              }}
            aria-hidden="false">
              <Link data-testid="linkElement" to="/about" target="_self" aria-haspopup="false" style={{
                display: "inline-block ",
                height: "100%",
                width: "100%",
                float:"left",
                cursor: "pointer",
                textDecoration: "none",
                paddingLeft: "2rem",
                paddingRight: "2rem"
              }}>
                <button style= {{width: "123px",
              height: "43px", 
              display:"inline-block",
              float:"left",
              fontSize:"1.5rem",
              verticalAlign: "middle",
              textAlign: "center",
              padding:"0",
              lineHeight:"0"
              }}>About us</button>
              </Link>
            </li>
          </ul>
        </div>
      </h1>
    </div>
  </header>
)

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
} 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}




export default Header
