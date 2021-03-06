/*NOTES:
quick function like [array.prototype.lister = (item) => {}] dson't let you use [this] command. e.g= list=this; doesn't work */

//make-shift range() function
function range(startAt = 0, size) {
    return [...Array(size).keys()].map(i => i + startAt);
}


//make-shift print() function
function print(msg){
    console.log(msg);
}


//discord command to clear chat 100 messages at a time
client.on('message', msg => {
    if (msg.author.username != client.user.tag.split('#')[0] && msg.content.split(' ')[0] == (key+'clearChat') && msg.member.hasPermission('MANAGE_CHANNELS')){
      async function clear() {
              msg.delete();
              await msg.channel.bulkDelete(100)
              print(msg.content)
          }
          clear();
          
      //msg.channel.bulkDelete(fetched);
    }
});



//compare to see if two arays are equivalent:
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

//IndexOf prototype for arrays:
//###Note: this requires the 'range()' function...
Array.prototype.indexOf = function(item){
    var c=null;
    var list = this
    for (i in range(0, list.length)){
        if (typeof(i) != "number"){i=parseInt(i)}
        if (list[i] == item){
            return i;
        }else{
            c=false;
        }
    }
    if (c == false){
        return -1;
    }
 } 

 //hasIndex prototype for arrays:
 Array.prototype.hasIndex = function(item){
    var list = this;
    var a=0;for (i in list){a=a+1};length=a;
    if (typeof(item) != "number" || String(item).split('.').length > 1 || item < 0){
        return {"":`Array.hasIndex('${item}')`, "error":"item is not a number/int..."}
    }
    if (length - item < 0){
        return false;
    }else{
        return true;
    }
}

//function to check if a number is an int or float:
function isWhole(number){
    item = String(number).includes(".")
     return !item;
}
//function to combine and sort two arrays:
function combine(arr1, arr2){
    return arr1.concat(arr2).sort()
}

//function to flip the values of two variables:

function flipValue(val1, val2){
    return [val1, val2] = [val2, val1];
}

//To make a pure function, create a shallow copy of the data you will change inside of the function. you can use .slice() method to do this:

Array.prototype.toString = function(){
    var arr = this.slice();
    for (var i of arr){i = String(i);}
    return arr;
}

var array = [1, 2, 3, 4, 5]
console.log(array.toString)//returns ["1", "2", "3", "4", "5"]
console.log(array)//returns [1, 2, 3, 4, 5]

//Store a javascript dictionary in a json file:
const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, data)
  } catch (err) {
    console.error(err)
  }
}

storeData(JSON.stringify(dict), 'test.json')
