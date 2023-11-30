import Head from 'next/head'
import TopBar from '../components/Layout/TopBar';
import React from 'react';
import Footer from '@/components/Layout/Footer';



export default function Home(props: any) {



  return (
    <>
      <Head>
        <title>TMS</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <TopBar />
      <div style={{ height: '75vh', overflowY: 'scroll' }}>

      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps = async (context: any) => {


  return {
    props: {}
  }
}