function bai21() {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}
console.log(bai21());
//
function bai22() {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    console.log(a.length);
    let sum = 0;
    let averege = 0;
    let min = Math.min(...a)
    let max = Math.max(...a)


    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    averege = sum / a.length;
    return [max, min, averege];
}
console.log(bai22())
//

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 8, 8, 8, 8, 7, 6, 5, 4, 3, 2, 1];

function bai23(arr) {
    var a = [];
    var b = [];
    var prev;

    let sortData = arr.sort();
    //    sap xep theo thu tu

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element !== prev) {
            a.push(element);
            b.push(1);

        }
        else {
            b[b.length - 1]++;
        }
        prev = element;
    }
    let MaxB = Math.max(...b);
    let IndexMax = b.indexOf(MaxB);
    return a[IndexMax];

}
console.log(bai23(arr))
///
function bai24() {
    var b = [1, 2, 3, 4, 6, 71, 1, 22, 44, 55, 66, 23, 435];
    var newArray = b.filter(
        function (num) {
            let flag = true;
            if

                (num < 2) flag = false;
            else if (num == 2) flag = true;
            else if (num % 2 == 0) flag = false;
            else {
                for (let j = 3; j <= (num) / 2; j += 2) {
                    if (num % j == 0)
                        flag = false;
                    break;
                }
            }
            if (flag == true) {
                return num;
            }
        }

    )
    return newArray;
}
console.log(bai24())

//
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
function bai25() {
    var numAr = [];
    arr.forEach((element) => {
        numAr.push(element * element);
    });
    return numAr;
}
console.log(bai25())

//    

function bai26() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    var k = 8;
    var arr = arr.split(" ,");
    var n = arr.length;
    var b = [];
    for (var i = 0; i < n; i++) {
        if (a[i] == a[i + 1]) {
            return;
        }
        else{
            if ((parseInt(a[i]) + 1 == k)){
                b.push(a[i]);
            }
            else{
                if(parseInt(a[i]) - 1 == k)
                {
                    b.push(a[i]);
                }
            }
        }
        
    }
  return b;


}



