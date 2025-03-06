import Sect from './components/Section/Sect';
import { createContext } from 'react'
export const MainPropsContext = createContext()
function App() {
  const Props = {
    key1: {
      text: 'Картинка1',
      src: 'src/components/pict.jpg',
    },
    key2: {
      text: 'Картинка2',
      src: 'src/components/pict.jpg',
    },
    key3: {
      text: 'Картинка3',
      src: 'src/components/pict.jpg',
    },
  }
  

  return (
    <>
      <MainPropsContext.Provider value={Props}>
        <Sect/>
      </MainPropsContext.Provider>
    </>
  )
}

export default App
