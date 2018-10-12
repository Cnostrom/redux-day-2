export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}


export const addCustomNumber = (number) => {
    return {
        type: "ADD_CUSTOM",
        payload: number
    }
}