document.addEventListener('DOMContentLoaded', ()=>{
    //img 다 가져올꺼야. querySelectorAll 부등호 아님 공백임
    const imgs = document.querySelectorAll('.mdiv img');
    const bts = document.querySelectorAll('.mdiv button');
    const mag = document.querySelector('#mag');

    console.log(imgs);
    console.log(bts);
    //반복문 돌면서 버튼이 모두 각각 선택됨
    for(let bt of bts){
        //for()
        // console.log(bt);
        bt.addEventListener('click', (e)=>{
            console.log(bt.innerHTML);

            //0. 버튼이벤트 방지
            e.preventDefault();

            //1. 컴퓨터 랜덤수 생성, 이미지 변경
            let n = Math.floor(Math.random() *6)+1; // 1~6

            imgs[0].setAttribute('src',`../img/${n}.png`);
            imgs[0].setAttribute('alt', `${n}번 주사위`);

            //2. 사용자 선택 수, 이미지 변경
            let usern = parseInt(bt.innerHTML[0]);
            imgs[1].setAttribute('src',`../img/${usern}.png`);
            imgs[1].setAttribute('alt', `${usern}번 주사위`);
            console.log(imgs);

            //3. 컴퓨터 수와 사용자 수가 같은지 비교
            if(n == usern){
                mag.innerHTML = "맞음";
            }else{
                mag.innerHTML = "다름";
            }
            
        });
    } 


});

