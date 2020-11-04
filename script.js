const welcome = 'Witaj w programie Creator CV_A.Ł 1.0 .W tym  programie możesz edytować cv i exprotować dokument do pliku pdf . Co chcesz zrobić ? ';
const answer = document.querySelector('.przywitanie');
const _buttons = document.querySelector('.buttons');
const btn_Edit_date = document.querySelector('.edit_date');
const notePanel = document.querySelector('.note-panel');
const notePanel_2 = document.querySelector('.note-panel_2');
const notePanel_3 = document.querySelector('.note-panel_3');
const notePanel_4 = document.querySelector('.note-panel_4');
const notePanel_5 = document.querySelector('.note-panel_5');
const cancelBtn = document.querySelector('.cancel');
const cancelBtn_2 = document.querySelector('.cancel_2');
const cancelBtn_3 = document.querySelector('.cancel_3');
const cancelBtn_4 = document.querySelector('.cancel_4');
const cancelBtn_5 = document.querySelector('.cancel_5');
const saveBtn = document.querySelector('.save');
const saveBtn_2 = document.querySelector('.save_2');
const saveBtn_3 = document.querySelector('.save_3');
const saveBtn_4 = document.querySelector('.save_4');
const saveBtn_5 = document.querySelector('.save_5');
const textarea = document.querySelector('#text');
const textarea_2 = document.querySelector('#text_2');
const textarea_3 = document.querySelector('#text_3');
const textarea_4 = document.querySelector('#text_4');
const textarea_5 = document.querySelector('#text_5');
const error = document.querySelector('.error');
const name = document.querySelector('.imie_nazwisko');
const email = document.querySelector('.email');
const tel = document.querySelector('.telefon');
const urodziny = document.querySelector('.urodziny');
const lokalizacja = document.querySelector('.lokalizacja');
const git = document.querySelector('.git_adres');
const adres_www = document.querySelector('.adres_www');
const btn_editEducation = document.querySelector('.edit_education');
const btn_edit_experience = document.querySelector('.edit_experience');
const szkolaData = document.querySelector('.szkola_1_data');
const szkolaDane = document.querySelector('.szkola_1_dane');
const szkolaRodzaj = document.querySelector('.szkola_1_rodzaj');
const szkolaData_2 = document.querySelector('.szkola_2_data');
const szkolaDane_2 = document.querySelector('.szkola_2_dane');
const szkolaRodzaj_2 = document.querySelector('.szkola_2_rodzaj');
const szkolaData_3 = document.querySelector('.szkola_3_data');
const szkolaDane_3 = document.querySelector('.szkola_3_dane');
const szkolaRodzaj_3 = document.querySelector('.szkola_3_rodzaj');
const umiejetnosci_ = document.querySelector('.umiejetnosci_');
const pracaData_1 = document.querySelector('.praca_1_data');
const pracaDane_1 = document.querySelector('.praca_1_dane');
const pracaRodzaj_1 = document.querySelector('.praca_1_rodzaj');
const pracaData_2 = document.querySelector('.praca_2_data');
const pracaDane_2 = document.querySelector('.praca_2_dane');
const pracaRodzaj_2 = document.querySelector('.praca_2_rodzaj');
const btn_editSkills = document.querySelector('.edit_skills');
const btn_editInterests=document.querySelector('.edit_interests')
const ul = document.querySelector("#dodanie");
const ul_2 = document.querySelector("#dodanie_2");
const hr = document.querySelector(".linia_3");





// alert(nodelist.length);


time = 50;
indexText = 0;
let count = 0;
let selectedValue;



const addNote =() =>{
    if(textarea.value !== '' && category.options[category.selectedIndex].value !='0' ){
        createNote();
        error.style.visibility = 'hidden'
    }else {
        error.style.visibility='visible'
    }
}

const createNote = ()=>{
    if ((category.options[category.selectedIndex].value =='1'))
    {
        name.textContent =textarea.value;
        textarea.value="";
    }else if ((category.options[category.selectedIndex].value =='2')){
        email.textContent =textarea.value;
        textarea.value="";
    }else if ((category.options[category.selectedIndex].value =='3')){
        tel.textContent =textarea.value;
        textarea.value="";
    }else if ((category.options[category.selectedIndex].value =='4')){
        urodziny.textContent =textarea.value;
        textarea.value="";
    }else if ((category.options[category.selectedIndex].value =='5')){
        lokalizacja.textContent =textarea.value;
        textarea.value="";
    }else if ((category.options[category.selectedIndex].value =='6')){
        git.textContent =textarea.value;
        textarea.value="";
    }else if ((category.options[category.selectedIndex].value =='7')){
        adres_www.textContent =textarea.value;
        textarea.value="";
    }
}

const addNote_2 =() =>{
    if(textarea_2.value !== '' && category_2.options[category_2.selectedIndex].value !='0' ){
        createNote_2();
        error.style.visibility = 'hidden'
    }else {
        error.style.visibility='visible'
    }
}

