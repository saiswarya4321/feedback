
const feedbackform=document.getElementById('feedback');
let username=document.getElementById('firstname');
   let emailid=document.getElementById("email");
   const feedbacktext=document.getElementById('feedbacktext');
const nameerror=document.getElementById('namedisplay');
const emailerror=document.getElementById('emaildisplay');
const feedbackerror=document.getElementById('feedbackdisplay');
const successmessage=document.getElementById('successmessage');


nameerror.style.display='none';
emailerror.style.display='none';
feedbackerror.style.display='none';
successmessage.style.display='none';


    feedbackform.addEventListener('submit',(event)=>{

        event.preventDefault();
        let success=true;
        
        if(username.value.trim()===''){
          
            namedisplay.style.display='block';
            username.focus();
            success=false;
            
        }

        const regexemail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regexemail.test(emailid.value)){
            
            emaildisplay.style.display='block';
            emailid.focus();
            success=false;
        }
        if(feedbacktext.value.trim()===''){
            
            feedbackdisplay.style.display='block';
            feedbacktext.focus();
            success=false;
        }
        if(success==true){
            successmessage.style.display='block';
            username.value='';
            emailid.value='';
            feedbacktext.value='';
            
            nameerror.style.display='none';
            emailerror.style.display='none';
            feedbackerror.style.display='none';
        }
        else{
            successmessage.style.display='none';
        }
    });
   

