import Header from "./components/organisms/Header";
import Button from "./components/atoms/Button";
import { projects } from './helpers'

import { getProjects } from "../../sanity/sanity-utils";

export default async function Home() {
  // NU DECOMMENTA URMATOAREA LINIE PLS
  // const projects = await getProjects();
  console.log(12234);
  console.log(projects)

  return (
    <>
      <Header />
      <main>
        <Button />
        <footer>Footer</footer>
      </main>
    </>
  )
}
