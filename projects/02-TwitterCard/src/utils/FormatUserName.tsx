import React from "react"

interface FormatUserNameProps {
  username?: string;
}

export function FormatUserName ({username = ''}: FormatUserNameProps) {
  return (
    <span className="tw-followCard-username">@{username}</span>
  )
}