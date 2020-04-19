const initState = {
    projects: [
        { id: '1', title: 'help find peach', content: 'bleh'},
        { id: '2', title: 'collect all the stars', content: 'bleh bleh'},
        { id: '3', title: 'egg hunt with yoshi', content: 'bleh bleh bleh'}
    ]
} 

const projectReducer = (state = initState, action) => {
    return state 
}

export default projectReducer 