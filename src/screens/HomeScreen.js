import React from 'react'
import HeroCard from "../components/HeroCard"
import ProductCard from "../components/ProductCard"
import Questions from "../components/Questions"
import ColorGrid from "../components/ColorGrid"

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