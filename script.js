/* https://www.superheroapi.com/api.php/10223569763528853 */


console.log('hello there!.....')

const SuperHeroImage=document.getElementById('img')
const randomhero=document.getElementById('new-hero')
const PowerStatus=document.getElementById('powerstats')

const Token='10223569763528853'
const BASE_URL=`https://www.superheroapi.com/api.php/${Token} `
// 
const getSuperHero=(id)=>{
    fetch(`${BASE_URL}/${id}`)
    .then(Response=>Response.json())
    .then(json=>{
        let heroname=json.name
        stats=GetStats(json)
        HeroName.innerHTML=`<h3>${heroname}</h3>`
        SuperHeroImage.innerHTML=`<img src='${json.image.url}' width=300 height=400 />`
        console.log(json.name)
        PowerStatus.innerHTML=stats
        // console.log()


    })
}
 

const random=()=>{
    randomher=Math.floor(Math.random()*731)+1
    console.log(randomher)
}


randomhero.onclick=()=>{
    random()
    getSuperHero(randomher)
    
}


//SearchType

const InputBox=document.getElementById('input-box')
const SearchButton=document.getElementById('searchbutton')
const HeroName=document.getElementById('sup-name')


const searchSuperHero=(input)=>{
 console.log(InputBox.value)
 fetch(`${BASE_URL}/search/${input}`)
 .then(Response=>Response.json())
 .then(json=>{
    hero=json.results[0]
    stats=GetStats(hero)
    let heroname=hero.name
    HeroName.innerHTML=`<h3>${heroname}</h3>`
    SuperHeroImage.innerHTML=`<img src='${hero.image.url}'height=300px width=200px/>`
    PowerStatus.innerHTML=stats
    
 })  
}


//we can make the emoji for each keys inside of object by this method
const objectToEmoji={
    intelligence:'🧠',
    strength:'💪',
    speed:'🏃‍♂️',
    durability:'🏋️',
    power:'🌟',
    combat:'🤺'
}




//PowerStat
const GetStats=(Character)=>{

// for(stat in Character.powerstats){
    //     console.log(stat)
    // }

    //wecan make easy way todo loop between the keys in  an object by "object.keys" method

    const status=Object.keys(Character.powerstats).map(stat=>{
        return `<p>${objectToEmoji[stat]}${stat}:${Character.powerstats[stat]}</p>`
    })
    console.log(status.join(''))
return status.join('')



    // console.log(Character.powerstats.strength)
}

SearchButton.onclick=()=>{searchSuperHero(InputBox.value)}
// SearchButton.onclick=()=>{console.log('ant-man')}