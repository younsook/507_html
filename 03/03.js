// function Hello() {
//     alert("안녕하세요! 자바스크립트 alert");
// }

//화살표 함수
//자바스크립트에서는 변수 let 상수 const 2개만 기억
const Hello = () => {
    //     alert("안녕하세요! 자바스크립트 alert");
    console.log(name+"님. 안녕하세요! 자바스크립트");

    var name = "PNU";
    console.log(name+"님. 안녕하세요! 자바스크립트");
} 

const Hello2 = () => {
    //     alert("안녕하세요! 자바스크립트 alert");
    //console.log(name+"님"+"안녕하세요! 자바스크립트");
    //let 은 변수 선언후 사용해야함. 값없이 찍으면 에러
    let name = "PNU";
    // console.log(name+"님. 안녕하세요! 자바스크립트");
    //백틱 문자열 . 중요, 가장 많이 사용
    console.log(`${name} 님. 안녕하세요! 자바스크립트`);
} 

const check = () => {
    let s = "123"; // 문자열 '' "" 둘다사용가능
    let x = "10";

    console.log(s);
    console.log(typeof(s)); //s가 무슨타입인지
    console.log(isNaN(s)); //숫자이면 false 문자포함이면 ture
    if (!isNaN(s) && !isNaN(x)) { // isNaN false ! ture 면 = 숫자이면  숫자연산하겠다.
        s = parseInt(s); //문자열을 숫자로 바꿔주는것 
        x = parseInt(x);
    
    }
    console.log(s+x);
}

const checkFor = () => {
    let s = "토마토,바나나";

    console.log(s[0]);
    console.log(s.charAt(0));

    console.log(s.split(",")); //split 분리자. 많이사용함.
    console.log(s.indexOf(",")); //쉼표의 위치
    console.log(s.includes(",")); //쉼표 여부 있으면 true

    for(let i=0; i<s.length;i++){
        console.log(s[i]);
    }
    for(let c of s){ //위와 같은 값.
        console.log(c);
    }

}