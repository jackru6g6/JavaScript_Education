function countDown(params) {
    params--;
    if (params === -1) {
        return;
    }
    else {
        showCount(params);
    }
}

function showCount(number) {
    console.log(number);
    countDown(number);
}

countDown(10);