const createNote_2 = ()=>{
    if ((category_2.options[category_2.selectedIndex].value =='1')){
        szkolaData.textContent =textarea_2.value;
        textarea_2.value="";
    }else if ((category_2.options[category_2.selectedIndex].value =='2')){
        szkolaDane.textContent =textarea_2.value;
        textarea_2.value="";
    }else if ((category_2.options[category_2.selectedIndex].value =='3')){
        szkolaRodzaj.textContent =textarea_2.value;
        textarea_2.value="";
    }else if ((category_2.options[category_2.selectedIndex].value =='4')){
        szkolaData_2.textContent =textarea_2.value;
        textarea_2.value="";
    }else if ((category_2.options[category_2.selectedIndex].value =='5')){
        szkolaDane_2.textContent =textarea_2.value;
        textarea_2.value="";
    }else if ((category_2.options[category_2.selectedIndex].value =='6')){
        szkolaRodzaj_2.textContent =textarea_2.value;
        textarea_2.value="";
    }else if ((category_2.options[category_2.selectedIndex].value =='7')){
        szkolaData_3.textContent =textarea_2.value;
        textarea_2.value="";
    }else if ((category_2.options[category_2.selectedIndex].value =='8')){
        szkolaDane_3.textContent =textarea_2.value;
        textarea_2.value="";
    }else if ((category_2.options[category_2.selectedIndex].value =='9')){
        szkolaRodzaj_3.textContent =textarea_2.value;
        textarea_2.value="";
    }
}

const addNote_3 =() =>{
    if(textarea_3.value !== '' && category_3.options[category_3.selectedIndex].value !='0' ){
        createNote_3();
        error.style.visibility = 'hidden'
    }else {
        error.style.visibility='visible'
    }
}

const createNote_3 = ()=>{
    if ((category_3.options[category_3.selectedIndex].value =='1')){
        pracaData_1.textContent =textarea_3.value;
        textarea_3.value="";
    }else if ((category_3.options[category_3.selectedIndex].value =='2')){
        pracaDane_1.textContent =textarea_3.value;
        textarea_3.value="";
    }else if ((category_3.options[category_3.selectedIndex].value =='3')){
        pracaRodzaj_1.textContent =textarea_3.value;
        textarea_3.value="";
    }else if ((category_3.options[category_3.selectedIndex].value =='4')){
        pracaData_2.textContent =textarea_3.value;
        textarea_3.value="";
    }else if ((category_3.options[category_3.selectedIndex].value =='5')){
        pracaDane_2.textContent =textarea_3.value;
        textarea_3.value="";
    }else if ((category_3.options[category_3.selectedIndex].value =='6')){
        pracaRodzaj_2.textContent =textarea_3.value;
        textarea_3.value="";
    }
}

const addNote_4 =() =>{
    if(textarea_4.value !== ''){
       
       
        createNote_4();
        
        
        error.style.visibility = 'hidden'
    }else {
        error.style.visibility='visible'
    }
}

const createNote_4 = ()=>{
    let ul = document.getElementById("dodanie");
    let nodelist = ul.getElementsByTagName("LI");
     
    
    // let praragraf = document.getElementById('dodanie');

         
        let value =textarea_4.value;
        let li =document.createElement('li');

         li.textContent = value;

         let listItem = ul.appendChild(li);

        if(nodelist.length =="6"){

         hr.style.display="block"
        }
         textarea_4.value="";
        
         
         
      console.log(nodelist.length);
        
}

const addNote_5 =() =>{
    if(textarea_5.value !== ''){
       
       
        createNote_5();
        
        
        error.style.visibility = 'hidden'
    }else {
        error.style.visibility='visible'
    }
}

const createNote_5 = ()=>{
    
    // let praragraf_2 = document.getElementById('dodanie_2');
    let ul_2 = document.getElementById("dodanie_2");
         
        let value_2 =textarea_5.value;
        let li_2 =document.createElement('li');

         li_2.textContent = value_2;

         let listItem_2 = ul_2.appendChild(li_2);

       
         textarea_5.value="";
        
        
}
const closePanel = () =>{
    notePanel_3.style.display = 'none';
    notePanel_5.style.display = 'none';
    notePanel_4.style.display = 'none';
    notePanel_2.style.display = 'none';
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    textarea.value ='';
    category.selectedIndex = 0;
     
 }
const addletter =()=>{

    const wel = ` ${welcome}`;
    answer.textContent += wel[indexText];
    indexText++;
    if (indexText === wel.length) clearInterval(indexTyping);
    

}
const przyciski = () => {
    _buttons.style.display = "block";
    _buttons.classList.add('.animation_buttons');
}

indexTyping = setInterval(addletter, time);
setTimeout(przyciski, 7500);


const editDate = () =>{

    notePanel.style.display= "flex";

}

const editEdu = () =>{

    notePanel_2.style.display= "flex";

}

const editExperience = () =>{

    notePanel_3.style.display= "flex";

}
const editSkill = () =>{
    hr.style.display="none";
    ul.textContent="";
    notePanel_4.style.display= "flex";

}

const editInterests = () =>{
    ul_2.textContent="";
    notePanel_5.style.display= "flex";
}





/* PDF */
function genPDF() {
    
    html2canvas(document.body, {
        onrendered: function (canvas) {
            var img = canvas.toDataURL("img/PNG");
            var doc = new jsPDF();
            doc.addImage(img,'PNG',0,0);
            doc.save('test.pdf')
        }
    });
}

btn_Edit_date.addEventListener('click',editDate);
btn_editEducation.addEventListener('click',editEdu);
btn_edit_experience.addEventListener('click',editExperience);
cancelBtn_2.addEventListener('click',closePanel);
saveBtn_2.addEventListener('click',addNote_2);
cancelBtn_4.addEventListener('click',closePanel);
saveBtn_4.addEventListener('click',addNote_4);
cancelBtn.addEventListener('click',closePanel);
cancelBtn_5.addEventListener('click',closePanel);
saveBtn.addEventListener('click',addNote);
saveBtn_5.addEventListener('click',addNote_5);
cancelBtn_3.addEventListener('click',closePanel);
saveBtn_3.addEventListener('click',addNote_3);
btn_editSkills.addEventListener('click',editSkill);
btn_editInterests.addEventListener('click',editInterests);