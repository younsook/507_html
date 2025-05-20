const lotto = () => {
    document.getElementById("nlist").innerHTML ='';

    let arr = [];

    //중복되지 않게 6개의 숫자 생성
    while(arr.length<6){
        let n = Math.floor(Math.random() *45)+1; // 1~45 

        //랜덤수가 이미 있는 경우
        if(arr.includes(n)){ //n이 이 배열안에 있는가? 있다면 다시 위로 
            continue; // 위로 올라간다.
        }

        //랜덤수를 배열에 추가
        arr.push(n);
    }
    //배열을 정렬
    arr.sort((a,b) => a-b);
    console.log(arr)

    //보너스 번호 
    let bonus = [];
    while (bonus.length < 1) {
        let n = Math.floor(Math.random() *45)+1; // 1~45 

        //랜덤수가 이미 있는 경우
        if(arr.includes(n)) continue; 
            bonus.push(n);
        
         
        console.log(arr, bonus);

        //전체 배열
        //arr.push('+');
        arr = [...arr, ...bonus];
        console.log(arr);
        
        //태그 배열 
        let tags = arr.map(item => `<span class="sp${Math.floor(item/10)}">${item}</span>`);
        tags.splice(6, 0, "<span id='spPlus'>+</span>")
        tags = tags.join('');
        console.log(tags);
        document.getElementById("nlist").innerHTML = tags;
    }




}