document.getElementById('close3').addEventListener('click',function(){
    document.getElementsByClassName('last-box')[0].style.display='none';    
})


document.getElementsByClassName('fa-solid')[0].addEventListener('click',function(){
   document.getElementsByClassName('log-in')[0].style.display='none'; 
})

document.getElementById('logInClick').addEventListener('click',function(){
    document.getElementsByClassName('log-in')[0].style.display='block'; 
})


document.getElementById('login-button').addEventListener('click',function(){
    let userWrite = document.getElementById('user-write').value;
    console.log('userWrite');

  
})


 
document.getElementById('login-button').addEventListener('click',function(){
   const userInfor = document.getElementById('user-write').value;
   console.log(userInfor);
   const userEmali = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if( userInfor == ''){
        alert('이메일을 입력하세요')
    }else if(userEmali.test(userInfor) ==false){

        alert('이메일 형식이 아닙니다');
    }else{
        document.getElementsByClassName('log-in')[0].style.display='none'; 
     }
})

document.getElementById('next-button').addEventListener('click',function(){
    const userInfor = document.getElementById('user-write').value;
    console.log(userInfor);
    const userEmali = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
 
     if( userInfor == ''){
         alert('이메일을 입력하세요')
     }else if(userEmali.test(userInfor) == false){
         alert('이메일 형식이 아닙니다');
     }else{
        document.getElementsByClassName('log-in')[0].style.display='none'; 
     }
 })