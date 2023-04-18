import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

interface Names {
   name: string
}
async function getRepoNames(): Promise<string[]> {
   const repos = (await fetch('https://api.github.com/users/luisfall/repos').then((response) => response.json())) as Names[]
   const repoNames = repos.map((repo) => repo.name)
   console.log(repoNames)
   return repoNames
}
const Carousel = () => {
   getRepoNames()
      .then((result) => {
         console.log(result)
      })
      .catch((err) => {
         console.log('error')
      })
   return <div></div>
}
export default Carousel
