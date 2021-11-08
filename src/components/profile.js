import React from "react"
import { useForm } from 'react-hook-form'
import { Card, Input, FormControl } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField'

const MAXSTEPS = 4
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const IndexPage = () => {

  // const register = React.createRef()
  const classes = useStyles()

  const [formStep, setFormStep] = React.useState(1)
  const { watch, register, formState:{errors} } = useForm({mode: "all"})
  const completeFormStep = () => {
    setFormStep(current => current + 1)
  }
  const backFormStep = () => {
    setFormStep(current => current - 1)
  }
  const voltar = () => {
    setFormStep(current => current = 1)
  }
  const renderButton = () => {
    if (formStep > 3) {
      return undefined
    } else if (formStep === 3){
      return (
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
            type="button"
            onClick={submitData}
            style={{
              marginRight: '20px'
            }}
          >
            Enviar
          </Button>
          <Button
            type="button"
            onClick={backFormStep}
            variant="contained"
          >
            Voltar
          </Button>
        </div>
      )
    } else if (formStep < 1 || formStep === 1) {
      return (
        <div style={{
          margin: '20px',
          width: '100%'
        }}>
          <Button
            type="button"
            onClick={completeFormStep}
            variant="contained" color="primary"
            style={{
              marginRight: '20px'
            }}
          >
            Próximo
          </Button>
        </div>
      )
    } else {
      return (
        <div style={{
          margin: '20px'
        }}>
          <Button
            type="button"
            onClick={completeFormStep}
            variant="contained" color="primary"
            style={{
              marginRight: '20px'
            }}
          >
            Próximo
          </Button>
          <Button
            type="button"
            onClick={backFormStep}
            variant="contained"
          >
            Voltar
          </Button>
        </div>
      )
    }
  }

  const submitData = () => {
  
    const dataJson = JSON.stringify(watch())
    fetch('http://localhost:3343/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: dataJson
    })
    completeFormStep()
  }
  return (
    <div>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <Card style={{
          width: '300px',
         
          display:  'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          marginTop: '20px',
          paddingBottom: '20px',
          boxShadow: '10px 10px 58px black'
        }}>
          <form style={{
            display:  'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '600px',
          }}>
            <div>
              <p>
                {formStep} de {MAXSTEPS}
              </p>
            </div>
            {formStep === 1 && (
              <section style={{
                  display:  'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: '500px'
                }}>
                <h2 className="font-semibold text-3xl mb-8">
                  Informações Pessoais
                </h2>
                <label style={{
                  marginTop: '10px'
                }} htmlFor="username">Nome</label>
                <Input
                  type="text"
                  id="username"
                  {...register("username", { required: true })}
                />
                {errors.username === 'required' && "First name is required"}
                <label style={{
                  marginTop: '10px'
                }} htmlFor="sobrenome">Sobrenome</label>
                <TextField
                  type="text"
                  id="sobrenome"
                  {...register("sobrenome")}
                />
                <label style={{
                  marginTop: '10px'
                }} htmlFor="email">E-mail</label>
                <Input
                  type="text"
                  id="email"
                  {...register("email")}
                />
                <label style={{
                  marginTop: '10px'
                }} htmlFor="telefone">Telefone</label>
                <Input
                  type="Number"
                  id="telefone"
                  {...register("telefone")}
                />
              </section>
            )}
            {formStep === 2 && (
              <section style={{
                display:  'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '500px'
              }}>
                <h2>Informações Pessoais</h2>
                <label style={{
                  marginTop: '10px'
                }} htmlFor="address">CEP</label>
                <Input
                  type="number"
                  id="cep"
                  {...register("cep")}
                />
                <label style={{
                  marginTop: '10px'
                }} htmlFor="address">Endereço 1</label>
                <Input
                  type="text"
                  id="address"
                  {...register("address")}
                />
                <label style={{
                  marginTop: '10px'
                }} htmlFor="address">Endereço 2</label>
                <Input
                  type="text"
                  id="addresstwo"
                  {...register("addresstwo")}
                />
              </section>
            )}
            {formStep === 3 && (
              <section style={{
                display:  'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '500px',
                marginLeft: '20px'
              }}>
                <h2>Informações Pessoais</h2>
                <div className="block mt-6">
                  <label style={{
                    marginTop: '10px'
                  }} htmlFor="address">Data de Nascimento</label>
                  <Input
                    type="date"
                    id="birth"
                    {...register("birth")}
                  />
                  <br/>
                  <label style={{
                    marginTop: '10px'
                  }} htmlFor="address">CPF</label>
                  <Input
                    type="number"
                    id="birth"
                    {...register("cpf")}
                  />
                  <br/>
                  <label style={{
                    marginTop: '10px'
                  }} htmlFor="address">Renda Mensal</label>
                  <Input
                    type="number"
                    id="pay"
                    {...register("pay")}

                  />
                </div>
              </section>
            )}
            {formStep === 4 && (
              <section style={{height: '100px'}}>
                <h2>Cadastro Realizado!</h2>
                <Button onClick={voltar} variant="contained" color="primary">Novo Cadastro</Button>
              </section>
            )}
            {renderButton()}
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          </form>
        </Card>
      </div>
    </div>
  )
}

export default IndexPage
