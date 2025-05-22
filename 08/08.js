//반복적으로 사용된것을 함수로 빼냈다.
const selChange = (s1, s2, l1, l2, t1, t2)=>{
    //select의 값을 변경
        if(s1.value == "℃") s2.value = "℉";
        else s2.value = "℃"
        //label의 값을 변경
        l1.innerHTML = s1.value;
        l2.innerHTML = s2.value;

        //input 값 초기화
        t1.value="";
        t2.value="";
        t1.focus();
}

// 1. DOM 생성이 된 후에 6개 요소 가져오기
//문서의 이벤트는 모두 감지할께
document.addEventListener('DOMContentLoaded', () =>{

    //DOM 요소 가져오기 (6개라서 각각가져오기. 많은경우 배열로 가져오기)
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.getElementById('sel2');

    //input
    const txt1 = document.querySelector("input");
    const txt2 = document.querySelector("[readonly]");

    //lable
    const lab1 = document.querySelector('[for = txt1]');
    const lab2 = document.querySelector('[for = txt2]');

    console.log('lab1');
    console.log('lab2');

    // 2. select 값이 변경시 나머지 select 값 변경, lable 값 변경
    sel1.addEventListener('change', ()=>{
        selChange(sel1, sel2, lab1, lab2, txt1, txt2);

        // // console.log(sel1.value);
        // //sel2의 값을 변경
        // if(sel1.value == "℃") sel2.value = "℉";
        // else sel2.value = "℃"
        // //label의 값을 변경
        // lab1.innerHTML = sel1.value;
        // lab2.innerHTML = sel2.value;

        // //input 값 초기화
        // tab1.value="";
        // tab2.value="";
        // txt1.focus();
    });

    sel2.addEventListener('change', ()=>{
        selChange(sel2, sel1, lab2, lab1, txt1, txt2);


        // // console.log(sel1.value);
        // if(sel2.value == "℃") sel1.value = "℉";
        // else sel1.value = "℃"

        // lab1.innerHTML = sel1.value;
        // lab2.innerHTML = sel2.value;

        // tab1.value = "";
        // tab2.value = "";
        
    });


    // 3. text box, input 요소에 값이 입력이되면 계산
    txt1.addEventListener('input', ()=>{
        if(sel1.value == "℃"){
            //  ℃ ->℉
            //(1°C × 9/5) + 32 = 33.8°F
            txt2.value = parseFloat((txt1.value * (9/5))+32).toFixed(4);
        }else{
            //   ℉ ->℃
            //(1°F − 32) × 5/9 = -17.22°C
            txt2.value = parseFloat((txt1.value - 32)*(5/9)).toFixed(4);
        }
    });


})






