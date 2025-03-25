import React from 'react'

export const TeamMemberCard = ({data}) => {
  return (
   <div>
    <h1>{data.name}</h1>
    <h2>{data.title}</h2>
   </div>

  )
}
