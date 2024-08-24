const textarea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".file-name input");
const selectMenu = document.querySelector(".save-as select");
const saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", ()=>{
    //getting selected option text
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
})

saveBtn.addEventListener("click", ()=>{
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    // URL.createObjectURL creates url taht represent passed object
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a"); //createing a tag
    link.download = fileNameInput.value;  //passing filename as download
    link.href = fileUrl;  //passing fileUrl as href value of link
    link.click();  //clicking link o the file download
});