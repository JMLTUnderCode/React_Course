import React from "react"
import { TwitterFollowCard } from "./components/TwitterFollowCard"

import "./App.css"

const users = [
  {
    username: "midudev",
    name: "Miguel Angel Duran"
  },
  {
    username: "junior",
    name: "Junior M. Lara. T"
  },
  {
    username: "cucho",
    name: "Jose Romero"
  }
]

export function App () {
  return (
    <div className="project-tw-followCard">
      <div className="project-tw-followCard-info">
        <h1>Twitter Card</h1>
        <p>This is a simple Twitter card component.</p>
      </div>

      <section className="tw-cardList">
        {users.map(user => (
          <TwitterFollowCard 
            key={user.username} 
            userName={user.username} 
            name={user.name} 
          />
        ))}
      </section>
    </div>
  )
}