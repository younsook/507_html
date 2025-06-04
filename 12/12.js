//데이터 가져오기
const getData = (txt1, content)=>{ //파라미터값은 보낸변수명과 다르게써도 된다. 

    const apikey = "eqSHOKrYncg22pKeXCqDnzcYIooHl2rhaO4YyYBOfwNEmA46PeoOBAV9IGTz%2BqcrD%2F4g2v%2Bwh5du0FLLl1wvcw%3D%3D";
    const baseUrl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?";
    let url = `${baseUrl}serviceKey=${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${txt1.value}&_type=json`;

    
    console.log(url);
    
    //데이터 패치. 함수를 사용한다.
    fetch(url)
    .then(resp => resp.json()) //값을 받아온다.
    .then(data => {
        const items = data.response.body.items.item ; // 10개의 데이터를 가져온다.
        // console.log("items",items)
        let tags = items.map(item => `         
            <div class="card">
                <div class="cardImg">
                    <img src=${item.galWebImageUrl}>
                </div>
                <div class="cardDiv">
                    <span class="sp1">${item.galTitle}</span>
                    <span class="sp2">${item.galPhotographyLocation}</span>
                </div>
            </div>
            
            `); //map의 결과는 array 
            tags = tags.join("");
            content.innerHTML = tags;
    })
    .catch(err => console.log(err)); //아닌경우 에러를 표시한다.


    // //데이터 패치. 함수를 사용한다.
    // fetch(url)
    // .then(resp => console.log(resp)) //값을 받아온다.
    // .then(data => console.log(data)) //값을 받아온다.
    // .catch(err => console.log(err)); //아닌경우 에러를 표시한다.

    // console.log(fetch)
};

document.addEventListener("DOMContentLoaded", ()=>{
    
    const txt1 = document.querySelector("#txt1");
    const bt1 = document.querySelector(".formDiv > button"); 
    const bt2 = document.querySelector(".formDiv > [type=reset]");
    const content = document.querySelector(".content");
    

    //확인: 
    bt1.addEventListener("click", (e)=>{
        e.preventDefault; //자기자신을 다시 부르지 않도록 막는다.
        if(txt1.value ==""){
            alert("키워드를 입력하세요");
            txt1.focus();
            return
        }

        //값을 받아올때. 함수로 정의
        getData(txt1, content);





    });


    //취소:  content 안에 내용도 지워준다.
    bt2.addEventListener("click", (e)=>{
        content.innerHTML = "";
    });









});