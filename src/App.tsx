import './App.css';
import { IconButton, TextField } from '@mui/material'
import { Add, Delete } from '@mui/icons-material'
import { useState } from 'react';
import React from 'react';

interface TodoItem {
  id: Number,
  value: String
}

let count = 1

export const App: React.FC = () => {

  const [list, setList] = useState<TodoItem[]>([{ id:0, value: '' }]) 

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList(prev => prev.map(item => item.id === id ? {...item,value} : item))
  }

  const handleDelete = (id: TodoItem['id']) => {
    setList(prev => prev.filter(item => item.id !==id))
  }

  const handleAdd = (index: number) => {
    const newItem = { id: count++, value: '' }
    setList(prev => [...prev.slice(0, index + 1), newItem, ...prev.slice(index +1)])
  }

  return (
    <div className="App">
      {list.map((item, index) => (
        <div>
          <TextField 
            value={item.value}
            onChange={e => handleChange(e.currentTarget.value, item.id)}
          />
          <IconButton onClick={() => handleAdd(index)}>
            <Add />
          </IconButton>
          {list.length > 1 && (
            <IconButton onClick={() => handleDelete(item.id)}>
              <Delete />
            </IconButton>
          )}
        </div>
      ))}
    </div>
  );
}

