import { useEffect, useState } from "react";

import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProfileCard from "./components/molecules/ProfileCard";
import { projects } from './helpers'
import CreateProject from "./components/molecules/CreateProject";

function App() {
  const postare = () => {
    console.log('iata clickul')

    fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: 'kyle'})
    }).then(r => r.json()).then(r => console.log(r))
  }

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(r => r.json())
      .then(r => console.log(r))
  }, [])

  return (
    <>
      <Header />
      <main>
        <button onClick={postare}>test</button>
        <Button text={'my button'} />
        <section>
          {projects.map(e => <ProfileCard key={e._id} name={e.name} job={e.description} imageUrl={e.image} />)}
        </section>
        
        <CreateProject/>
        <footer>Footer</footer>
      </main>
    </>
  )
}

export default App
