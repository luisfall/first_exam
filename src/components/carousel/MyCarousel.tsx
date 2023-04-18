import React, { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import { Carousel } from 'react-bootstrap'
import { useEffect, useState } from 'react'

interface Names {
   name: string
}
async function getRepoNames(): Promise<string[]> {
   const repos = (await fetch('https://api.github.com/users/luisfall/repos').then((response) => response.json())) as Names[]
   const repoNames = repos.map((repo) => repo.name)
   return repoNames
}
const MyCarousel = () => {
   const [repos, setRepos] = useState<string[]>([])

   useEffect(() => {
      getRepoNames()
         .then((result) => {
            setRepos(result)
         })
         .catch((err) => {})
   }, [])
   return (
      <div className="m-3">
         <Carousel>
            {repos.map((repo: string) => (
               <Carousel.Item key={repo}>
                  <img className="d-block w-100" src={`https://via.placeholder.com/800x400?text=${repo}`} alt={repo} />
                  <Carousel.Caption>
                     <h3>{repo}</h3>
                     <p>This repository was very intersting to work in</p>
                  </Carousel.Caption>
               </Carousel.Item>
            ))}
         </Carousel>
      </div>
   )
}
export default MyCarousel
