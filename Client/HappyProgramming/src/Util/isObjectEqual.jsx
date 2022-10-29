const isObjectEqual = (o1,o2) =>{
    return JSON.stringify(o1) === JSON.stringify(o2)
}

export default isObjectEqual