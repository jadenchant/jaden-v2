import type { NextPage } from 'next'
import ProjectForm from '../components/ProjectForm';
import SearchForm from '../components/SearchForm';
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main>
      <h1>Create a Project</h1>
      <ProjectForm />
      <hr />
      <h1>Find a Car</h1>
      <SearchForm />
    </main>
  )
}

export default Home
