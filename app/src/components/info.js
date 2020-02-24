import React from "react"

import {
  FaTwitter as Twitter,
  FaLinkedin as Linkedin,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3 info" style={{ color: "#BF5700" }}>
        <span style = {{color : "white"}}>Gregory Williams</span> <br />
        Software Engineer
      </div>
      <div className="text-muted mx-5 my-4 h3 code">
        Husband, father, and physics enthusiast living in Seattle, WA.
      </div>
      <div className="h1 mt-5 mb-5 social">
        <a className="mr-5 icon" href="https://twitter.com/GregWill">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/in/gregory-williams">
          <Linkedin />
        </a>
        <a className="mr-5 icon" href="https://github.com/Grw300">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto:Greg@GregoryWilliams.me">
          <Mail />
        </a>
      </div>
    </div>
  )
}
