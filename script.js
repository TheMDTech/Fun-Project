var age = prompt(`Enter your Age `),
    box1 = document.getElementById(`box1`),
    box2 = document.getElementById(`box2`),
    fail1 = document.getElementById(`fail1`),
    fail2 = document.getElementById(`fail2`)
if(age == ""){
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `Press Ctrl + R to Enter your age!!!!?`
}
else if(age < 0){
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `UUUUHHHHHhhh you are not even born yet!!!!!???`
}
else if(age <= 5){
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `when did you learned to type????`
}
else if(age > 5 && age <= 12){
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `sheee go and do your home work`

}
else if (age > 12 && age < 18 ){
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `you are under 18`
}

else if (age >= 18 && age <= 25)
{
    box1.style.display = "block",
    box2.style.display = "block",
    box2.innerHTML = `HMM you are young energetic you are probably safe to go!!`
}
else if (age >= 26 && age <= 35)
{
    box1.style.display = "block",
    box2.style.display = "block",
    box2.innerHTML = `Not too energetic but still safe to go`
}
else if (age >= 36 && age <= 45)
{
    box1.style.display = "block",
    box2.style.display = "block",
    box2.innerHTML = `well well well look whos there you are safe to go`
}
else if (age >= 46 && age <= 60)
{
    box1.style.display = "block",
    box2.style.display = "block",
    box2.innerHTML = `you should think about retirement but for now you are safe to go `
}
else if (age > 60 && age <= 80) {

    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `Nah you are gonna die soon Bye Bye!!`

}
else if (age >= 81 && age <= 100)
{
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `If you are still alive you got my respect`
}
else if (age >= 101 && age <= 120)
{
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `No one lives that long!! you must be a ghost`
}
else if (age > 121 )
{
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `No no no no, No one lives that long. You are not human `
}
else{
    fail1.style.display = "block",
    fail2.style.display = "block",
    fail2.innerHTML = `Enter the valid age `

}