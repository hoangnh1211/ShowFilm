import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { callApidata } from '../Api/Api'
import { infor, listfilm } from './listBookmark'
import ListframeBookmark from './ListframeBookmark'
function Bookmark(){
    let list1=JSON.parse(localStorage.getItem('value'))

    useEffect(()=>{
        if (list1){
            console.log(list1)
            listfilm.changelist([])
            list1.forEach(async (id) => {
                callApidata(id,'i').then(res=>{
                    const data=infor.create(res.data)
                    listfilm.addTodo(data)
                })
            });
        }
    },[])
    console.log('a')
    return(
        <div>
            <ListframeBookmark list={listfilm.shop}/>
        </div>
    )
}
export default observer(Bookmark)