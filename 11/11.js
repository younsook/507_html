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
const getPoster =(mvNm) =>{
    console.log("getPoster",mvNm);
    const tmdbApi = "b42483d9af611184a5e87b9980e11075";  // TMDb API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApi}&query=${mvNm}&language=ko`;
    const poster = document.querySelector(".poster") ;

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
       // console.log("TMDb 검색 결과:", data);
        poster.innerHTML =`<img src="https://image.tmdb.org/t/p/w500${data.results[0].poster_path}">`

           /* if (data.results && data.results.length > 0) {
                const posterPath = data.results[0].poster_path;
                document.querySelector("#posterImg").src = `https://image.tmdb.org/t/p/w500${posterPath}`;
            } else {
                document.querySelector("#posterImg").src = "";
            }*/
        })
    .catch(err => console.log("TMDb 호출 에러:", err));

}
const getMvList = (dt, ul, gubun)=>{
    console.log("dt="+dt);
    const apikey = "4e2527f0c86fcfcca9b834df20594013";
      let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;
        
      if(gubun =="r2"){ //독립예술영화
        url = `${url}&multiMovieYn=Y`;
      } else if(gubun =="r3"){ //상업영화(일반)
        url = `${url}&multiMovieYn=N`;
      }
    console.log("선택된 gubun 값:", gubun);
      console.log("최종 호출 URL:", url);


        fetch(url)
        // .then(resp => console.log(resp)) //여기로 온다.
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.boxOfficeResult.dailyBoxOfficeList)
            const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
            console.log("받아온 dailyBoxOfficeList:", dailyBoxOfficeList); 

            // 영화 제목을 <li> 태그로 감싸기
            const mvList = dailyBoxOfficeList.map((item)=> 
                    // console.log(item.movieNm)); // 영화 제목만 추출
          {
                const mv = encodeURIComponent(item.movieNm);
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
                    <li data-mv="${item.movieNm}" onClick="getPoster('${item.movieNm}')">
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
    const ul = document.querySelector(".mvul");
    const dtIn = document.querySelector("#dt");
    const bt = document.querySelector("#bt");
    

    //어제 날짜 이후 선택 불가
    dtIn.setAttribute("max", yesterday());

    // console.log(yesterday());

    //default 어제날짜 출력
    dtIn.value = yesterday();
    getMvList(dtIn.value.replaceAll('-',''), ul);
    console.log(yesterday());

    // 기본 전체 조회 (초기값은 전체)
    const defaultGubun = document.querySelector("[type=radio]:checked").value;
    getMvList(dtIn.value.replaceAll('-', ''), ul, defaultGubun);


    dtIn.addEventListener('change', ()=>{
        getMvList(dtIn.value.replaceAll('-',''), ul, "");
    });
    
    bt.addEventListener("click", (e)=>{
        e.preventDefault();
        const gubun = document.querySelector("[type=radio]:checked").value;
        document.querySelector(".poster").innerHTML = "" ; 
        getMvList(dtIn.value.replaceAll('-',''), ul, gubun);
        console.log(gubun);
    });
   
    ul.addEventListener("mouseover", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const mvNm = li.dataset.mv;
    getPoster(mvNm);
    });

});