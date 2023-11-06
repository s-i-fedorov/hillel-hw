'use strict';
(function (){

    const arrow = [
        1, 2, 3, 4, {},
        [1, 2, 3],
        [1, 2, 3],
        [3, 4,
            [5, 6,['a','s','d','f'], 7]
        ]
    ]


    function flat(arr, res =[]) {
            for(let i = 0; i < arr.length; i++) {
                if(Array.isArray(arr[i])) {
                    flat(arr[i], res)
                } else {
                    res.push(arr[i])
                }
            }
            return res;
        }


    console.log(flat(arrow));
    console.log(flat(arrow));

})()