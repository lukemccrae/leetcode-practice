
function sortCategoriesForInsert (arr) {
    let obj = {};
    let items = {}
    let result = [];
  
    //loop through json arr
    for (let i = 0; i < arr.length; i++) {
      //edge case of null parent
        if(arr[i].parent_id === null) {
            arr[i].parent_id = 0;
            
            obj[0] = arr[i].id;
  
          //store hashmap of parent/child indexes
        } else {
            obj[arr[i].parent_id] = arr[i].id;
        }
        //store record in items hashmap for constant lookup
        
        if(items[arr[i].parent_id] === undefined ) {
            items[arr[i].parent_id] = [arr[i]]
        } else {
            items[arr[i].parent_id].push(arr[i])
        }
    }

    //index of items array
    let record = 0;

    // until result is filled up, push record by parent index
    // console.log(items[record === 0 ? null : record])
    while(result.length < arr.length) {
        
        //array of items at index
        let recordBox = items[record]

        //set record with a number from the recordBox that exists as a key in the obj
        for (let k = 0; k < recordBox.length; k++) {
            if(recordBox[k].id.toString() in obj) {
                record = recordBox[k].id
            }
        }

        //loop through array of items
        for (let j = 0; j < recordBox.length; j++) {
            //push items into result
            result.push(recordBox[j])
        }

        for (let t = 0; t < result.length; t++) {
            if(result[t].parent_id === 0) result[t].parent_id = null
        }
    }
    return JSON.stringify(result,null, '\t');
  }

  //TIME / SPACE COMPLEXITY
  //O(3n)
  //3n storage
  
  console.log(sortCategoriesForInsert([
    {
        "name": "Men",
        "id": 20,
        "parent_id": null
      },  
      {
        "name": "Men",
        "id": 5,
        "parent_id": null
      },
      {
        "name": "Boots",
        "id": 2,
        "parent_id": 20
      },
      {
        "name": "Accessories",
        "id": 1,
        "parent_id": 20
      },
      {
        "name": "Watches",
        "id": 22,
        "parent_id": 57
      },
      {
        "name": "Watches",
        "id": 3,
        "parent_id": 57
      },
      {
        "name": "Watches",
        "id": 57,
        "parent_id": 1
      },
      {
        "name": "Men",
        "id": 20,
        "parent_id": null
      }, 
      {
        "name": "Men",
        "id": 21,
        "parent_id": null
      },
    ]))
  
  //OUTPUT
//   [
// 	{
// 		"name": "Men",
// 		"id": 20,
// 		"parent_id": null
// 	},
// 	{
// 		"name": "Men",
// 		"id": 5,
// 		"parent_id": null
// 	},
// 	{
// 		"name": "Men",
// 		"id": 20,
// 		"parent_id": null
// 	},
// 	{
// 		"name": "Men",
// 		"id": 21,
// 		"parent_id": null
// 	},
// 	{
// 		"name": "Boots",
// 		"id": 2,
// 		"parent_id": 20
// 	},
// 	{
// 		"name": "Accessories",
// 		"id": 1,
// 		"parent_id": 20
// 	},
// 	{
// 		"name": "Watches",
// 		"id": 57,
// 		"parent_id": 1
// 	},
// 	{
// 		"name": "Watches",
// 		"id": 22,
// 		"parent_id": 57
// 	},
// 	{
// 		"name": "Watches",
// 		"id": 3,
// 		"parent_id": 57
// 	}
// ]