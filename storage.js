function store(){
    var inputNom = localStorage.getItem("name");
    var inputPrenom = localStorage.getItem("prenom");
    var inputEmail = localStorage.getItem("email");
    var inputTel = localStorage.getItem("tel");
    
    var inputSub = document.getElementById("subject");
    localStorage.setItem('subject', inputSub.options[inputSub.selectedIndex].value);
    inputSub.value = localStorage.getItem('subject');
    var inputRange = localStorage.getItem("range");
    var inputMsg = localStorage.getItem("msg");
    var radios = document.getElementsByName("qui"); // list of radio buttons
    var inputRadio = localStorage.getItem('qui'); // local storage value
   
    document.writeln(inputNom);
    document.writeln(inputPrenom);
    document.writeln(inputEmail);
    document.writeln(inputTel);
    document.writeln(inputSub.value);
    for(var i=0;i<radios.length;i++){
        if(radios[i].value == "Etudiant" || radios[i].value == "Enseignant" || radios[i].value == "Entreprise" || radios[i].value == "Autre" ){
            document.writeln(radios[i].value);
        }
    }
    
    document.writeln(inputRange);
    document.writeln(inputMsg);

    
    

}