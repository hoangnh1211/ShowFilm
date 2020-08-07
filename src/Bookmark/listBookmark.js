import { types } from 'mobx-state-tree'

export const infor=types.model('infor',{
    Title:types.string,
    Poster:types.string,
    imdbID:types.string,
})
export  const listBookmark=types.model({
    list:types.optional(types.array(infor),[])
    })
    .views((self) => ({
        get shop() {
            return  (self.list)
        }
    }))
    .actions( (self) => {
        function addTodo(infor){
            self.list.push(infor)
            console.log(self.list)
        }
        function  changelist(newList){
            self.list=newList
        }
        return {
            addTodo,
            changelist
        }
    })
export const list=listBookmark.create()
