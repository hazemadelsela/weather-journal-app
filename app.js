let key =`f59894d9489fc7432311fd818f0dd28d`;
let app = document.getElementById('app')
let userInfo = document.getElementById('userInfo')
let holder = document.createElement('div')
holder.className ='holder zip'
let Zipcode = document.createElement('label')
Zipcode.setAttribute('for','zip')
let textZipCode = document.createTextNode('Enter Zipcode here')
let inputZip = document.createElement('input')
inputZip.setAttribute('type','text')
inputZip.setAttribute('id','zip')
inputZip.setAttribute('placeholder','enter zip code here')
let requiredZip = document.createAttribute('required')
inputZip.setAttributeNode(requiredZip)
Zipcode.appendChild(textZipCode)
holder.appendChild(Zipcode)
holder.appendChild(inputZip)
userInfo.appendChild(holder)

let holder_cuntry = document.createElement('div')
holder.className = 'holder cuntry'
let cuntryCode = document.createElement('label')
cuntryCode.setAttribute('for', 'cuntry')
let textCuntryCode = document.createTextNode('Enter Cuntry here')
let inputCuntry = document.createElement('input')
inputCuntry.setAttribute('type', 'text')
inputCuntry.setAttribute('id', 'cuntry')
inputCuntry.setAttribute('placeholder', 'enter cuntry code here')
let requiredcuntry = document.createAttribute('required')
inputCuntry.setAttributeNode(requiredcuntry)
cuntryCode.appendChild(textCuntryCode)
holder.appendChild(cuntryCode)
holder.appendChild(inputCuntry)
userInfo.appendChild(holder)

let holder_feel = document.createElement('div')
holder_feel.className = 'holder feel'
let feelingLabel = document.createElement('label')
feelingLabel.setAttribute('for', 'feelings')
let textFeelingCode = document.createTextNode('How are you feeling today?')
let textarea = document.createElement('textarea')
textarea.setAttribute('rows', '5')
textarea.setAttribute('cols','50')
textarea.setAttribute('id', 'feelings')
textarea.className = 'myInput'
textarea.setAttribute('placeholder', 'Enter your feelings here')
let requiredFeelings = document.createAttribute('required')
textarea.setAttributeNode(requiredFeelings)
feelingLabel.appendChild(textFeelingCode)
holder_feel.appendChild(feelingLabel)
holder_feel.appendChild(textarea)
userInfo.appendChild(holder_feel)

let button = document.createElement('input')
button.setAttribute('id', 'generate')
button.setAttribute('type', 'submit')
button.setAttribute('value', 'Generate')
holder_feel.appendChild(button)


let date = new Date();
let DateNew = date.getMonth()+'/' +date.getDay()+'/'+date.getFullYear();
let generate = document.getElementById('generate');
document.forms[0].addEventListener('click',(e) => {
    e.preventDefault()
    generate.addEventListener('click', async()=>{
    try{
    let zip = document.getElementById('zip').value
    let feelings = document.getElementById('feelings').value
        let cuntry = document.getElementById('cuntry').value
    let api = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`
    let respon = await fetch(api).then(res => res.json())
        let temp = respon.main.temp
    await fetch('/addweater',{method:'POST',
credentials:'same-origin',headers:{'Content-type':'application/json'}
, body:JSON.stringify({
    DateNew, temp, feelings,cuntry
})
})
let rest = await fetch('/getweather').then(res=>res.json())
        document.getElementById('date').innerHTML = rest.date,
            document.getElementById('cont').innerHTML = rest.cuntry.toUpperCase(),
            document.getElementById('temp').innerHTML = rest.temp,
            document.getElementById('content').innerHTML = rest.feelings.toUpperCase()
    }
    catch(err){
        console.log('error'+ err);
    }
})
})