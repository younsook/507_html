// 배열 선언
let arr1 = [];
let arr2 = [1,2,3];
let arr3 = new Array();
let arr4 = new Array(1,2,3);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

//배열 지우기
//arr4.length = 0;
arr4 = [];
console.log(arr4);

//랜덤수 만들기
let n = Math.floor(Math.random() * 5)+1; //1~5
arr4.push(n);
console.log(arr4);

//배열의 순회
for(let i = 0; i<arr2.length;i++){
    console.log(arr2[i]);
}
// for in 의 i는 index
for (let i in arr2){
    console.log(arr2[i]);
}

for(let c of arr2){
    console.log(c);
}

//
for(let item of arr2.entries()){
    console.log(item);
}
for(let [index, value] of arr2.entries()){
    console.log(`index= ${index}, value=${value}`);
}

arr2.forEach((v,i) => {
    console.log(`index= ${i}, value=${v}`)
})

//베열 변형과 정렬----------------------------------------------------------------
// map() 많이사용 , 기본 : .map(()=>{})
// let arr5 = arr2.map((item) =>{
//     return item * 2
// })

// map() 많이사용 위의 소스를 줄인것. 같은 소스임.
let arr5 = arr2.map( item => item * 2);
console.log(arr5);

//위 map()과 동일한 소스다.
let arr51 = [];
for(let n of arr2){ // of 는 하나씩 가져온다.
    arr51.push(n * 2);
}
console.log(arr51);

//arr에만 있는 map(), filter() 함수임.
//filter() 많이사용

// let arr6 = arr2.filter((item)=> {return item%2 == 0}) //짝수만
let arr6 = arr2.filter(item => item % 2 == 0) //짝수만
console.log(arr6);

let arr61 = [];
for(let n of arr2){ 
    if( n %2 == 0){
        arr61.push(n);
    }
}
console.log(arr61);
//베열 변형과 정렬----------------------------------------------------------------

//전개 연산자 : 배열이나 객체의 요소를 개별적인 요소로 확장 할때 사용 : 합하는것.
arr7 = [...arr5, ...arr6];
console.log(arr7);