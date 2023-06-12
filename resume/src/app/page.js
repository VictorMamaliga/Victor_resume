import ProfileCard from './components/molecules/ProfileCard.js';
import { getProjects } from "../../sanity/sanity-utils";
import Button from "./components/atoms/Button.js";
import { projects } from './helpers'

export default async function Home() {
  // NU DECOMMENTA URMATOAREA LINIE PLS
  // const projects = await getProjects();
  console.log(12234);
  console.log(projects)

  return (
    <>
      <header>Header</header>
      <main>
        <Button text={'my button'} />
        <footer>Footer</footer>
      </main>
    </>
  )
}
