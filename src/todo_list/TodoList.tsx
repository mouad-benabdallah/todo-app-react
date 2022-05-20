import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'
import BottomNav from '../shared/BottomNav'
import * as UI from '../shared/ui'

/**
 * Ce fichier contient le composant de l'écran
 * de la liste des todos
 */

export type Todo = {
  id: string
  label: string
  done: boolean
}

export type Task = string

export type TaskList = Array<Todo>

export default function TodoList() {
  const [username, setUsername] = useState<string>('')
  const [task, setTask] = useState<Task>('')
  const [taskList, setTaskList] = useState<TaskList>([])

  useEffect(() => {
    const storeUser = localStorage.getItem('user')

    if (storeUser) {
      setUsername(JSON.parse(storeUser).displayName)
    }
  }, [])
  useEffect(() => {
    console.log('Souscription au topic "changeUsername"')

    const onUsernameChange = (topic: string, newUsername: string) => {
      console.log('récéption du username : ' + newUsername)
      setUsername(newUsername)
    }

    PubSub.subscribe('changeUsername', onUsernameChange)
    return () => {
      console.log('Désinscription au topic changeUsername')
      PubSub.unsubscribe(onUsernameChange)
    }
  }, [])
  // console.log('la valeure de task ' + task)
  const onTaskChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value)
  }
  const addTask = () => {
    if (!task) {
      return
    }
    const todo: Todo = {
      id: uniqid(),
      done: false,
      label: task,
    }

    const newlist: TaskList = [todo, ...taskList]
    setTaskList(newlist)
    setTask('')
  }

  const toggleTodo = (todo: Todo) => () => {
    const newList: TaskList = taskList.map(t => {
      if (t.id !== todo.id) {
        return t
      }
      return { ...t, done: !t.done }
    })

    setTaskList(newList)
  }

  const remouveTodo =
    (todo: Todo) => (e: React.SyntheticEvent<HTMLElement>) => {
      // console.warn('REMOVE !')
      e.stopPropagation()
      const newList: TaskList = taskList.filter(t => t.id !== todo.id)
      setTaskList(newList)
    }

  return (
    <UI.AppContainer>
      <UI.TopNav>
        <Link to="/" style={{ color: '#FFF' }}>
          <UI.TopNavIcon className="fa-solid fa-circle-chevron-left"></UI.TopNavIcon>
        </Link>

        <UI.TopNavTitle>Petites Courses</UI.TopNavTitle>
      </UI.TopNav>

      <UI.CenteredFlexContainer>
        <UI.Tag>
          <UI.TagIcon className="fa-solid fa-user"></UI.TagIcon>
          <UI.TagLabelContainer>
            <UI.TagLabelEntitled>Par</UI.TagLabelEntitled>
            <UI.TagLabel>{username}</UI.TagLabel>
          </UI.TagLabelContainer>
        </UI.Tag>
      </UI.CenteredFlexContainer>

      <UI.StretchFlexContainer>
        <UI.InputContainer>
          <UI.Input
            placeholder="votre todo ..."
            value={task}
            onChange={onTaskChange}
          />
          <UI.InputIcon className="fa-solid fa-circle-plus" onClick={addTask} />
        </UI.InputContainer>
      </UI.StretchFlexContainer>
      <UI.TodoListContainer>
        {taskList.length > 0 ? (
          taskList.map(todo => (
            <UI.Todo
              key={`todo-${todo.id}`}
              done={todo.done}
              onClick={toggleTodo(todo)}
            >
              <UI.TodoLabel done={todo.done}>{todo.label}</UI.TodoLabel>
              <UI.TodoIcon
                className="fa-solid fa-trash"
                onClick={remouveTodo(todo)}
              ></UI.TodoIcon>
            </UI.Todo>
          ))
        ) : (
          <p>Vous n'avez pas encore de taches</p>
        )}
      </UI.TodoListContainer>

      <BottomNav
        topBar={
          <UI.BottomNavAction>
            <UI.BottomNavShare>
              <i className="fa-solid fa-share"></i>
            </UI.BottomNavShare>
            <UI.BottomNavDelete>
              <i className="fa-solid fa-trash"></i>
            </UI.BottomNavDelete>
          </UI.BottomNavAction>
        }
      />
    </UI.AppContainer>
  )
}
