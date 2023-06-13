import { getProjects } from "../../sanity/sanity-utils";

import Header from "./components/organisms/Header";
import Button from "./components/atoms/Button";
import ProfileCard from "./components/molecules/ProfileCard";
import { projects } from './helpers'


export default async function Home() {
  // NU DECOMMENTA URMATOAREA LINIE PLS
  // const projects = await getProjects();
  console.log(12234);
  console.log(projects)

  // Problema nr 2:
  // Daca termni repede, poti sa creezi o componenta-parinte
  // care sa cuprinda lista de proiecte pe care ai generat-o la primul punct, mai sus
  // Si sa mai curinda un h3 descriptiv
  // bafta

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
