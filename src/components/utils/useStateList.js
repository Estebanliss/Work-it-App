import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const useStateList = () => {
    const [textItem, setTextItem] = useState("")
    const [list, setList] = useState([])

    // const getData = async () => {
    //     try {
    //         const listInStorage = await AsyncStorage.getItem('LIST-TASK')
    //         setList(prevState => [...prevState, textItem])

    //         // return list != null ? JSON.parse(list) : null;
    //         console.log("Esto es el console.log de Get en useStateList", list)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const storeData = async (list) => {
    //     try {

    //         const updateListStorage = JSON.stringify(list)
    //         await AsyncStorage.setItem('LIST-TASK', updateListStorage)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    const newItem = () => setTextItem()
    // console.log("Esto es textItem desde useStateList", textItem)
    const updateList = () => setList()

    const addItem = () => {
        setList(prevState => [...prevState, textItem])
    }


    return (
        textItem,
        list,
        newItem,
        updateList

  )
}

export default useStateList;