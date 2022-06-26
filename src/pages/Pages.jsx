import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { SingleItem } from '../components/SingleItem';
import { EditPage } from './EditPage';
import { Home } from './Home';
export const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todos/:id' element={<SingleItem/>}/>
            <Route path='/todos/:id/edit' element={<EditPage/>}/>
        </Routes>
    </div>
  )
}
