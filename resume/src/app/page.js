import ProfileCard from './components/molecules/ProfileCard.js';
import { getProjects } from "../../sanity/sanity-utils";
import Button from "./components/atoms/Button.js";
import { projects } from './helpers'

export default async function Home() {
  // NU DECOMMENTA URMATOAREA LINIE PLS
  // const projects = await getProjects();
  console.log(12234);
  console.log(projects)

  // acuma Vcitore ai dat de dracu
  // trebuie sa randezi 2 proiecte pe site
  // am creeat variabila "projects" in care vei gasi structura a 2 proiecte din DB
  // tu vei itera peste aceasta variabila si o sa te folosesti de componenta ProfileCard ca sa afisezi proiectul
  // incearca sa nu te folosesti de chat GPT
  // bafta

  // variabila "projects" o mai poti vedea logata in terminal, dupa ce iti pornesti serverul


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
