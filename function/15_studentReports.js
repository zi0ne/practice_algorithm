function studentReports(students) {
  // 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아
  // 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.
  // student['gender'] 값이 female 일 경우만 filter 한다
  // map 을 이용하여, (students['grades']의 값으로 바꾼다
  // reduce를 이용하여 students['grades']의 요소들을 더해준다
  // 더한 요소들을 students.length 로 나눠 평균값을 구한다.)
  // 리턴

  const studentF = students.filter(function(data){
    return data.gender === 'female'
  })

  return studentF.map(function(data){
    const total = data.grades.reduce(function(acc,cur){
      return acc + cur;
    },0);
    const avg = total / (data.grades).length;
    data.grades = avg;
    return data;
  })
}