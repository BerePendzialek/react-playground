import './App.css'
import React from 'react'
import AppHeader from '../AppHeader'
import Card from '../Card'

export default function App() {
  return (
    <>
      <AppHeader title="First steps in React" />
      <Card
        radius="20"
        color="hotpink"
        question="How do I install react?"
        answer="Use the following npm command..."
        showAnswer
      />
      <Card
        radius="20"
        color="yellow"
        question="What can we do with React?"
        answer="Create components"
        showAnswer
      />
      <Card
        radius="20"
        color="royalblue"
        question="What is JSX?"
        answer="It is similar to the syntax of HTML"
        showAnswer
      />
    </>
  )
}
