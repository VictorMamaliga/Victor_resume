import { getProjects } from "../../sanity/sanity-utils";
import Button from "./components/atoms/Button";
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
        <Button />
        <footer>Footer</footer>
      </main>
    </>
  )
}
