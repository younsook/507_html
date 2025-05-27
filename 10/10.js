const init = (cols) =>{
     msg.innerHTML = "" ;
      for (let col of cols) {
        col.innerHTML = "" ;
      }
};

document.addEventListener("DOMContentLoaded", () => {
    const cols = document.querySelectorAll(".col");
    const bt = document.querySelector(".row > button");
    const msg = document.querySelector("#msg");
    let arr = [0,0,0,0,0,0,0,0,1]; // 0:하트 , 1:폭탄
    let flag = false; //게임 시작 여부
    let successCount = 0;    // 하트 클릭 수

    // arr.sort(() => Math.random() - 0.5);
    // console.log(arr);
  
    
    //칸 클릭 이벤트 하트 or 폭탄
    for(let [idx, col] of cols.entries()){
        //col.innerHTML = idx +1; //1~9 숫자를 각 div의 가운데 정렬. 
        //console.log(arr);

        col.addEventListener("click", ()=>{
            if(!flag){
                msg.innerHTML = "먼저 폭탄을 섞어주세요"
                return;
            }
            if (msg.innerHTML == "실패!")  return ;

                //true 가 되면 
                // 이미 클릭된 칸 무시
                if(arr[idx] == 0){
                    //하트
                    col.innerHTML = "<img src='../img/hart.png' class='img'>";
                    //console.log(idx);
                    successCount++;

                    console.log(successCount, arr.indexOf(1))
                    if(successCount == 8){
                        cols[arr.indexOf(1)].innerHTML="<img src='../img/hart.png' class='img'>";
                        msg.innerHTML = "성공! 모든 하트를 찾았습니다!";
                        flag = false;
                        bt.innerHTML = "폭탄 섞기";                   
                    }                    
                }else{
                    //폭탄
                    col.innerHTML = "<img src='../img/boom.png' class='img'>";
                    msg.innerHTML = "실패!";
                    flag = false;
                    bt.innerHTML = "폭탄 섞기";
                    
                    
                }
        });

    };

    //버튼 클릭시 폭탄 섞기
    bt.addEventListener("click", ()=>{
        if(!flag){
            arr.sort(()=> Math.random()-0.5); //폭탄 섞기
            console.log("폭탄 배열",arr);

            bt.innerHTML = "게임중 ...";
            msg.innerHTML = "폭탄을 피해 클릭하세요!";
            //상태 초기화
            flag = true; //게임중에는 폭탄이 섰이지 않게.

            successCount = 0 ;
            console.log(arr);
            init(cols) ;

        }


    });

    //클릭하면 하트가 나오게 한다.
    //폭탄섞기
    //배열없이. 0~8 까지 숫자중에서 랜덤으로 폭탄위치 정하기 가능
    //지금은 배열 
    //이미지를 넣기. 
});