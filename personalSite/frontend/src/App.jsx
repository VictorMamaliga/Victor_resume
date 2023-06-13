import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProfileCard from "./components/molecules/ProfileCard";
import { projects } from './helpers'

function App() {
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
