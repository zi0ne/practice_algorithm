function flattenArr(arr) {
  // 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.
  // 리턴할 새로운 배열 선언. ===  newArr
  // 반복문을 사용하여 arr의 모든요소 확인
  // arr[i]의 요소가 배열이라면, flattenArr 불러오기
  // 결과 newArr 에 push
  // 그게 아니라면, newArr 에 push

  let newArr =[];
  for(let i =0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      let flatten = flattenArr(arr[i]);
      newArr.push(...flatten);
    }
    else{
      newArr.push(arr[i]);
    }
  }
  return newArr;
}