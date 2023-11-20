let home = 0
let guest = 0

function addOne(id) {
    if (id == "home") 
    {
        home += 1
        document.getElementById("homeScore").textContent = home    
        leadingTeam()
    }
    else if(id == "guest")
    {
        guest += 1
        document.getElementById("guestScore").textContent = guest
        leadingTeam()
    }
}

function addTwo(id) {
    if (id == "home") 
    {
        home += 2
        document.getElementById("homeScore").textContent = home    
        leadingTeam()
    }
    else if(id == "guest")
    {
        guest += 2
        document.getElementById("guestScore").textContent = guest
        leadingTeam()
    }
}

function addThree(id) {
    if (id == "home") 
    {
        home += 3
        document.getElementById("homeScore").textContent = home   
        leadingTeam() 
    }
    else if(id == "guest")
    {
        guest += 3
        document.getElementById("guestScore").textContent = guest
        leadingTeam()
    }
}

function resetCounter() {
    home = 0
    guest = 0
    document.getElementById("homeScore").textContent = home 
    document.getElementById("guestScore").textContent = guest

    document.getElementById("homeLeadStatus").textContent = " "
    document.getElementById("guestLeadStatus").textContent = " "
}

function leadingTeam() {
    if (home>guest){
        document.getElementById("homeLeadStatus").textContent = "Leading"
        document.getElementById("guestLeadStatus").textContent = " "
    }

    else if (guest>home){
        document.getElementById("guestLeadStatus").textContent = "Leading"
        document.getElementById("homeLeadStatus").textContent = " "
    }

    else if (home == guest){
        document.getElementById("homeLeadStatus").textContent = "Tie"
        document.getElementById("guestLeadStatus").textContent = "Tie"
    }
}