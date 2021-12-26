import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  
  return (
    <>
    <Head>
      <title>Clone Wars</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <NavBar />
    <div className='w-2/3 mt-24 mx-auto'>
    <h1 className="text-3xl font-bold">
      This is a compilation of few sites that I built 
      from the ground up, just from looking at the existing 
      sites, seeing their functionality, and working through building them.
    </h1>
    <h1 className="text-3xl font-bold mt-12">
      Most of these are Works In Progress... (ie. continually working on new features)
    </h1>

    <h1 className="text-3xl font-bold mt-12">
      I imported packages when I needed them, grabbed icons 
      and code snippets when needed.
    </h1>
    <h1 className="text-3xl font-bold mt-12">
      Obviously, if you look at any of these sites, I 
      am not trying to profit anything here...
    </h1>
    </div>
    
    </>
    
  )
}
