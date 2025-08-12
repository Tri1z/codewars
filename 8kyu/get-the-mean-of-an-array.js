function getAverage(marks){
  const sum = marks.reduce((acc, mark) => acc + mark, 0);

  // 2. Считаем среднее
  const average = sum / marks.length;

  // 3. Округляем вниз
  return Math.floor(average);//TODO : calculate the downward rounded average of the marks array
}