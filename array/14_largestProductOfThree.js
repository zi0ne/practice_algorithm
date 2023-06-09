const largestProductOfThree = function (arr) {
    // 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
    // 배열 정렬 sort()
    // 음수와 양수로 나누기 for문을 통해 반복, 0보다 작은지 큰지 확인하여 넣기 (두개의 배열로 나누기)
    // 배열의 길이에 따라 조건문 작성 하여 곱을 리턴
  
    let pos = [];
    let nag = [];
    for(let i =0; i < arr.length; i++){
      if(arr[i] < 0){
        nag.push(arr[i]);
      }
      else{
        pos.push(arr[i])
      }
    }
  
    pos.sort((a,b) => b-a);
    nag.sort((a,b) => a-b);
    
    if(pos.length >= 3 && nag.length < 2){
      return Number(pos[0]) * Number(pos[1]) * Number(pos[2])
    }
  
    else if(pos.length < 1){
      nag.sort((a,b) => b - a);
      return nag[0] * nag[1] * nag[2];
    }
    else if (1 < pos.length < 3){
      return pos[0] * nag[0] * nag[1]
    }
    
  };
  
  