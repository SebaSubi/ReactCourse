import {useState, useEffect} from "react"

const Component = () => {
    const [value, setValue] = useState(false)

    useEffect( () => { //Should be used in the body
        //This will always, minimum, execute 1 time
        console.log("Code to be executed")
    }, listOfDependencies)//in the second parameter, you give it an array, but this parameter is not required, if you put nothing here,
    //the code will execute each time the component is rendered
}