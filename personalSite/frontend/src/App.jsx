import { useEffect } from "react";

import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProfileCard from "./components/molecules/ProfileCard";
import { projects } from './helpers'

function App() {
  useEffect(() => {
    // fetch('https://swapi.dev/api/planets/3')
    //   .then(r => r.json())
    //   .then(r => console.log(r));

    fetch('http://localhost:8080/api', {
      mode: 'no-cors'
    })
      .then(r => r.json())
      .then(r => console.log(r))
  }, [])

  return (
    <>
      <Header />
      <main>
        <Button text={'my button'} />
        <section>
          {projects.map(e => <ProfileCard key={e._id} name={e.name} job={e.description} imageUrl={e.image} />)}
        </section>
        <footer>Footer</footer>
      </main>
    </>
  )
}

export default App
