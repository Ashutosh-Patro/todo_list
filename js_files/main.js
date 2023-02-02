document.querySelector("input").addEventListener ('keyup',function (e) {
    console.log(e);
    if (e.key === 'Enter') {
        add()
    }
});

function add() {
    if (document.querySelector("#newtask input").value.length == 0) {
        alert("Kindly Enter Task Name!!!!");
    } else {
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="tick">
                    <i class="fas fa-solid fa-check"></i>
                </button>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>`
            
        document.querySelector("#newtask input").value = "";
        let tick_tasks = document.querySelectorAll(".tick");
        console.log(tick_tasks);

        for (let i = 0; i < tick_tasks.length; i++) {
            tick_tasks[i].onclick = function () {
                this.parentNode.style.textDecoration = "line-through";
            };
        }

        var current_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            };
        }
    }
}

document.querySelector("#clear-completed").onclick = function () {
    let tick_tasks = document.querySelectorAll(".tick");
    for (let i = 0; i < tick_tasks.length; i++) {
        if (tick_tasks[i].parentNode.style.textDecoration)
            tick_tasks[i].parentNode.remove();
    }
};

document.querySelector("#active").onclick = function () {
    let tick_tasks = document.querySelectorAll(".tick");
    for (let i = 0; i < tick_tasks.length; i++) {
        if (tick_tasks[i].parentNode.style.textDecoration) {
            tick_tasks[i].parentNode.style.display = "none";
        }
        else {
            tick_tasks[i].parentNode.style.display = "flex";
        }
    }
}

document.querySelector("#completed").onclick = function () {
    let tick_tasks = document.querySelectorAll(".tick");
    for (let i = 0; i < tick_tasks.length; i++) {
        if (!tick_tasks[i].parentNode.style.textDecoration) {
            tick_tasks[i].parentNode.style.display = "none";
        }
        else {
            tick_tasks[i].parentNode.style.display = "flex";
        }
    }
}

document.querySelector("#all").onclick = function () {
    let tick_tasks = document.querySelectorAll(".tick");
    for (let i = 0; i < tick_tasks.length; i++) {
        if (tick_tasks[i].parentNode.style.textDecoration) {
            tick_tasks[i].parentNode.style.display = "flex";
        }
        else if(!tick_tasks[i].parentNode.style.textDecoration) {
            tick_tasks[i].parentNode.style.display = "flex";
        }
    }
}