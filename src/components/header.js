import React from "react"
import headerStyles from "./header.module.css"

export default function Sidebar() {
  return <div className={headerStyles.header}>
    <div className={headerStyles.title}>
      <h1>cæsura</h1> 
      <h2>[suh·zyur·ah]</h2>
    </div>
    <p>a picture is worth a thousand words</p>
  </div>
}