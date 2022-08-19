import React from 'react'
import Head from 'next/dist/shared/lib/head'

const HeadElements = () => {
  return (
    <Head>
      {/* title website */}
      <title>Manuel Setyo Portfolio</title>

      {/* metadata */}
      <meta name="description" content="Website Portfolio by Manuel Setyo" />
      
      <link rel="icon" href="./favicon.ico" />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>

      {/* Fontawesome Icons */}
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.2/css/all.css" />
    </Head>
  )
}

export default HeadElements