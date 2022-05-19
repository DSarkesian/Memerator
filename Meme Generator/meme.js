const form = document.querySelector("#memecreater")
const memeDispaly = document.querySelector("#memeDisplay")



form.addEventListener('submit',function(event){
  event.preventDefault()



  const newmeme=document.createElement('div')
  newmeme.classList.add('meme')

//create image set it to Url
  const memepic = document.getElementById("memepic")
  const newImg = document.createElement("img")
  newImg.setAttribute('src',memepic.value)
  newImg.setAttribute("id","memeimg")
  const divimage = document.createElement('div')
  divimage.setAttribute("id","divimg")
  divimage.append(newImg)
  newmeme.appendChild(newImg)


  //create uppertext
  const topTextInput = document.getElementById("topTextInput")
  const toptext=document.createElement("p")
  toptext.innerText=topTextInput.value
  toptext.setAttribute("id","toptextp")
  newmeme.append(toptext)
  topTextInput.value=""

  const bottomTextInput = document.getElementById("bottomTextInput")
  const bottomtext=document.createElement("p")
  bottomtext.innerText=bottomTextInput.value
  bottomtext.setAttribute("id","bottomtextp")
  newmeme.appendChild(bottomtext)
  bottomTextInput.value=""

  memeDispaly.appendChild(newmeme)
  newmeme.value=""



  newmeme.addEventListener("click",function(event){
    newmeme.remove()




  })












})
