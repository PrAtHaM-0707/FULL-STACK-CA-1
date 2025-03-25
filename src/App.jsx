import './App.css'
import { TeamMemberCard } from './components/TeamMemberCard'

function App() {
  const data = [{
    name: "John Doe",
    title: "Software Engineer"
  }]

  return (
    <>
      <TeamMemberCard data = { data[0] } />
    </>
  )
}

export default App
