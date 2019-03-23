var checkedList = [];
var pointer;

function CheckAll(chk)
{
for (i = 0; i < chk.length; i++){
    checkedList[i] = chk[i].checked; 
}
return Set(checkedList);
}

function Set(checkedList){
    if(checkedList[0] == true && checkedList[1] ==false && checkedList[2] ==false){
        pointer = 1;
        return pointer;
    }
    else if(checkedList[0] == false && checkedList[1] ==true && checkedList[2] ==false){
        pointer = 2;
        return pointer;
    }
    else if(checkedList[0] == false && checkedList[1] ==false && checkedList[2] ==true){
        pointer = 3;
        return pointer;
    }
    else{
        return 0;
    }
}

