import { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './styles.module.css';

type Lead = {
  data: number,
  nome: string,
  email: string
}
const leads: Lead[] = []

export default function Form() {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ date, setDate ] = useState(Date.now())

  function createLead(date: number, name: string, email: string): Lead {
    return {data: date, nome: name, email: email}
  }

  function handleForm(e: any) {
    e.preventDefault()
    setDate(Date.now())
    let newLead = createLead(date, name, email)
    leads.push(newLead)
    localStorage.setItem('leads', JSON.stringify(leads))
    setName('')
    setEmail('')
    Swal.fire('Cadastrado com sucesso!')
  }

  return (
    <form className={styles.formContainer} onSubmit={handleForm} >
      <h2>Cadastro</h2>
      <div className={styles.inputField}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Nome Completo" value={name} required onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className={styles.inputField}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" placeholder="E-mail" value={email} required onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className={styles.btnSend}>ENVIAR</button>
    </form>
  )
}
