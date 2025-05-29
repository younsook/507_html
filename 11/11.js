const yesterday = () =>{
    //어제 날짜 구하기
    const yday = new Date();
    yday.setDate(yday.getDate() -1);
    // console.log(yday);

    return yday.toISOString().slice(0,10);  
    
    
    // //어제 년월일 가져오기 (마이너스빼는 방법)
    // const year = yday.getFullYear();
    // // console.log(year);
    // const month = yday.getMonth()+1;
    // const day = yday.getDate();

    // return year+String(month).padStart(2,'0')+String(day).padStart(2,'0');

}

const getMvList = (dt, ul)=>{
    console.log("dt="+dt);
      const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4e2527f0c86fcfcca9b834df20594013&targetDt="+dt;
        
        fetch(url)
        // .then(resp => console.log(resp)) //여기로 온다.
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.boxOfficeResult.dailyBoxOfficeList)
            const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
            //console.log(dailyBoxOfficeList);

            // 영화 제목을 <li> 태그로 감싸기
            const mvList = dailyBoxOfficeList.map((item)=> 
                    // console.log(item.movieNm)); // 영화 제목만 추출
          {
                const rankInten = parseInt(item.rankInten); // 숫자 변환
                let iconSrc = "";

                // 숫자에 따라 이미지 변경
                if (rankInten === 0) {
                    iconSrc = "../img/ico_minus.png";
                } else if (rankInten > 0) {
                    iconSrc = "../img/ico_up.png";
                } else {
                    iconSrc = "../img/ico_dw.png";
                }

                return `
                    <li>
                        <span class="spRank">${item.rank}</span>
                        <span class="spMv">${item.movieNm}</span>
                        <span class="spIn">
                            <img src="${iconSrc}" alt="${rankInten}" width="12" height="12">
                            ${Math.abs(rankInten)}
                        </span>
                    </li>
                `;
          }
         
            )
            // 배열을 문자열로 결합
            let tags = mvList.join('');
            // console.log(tags);
            // 결과를 <ul> 안에 출력
            ul.innerHTML = tags;
    
        }) //데이터를 받아온다.
        .catch(error => console.log("error:",error)) //오류를 출력

}

document.addEventListener("DOMContentLoaded", ()=>{
    const ul = document.querySelector("main > ul");
    const dtIn = document.querySelector("#dt");
    //어제 날짜 이후 선택 불가
    dtIn.setAttribute("max", yesterday());

    // console.log(yesterday());

    //default 어제날짜 출력
    dtIn.value = yesterday();
    getMvList(dtIn.value.replaceAll('-',''), ul);
    

    


    dtIn.addEventListener('change', ()=>{
        getMvList(dtIn.value.replaceAll('-',''), ul);
    });
    
    

});