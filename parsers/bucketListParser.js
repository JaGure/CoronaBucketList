const fs = require('fs')

// async reads the bucketlist, passes it to the next function
const getBucketList = next => {
    fs.readFile('./data/bucketList.txt', 'utf-8', function(err, data){
        if (err) throw err

        const bucketList = JSON.parse(data).bucketList

        next(bucketList)
    });
}

const updateBucketList = data => {
    // let newData = data.replace(/\n/g, '')
    // fs.writeFile('bucketList.txt', newData, 'utf-8', function (err) {
    //     if (err) throw err;
    //     console.log('filelistAsync complete');
    //   });
            // fs.writeFile('filelistAsync.txt', newValue, 'utf-8', function (err) {
        //   if (err) throw err;
        //   console.log('filelistAsync complete');
        // });
}

module.exports = {
    getBucketList: getBucketList,
    updateBucketList: updateBucketList
}