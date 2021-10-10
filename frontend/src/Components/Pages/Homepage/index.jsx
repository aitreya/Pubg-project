import React , {useEffect} from 'react'
import Navbar from "../../Global/Navbar"
import {getTimmings} from "../../../WebService/Serives/Timmgs"

export default function Index() {
    useEffect(() => {
        let data = getTimmings()
        console.log(data)
    },[])
    return (
        <>
        <Navbar/>
        <div>
            
        </div>
        </>
    )
}