import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as UI from '../shared/ui'
import { auth } from '../Util/firebase'

export default function Subscription() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [usernameError, setUsernameError] = useState<String>('')
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()

  const onChange =
    (setter: (v: string) => void) =>
    (e: React.SyntheticEvent<HTMLInputElement>) =>
      setter(e.currentTarget.value)

  const onSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault()

    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    await updateProfile(credential.user, {
      displayName: username,
    })
    navigate('/')
    console.log(credential)

    localStorage.setItem('user', JSON.stringify(credential.user))
  }
  useEffect(() => {
    if (!username) {
      setUsernameError("vous devez spécifier un nom d'etulisateur")
      return
    }
    setUsernameError('')
  }, [username])

  return (
    <UI.AppContainer as="form" onSubmit={onSubmit}>
      <h1>Inscription</h1>
      <UI.InputContainer>
        <UI.Input
          name="username"
          placeholder="Nom d'utilisateur"
          onChange={onChange(setUsername)}
          value={username}
        />
        <p>{usernameError}</p>
      </UI.InputContainer>
      <UI.InputContainer>
        <UI.Input
          name="email"
          placeholder="Email"
          onChange={onChange(setEmail)}
          value={email}
        />
      </UI.InputContainer>
      <UI.InputContainer>
        <UI.Input
          name="password"
          placeholder="Mot de passe"
          onChange={onChange(setPassword)}
          value={password}
        />
      </UI.InputContainer>
      <button type="submit">S'inscire</button>
    </UI.AppContainer>
  )
}
