const gameScores =[14,21,33,59]
const favoriteThings =['raindrop on roses','whiskers on kitten','bright copper kettles ','warm wooden mutton']
const voters =[
    {
        name:'folly',
        age:21
    },
    {
        name:'babs',
        age:12
    },
]

function getLastItem<T>(array:T[]):T | undefined{
    let a =array[array.length -1]
    console.log(a)
    return a
}

export const AddToArray=<T>(array:T[],item:T):T[]=>{
  array.push(item)
  return array     
}
console.log(AddToArray(voters,{age:2,name:'good'}))

getLastItem(voters)
getLastItem(favoriteThings)
getLastItem(gameScores)

