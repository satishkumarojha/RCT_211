import React from 'react'
import{ Link} from 'react-router-dom'
export const TodoItem = ({todoitems}) => {
  return (
    <div>
        {todoitems?.map((items)=>{
            return <div key={items.id}>
                <Link to={`/todos/${items.id}`}>
                <div>{items.task}</div>
                </Link>
                </div>
        })}
    </div>
  )
}
