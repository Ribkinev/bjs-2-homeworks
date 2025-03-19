// Задание 1

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let num of arr) {
      if (num > max) {
          max = num;
      }
      if (num < min) {
          min = num;
      }
      sum += num;
  }

  let average = sum / arr.length;

  return {
      min: min,
      max: max,
      avg: Number(average.toFixed(2)) 
  };
}

// Задание 2

function return0(){
  if (this.length === 0) return 0;
}

function summElementsWorker(...arr) {
  return0();

  return arr.reduce((sum,num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  return0();

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  return0();

  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

// Задание 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr)  {
    let result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
