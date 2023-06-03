let arr=[2,6,9,16,80];
let start=0;
let end=arr.length-1;
let target=16;
let pos=undefined;
function binarySearch(arr,start,end){
         let mid=Math.floor((start+end)/2);
         if(arr[mid]===target){
             pos=mid;
             return mid;
         }else if(arr[mid]<target){
            binarySearch(arr,mid+1,end) 
         }else{
             binarySearch(arr,mid-1,end)  
         }
}
binarySearch(arr,start,end);
console.log(pos)
