module.exports = function sortCategoriesForInsert (arr) {
    let obj = {};
    let items = {}
    let result = [];
  
    //loop through json arr
    for (let i = 0; i < arr.length; i++) {
      //edge case of null parent
        if(arr[i].parent_id === null) {
          obj[0] = arr[i].id;
  
          //store hashmap of parent/child indexes
        } else {
            obj[arr[i].parent_id] = arr[i].id;
        }
        //store record in items hashmap for constant lookup
        items[arr[i].parent_id] = arr[i]
    }
  
    let record = 0;
    //until result is filled up, push record by parent index
    while(result.length < arr.length) {
        result.push(items[record === 0 ? null : record])
        record = obj[record]
    }
    return JSON.stringify(result,4);
  }
  
  //linear time
  //2x arr storage
  
  // console.log(sortCategoriesForInsert([
  //     {
  //       "name": "Men",
  //       "id": 20,
  //       "parent_id": null
  //     },
  //     {
  //       "name": "Accessories",
  //       "id": 1,
  //       "parent_id": 20
  //     },
  //     {
  //       "name": "Watches",
  //       "id": 57,
  //       "parent_id": 1
  //     }
  //   ]))
  
  //OUTPUT
  
  //   [{"name":"Men","id":20,"parent_id":null},{"name":"Accessories","id":1,"parent_id":20},{"name":"Watches","id":57,"parent_id":1}]
  