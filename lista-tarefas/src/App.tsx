//css
import './App.css';
import { Container } from './components/Container';
import { TodoProvider } from './contexts';
import { DefaultForm } from './features/DefaultForm';
import { TasksBox } from './features/TasksBox';

function App() {

  return (
    <>
      <TodoProvider>
        <Container>
          <h1 className='title'>Lista de Tarefas</h1>
          <DefaultForm />
          <TasksBox />
        </Container>
      </TodoProvider>

    </>
  )
}

export default App
