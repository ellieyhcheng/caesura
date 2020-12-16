import React from "react"
import sidebarStyles from "./sidebar.module.css"

export default function Sidebar() {
  return <div className={sidebarStyles.sidebar}>
    <h1>
      <a href="https://ellieyhcheng.github.io/">Ellie Cheng</a>
    </h1>
    <hr/>
  </div>
}