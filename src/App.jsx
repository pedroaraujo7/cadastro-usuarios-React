import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } from './styles'


function App() {

  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>


      <Form>
        <Title>Cadastrar Usuários</Title>
        
        <ContainerInputs>
          <div>
            <InputLabel>Nome <span>*</span></InputLabel>
            <Input type="text" placeholder='Nome do usuário' />
          </div>
          
          <div>
            <InputLabel>Idade <span>*</span></InputLabel>
            <Input type="number" placeholder='Idade do usuário' />
          </div>
        </ContainerInputs>

          <div>
            <InputLabel>E-mail <span>*</span></InputLabel>
            <Input type='email' placeholder='E-mail do usuário' />
          </div>

        <Button>Cadastrar Usuário</Button>

      </Form>
    </Container>
  )
}

export default App
