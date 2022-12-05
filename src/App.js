import { createContext, useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header/Header'
import MoviesList from './components/Movies/MoviesList'
import Container from './layouts/Container'
import Section from './layouts/Section'

export const TitleContext = createContext()
export const ToggleContext = createContext()

function App() {
  const [toggleType, setToggleType] = useState()
  const ContextType = { toggleType, setToggleType }

  return (
    <>
      <Header />
      <Container>
        <Banner />
        <TitleContext.Provider value={['Streaming', 'On Tv', 'For Rent', 'In Theatres']}>
          <ToggleContext.Provider value={ContextType}>
            <Section title="What's Popular">
              <MoviesList />
            </Section>
          </ToggleContext.Provider>
        </TitleContext.Provider>
      </Container>
    </>
  )
}

export default App
