import { useEffect, useState } from "react";

import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProfileCard from "./components/molecules/ProfileCard";
import { projects } from './helpers'


function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {

    fetch('http://localhost:8080/api')
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
