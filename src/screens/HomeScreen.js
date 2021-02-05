import React from 'react'
import HeroCard from "../components/Homescreen/HeroCard"
import ProductCard from "../components/Homescreen/ProductCard"
import Questions from "../components/Homescreen/Questions"
import ColorGrid from "../components/Homescreen/ColorGrid"

const HomeScreen = () => {
    return (
        <>
      <HeroCard/>
      <ProductCard/>
      <Questions/>
      <ColorGrid/>
        </>
    )
}

export default HomeScreen