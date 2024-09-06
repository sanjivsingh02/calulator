import Display from './Component/Display'
import styles from'./App.module.css'
import ButtonContainer from './Component/ButtonContainer'

function App() {
 

  return <div className={styles.calculator}>
 <Display></Display>
 <ButtonContainer></ButtonContainer>
  </div>
}

export default App
