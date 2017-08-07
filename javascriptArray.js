var arr= [3,4,5,6,76,7,8];
arr.push(21);
arr.push(38);
arr.push(45);
arr.push(78);

arr.pop();
arr.pop();
arr.pop();
arr.pop();

for(i=0;i<4;i++)
{
    document.write("<br>array elements are "+ arr[i]);
}

arr.forEach(function(element) {
    document.write("<br>array elements are "+ element);
}, this);