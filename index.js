document.addEventListener("DOMContentLoaded", function(){

    
const addBtn = document.getElementById("search-btn")
const checkBox = document.getElementById("check-box")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")
const clearBtn = document.getElementById("clear-btn")
const pendingTask = document.getElementById("clear-task")
const completedTask = document.getElementById("completed-tasks")
const completedH6 = document.getElementById("h6-completed")

let countTask = 0

pendingTask.innerHTML = `You have ${countTask} pending Tasks.`

function saveData() {
    localStorage.setItem("data", listEl.innerHTML)
}


addBtn.addEventListener("click", function () {
   
     if (inputEl === ''){
        alert("You need to write something") 
    } else {
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.innerHTML = "X"
        li.innerHTML = inputEl.value
        listEl.appendChild(li)
        li.appendChild(span)
        countTask++
        pendingTask.innerHTML = `You have ${countTask} pending Tasks.`
    }
    inputEl.value = ""
    saveData()
})


listEl.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
        if (e.target.classList.contains("checked")) {
            completedTask.appendChild(e.target)
            if (completedTask.querySelectorAll("li.checked").length > 0){
                completedH6.textContent = "Completed"
            }
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
        countTask--
        pendingTask.innerHTML = `You have ${countTask} pending Tasks.`
    }
}, false)



clearBtn.addEventListener("click", function(e) {
    const listItems = listEl.querySelectorAll("li")
    const completedItems = completedTask.querySelectorAll("li")
    listItems.forEach(function(e) {
        e.remove()
        countTask = 0
        pendingTask.innerHTML = `You have ${countTask} pending Tasks.`
    })
    completedItems.forEach(function(e) {
        e.remove()
        countTask = 0
        pendingTask.innerHTML = `You have ${countTask} pending Tasks.`
    })
    if (completedTask.querySelectorAll("li.checked").length === 0) {
        completedH6.innerHTML = ""
    }
})



completedTask.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        if (!e.target.classList.contains("checked")) {
            listEl.appendChild(e.target)
            if (completedTask.querySelectorAll("li.checked").length === 0) {
                completedH6.innerHTML = ""
            }
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        countTask--
        pendingTask.innerHTML = `You have ${countTask} pending Tasks.`
            if (completedTask.querySelectorAll("li.checked").length === 0) {
            completedH6.innerHTML = ""
            }
    }
})







})
