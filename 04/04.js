const check1 = (e) => {
    //e.preventDefault();
    console.log('check1');
    //input 타입 요소 id값을 가진 txt1 을 .value로 가져온다.
    let txt1 = document.getElementById("txt1").value;
    
    //공백 제거 많이사용함.
    txt1 = txt1.replaceAll(" ", '');
    
    //문자열 반복문
    let s ='';
    //뒤에서부터 하나씩 읽어왔다.
    for (let i=txt1.length - 1; i >= 0;i--){
        //console.log(txt1[i]);
        s = s + txt1[i];
    }
    // s = txt1.split(''); 배열로 활용


    console.log(s);
    
    //문자열 비교
    // 같으면 회문이다.
    if (txt1 == s){
        document.getElementById("txt2").value = "회문입니다."
    }else{
        document.getElementById("txt2").value = "회문이 아닙니다."
    }
}
const check2 = () => {
    console.log('check2');

    let txt1 = document.getElementById("txt1").value;

    let hap = 0;
    //텍스트를 하나씩 가져온다.
    for (let c of txt1){
        //숫자이면 합하라.
        if(!isNaN(c)){
         hap = hap+parseInt(c);
        }
    }
    document.getElementById("txt2").value = hap;


    
}


const check3 = () => {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
}