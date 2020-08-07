import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { callApidata } from '../Api/Api'
import { infor, list } from './listBookmark'
import ListframeBookmark from './ListframeBookmark'
function Bookmark(){
    const list1=list
    useEffect(()=>{
        let list=JSON.parse(localStorage.getItem('value'))
        if (list){
            console.log(list)
            list.forEach(async (id) => {
                callApidata(id,'i').then(res=>{
                    const data=infor.create(res.data)
                    list1.addTodo(data)
                    // const arr=a.push(data)
                    // const newArr=a.concat([])
                    // setA(newArr)
                    // list1.changelist(newArr)
                })
            });
        }
    },[])
    console.log(list1.list.length)
    
    return(
        <div>
            <ListframeBookmark list={list1}/>
        </div>
    )
}
export default observer(Bookmark)