import { Metadata } from "next";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Info } from "./_components/info";
import { Fonte } from "./_components/fonte";

export const metadata: Metadata = {
  title: 'BBSAzul',
  description: 'Salvando o oceano com pequenas ações!'
}

export default function HOME() {
  return (
    <main> 
      <Hero/>
      <About/>
      <Info/>
      <Fonte/>
    </main>
  )
}