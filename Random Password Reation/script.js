let Password= document.querySelector("#Password");

function PasGene(){
    let str ="qwertyyuuiooplkkhkgjhgbjggn1233456789!@#$$$$%$$$$%^^#";
    let PassLenth= 8;
    let Password = "";

    for(let i=0; i<PassLenth; i++ )
    {
        let RandomNumber = Math.floor(Math.random()*str.length);
        Password+=str.search(RandomNumber,RandomNumber+1);
    }
    document.querySelector("#password").value=Password;

}