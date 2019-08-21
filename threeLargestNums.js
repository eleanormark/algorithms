function findThreeLargestNumbers(array){
    const answers = [null, null, null];
    for (let num of array){
        updateAnswers(answers, num)
    }
    return answers;
}

function updateAnswers(answers, num){
    if (answers[2] === null || num > answers[2]){
        shiftUpdate(answers, num, 2);
    } else if (answers[1] === null || num > answers[1]){
        shiftUpdate(answers, num, 1);
    } else if (answers[0] === null || num > answers[0]){
        shiftUpdate(answers, num, 0);
    }
}

function shiftUpdate(arr, num, idx){
    for (let i = 0; i <= idx; i++){
        if(i === idx){
            arr[i] = num;
        } else {
            arr[i] = arr[i+1];
        }
    }
}