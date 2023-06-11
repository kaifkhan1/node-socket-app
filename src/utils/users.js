const users = []

const addUser = ({id,username,room})=>{
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!room||!username){
        return{
            error : "Username and Room is Required"
        }
    }

    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    if(existingUser){
        return {
            error : "Username already used"
        }
    }

    const user = {id,username,room}
    users.push(user)
    return {user}
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=>user.id===id)

    const user = users[index]

    if(index!==-1){
        users.splice(index,1)[0]
        return user
    }


}

const getUser = (id)=>{
    return users.find((user)=>user.id===id)
}

const getUserInRoom = (room)=>{
    room = room.trim().toLowerCase()
    return users.filter((user)=>user.room===room)
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}