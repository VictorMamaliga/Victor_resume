import ProfileCard from './components/molecules/ProfileCard.js';
import { getProjects } from "../../sanity/sanity-utils";
import Button from "./components/atoms/Button.js";
//import { projects } from './helpers'

export const projects = [
  {
    slug: 'project-2',
    image: 'https://i.ytimg.com/vi/XelWZr_B7E4/maxresdefault.jpg',
    url: 'http://google.com',
    description: 'desssspfkgijidfkdg4234',
    _id: '6d848ad8-fd77-457c-a88c-9ca63149e1d5',
    _createdAt: '2023-06-12T15:45:04Z',
    name: 'Project 2'
  },
  {
    slug: 'project-3',
    image: 'https://i.ytimg.com/vi/XelWZr_B7E4/maxresdefault.jpg',
    url: 'http://google.com',
    description: 'desssspfkgijidfkdg4234',
    _id: '6d848ad8-fd77-457c-a88c-9ca6314',
    _createdAt: '2023-06-12T15:45:04Z',
    name: 'Project 2'
  },
  {
    url: 'http://youtube.com',
    description: 'descriere mica',
    _id: '8113fe78-faa9-4f23-b15d-abd017074b78',
    _createdAt: '2023-06-12T15:42:40Z',
    name: 'Proiect 1',
    slug: 'proiect-1',
    image: 'https://i.ytimg.com/vi/XelWZr_B7E4/maxresdefault.jpg'
  }
];

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
      <header>Header</header>
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
