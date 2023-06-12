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
  // trebuie sa randezi proiectele pe site ca si cum ar veni din DB
  // am creeat variabila "projects" in care vei gasi structura proiectelor din DB
  // te vei folosi de aceasta variabila ca sa afisezi proiectele
  // incearca sa nu te folosesti de chat GPT
  // bafta

  // Variabila "projects" o mai poti vedea logata in terminal, dupa ce iti pornesti serverul (linia 10 de mai sus)
  // nu uita sa faci commituri (quick-save practic) dupa ce ternimi o functionalitate



  // Problema nr 2:
  // Daca termni repede, poti sa creezi o componenta-parinte
  // care sa cuprinda lista de proiecte pe care ai generat-o la primul punct, mai sus
  // Si sa mai curinda un h3 descriptiv
  // bafta

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
