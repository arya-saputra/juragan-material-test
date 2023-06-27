const selectInput = document.querySelectorAll(".input-select");
            
for(var h=0; h < selectInput.length;h++) {
    const groupEl = selectInput[h].getAttribute("data-group");
    selectInput[h].addEventListener("focus", (elm) => {
        const dataOpt = elm.target.getAttribute("data-options")
        const optInput = document.querySelector(dataOpt);
        optInput.style.display="block";

        optInput.addEventListener("mouseleave",() => {
            hideOptions(dataOpt);
        });

        const optItem = optInput.querySelectorAll(".option-item");
        for(var i=0; i < optItem.length;i++) {
            optItem[i].addEventListener("click", (el) => {
                if (elm.target.classList.contains("multi-value")) {
                    checkOption(el.target, groupEl, elm.target)
                } else {
                    elm.target.value = el.target.innerHTML;
                    hideOptions(dataOpt);
                }
            });
        }
    });
}

function hideOptions(el) {
    const optInput = document.querySelector(el);
    optInput.style.display="none";
}


var selectArr = [];

function checkOption(el,elGroup,elInput,val) {
    console.log(el)
    const thisVal = el.innerHTML;
    const idName = val?val.replace(/\s+/g, '-').toLowerCase():thisVal.replace(/\s+/g, '-').toLowerCase();

    if (el.style.background=="red") {
        el.removeAttribute("style");

        if(selectArr.includes(thisVal)) {
            const removeEl = document.getElementById('tag-'+idName);
            removeEl.remove();
        }
    } else {
        el.style.background="red"
        const newEl = document.createElement("div");
        if (val) {
            newEl.innerHTML = `<div id='tag-${idName}' style='background:grey; width:max-content; border-radius:10px; text-align:center; padding:5px; color:white;'>${val}</div>`;
            selectArr.push(val);
        } else {
            newEl.innerHTML = `<div id='tag-${idName}' style='background:grey; width:max-content; border-radius:10px; text-align:center; padding:5px; color:white;'>${thisVal}</div>`;
            selectArr.push(el.innerHTML);
        }
        document.querySelector(elGroup).insertBefore(newEl,elInput);
    }
}

const closeModal = document.querySelectorAll(".modal-close");

for(var k=0; k < closeModal.length; k++) {
    closeModal[k].addEventListener("click", (el) => {
        el.target.parentNode.parentNode.parentNode.style.display='none';
    });
};

const openModal = document.querySelectorAll(".modal-open");
for(var k=0; k < openModal.length; k++) {
    openModal[k].addEventListener("click", (el) => {
        const dataModal = el.target.getAttribute("data-modal");
        console.log(dataModal);
        document.querySelector(dataModal).style.display="flex";
    });
};