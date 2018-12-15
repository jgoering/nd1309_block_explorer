/**
 * Importing BlockExplorer API to search Block Data
 */
const be = require('blockexplorer');

/**
 *  Explore Block Data function
 * @param {*} index 
 * 
 * Start by requesting the hash then request the block and use console.log()
 * 
 */
function getBlock(index) {
  	//add your code here
    be.blockIndex(index).then(blockIndex => JSON.parse(blockIndex).blockHash)
        .then(hash => be.block(hash))
        .then(result => console.log(JSON.parse(result)))
        .catch(error => {console.log(error)});
}

/**
 * Function to execute the `getBlock(index)` function
 * Nothing to implement here.
 */

(function theLoop (i) {
	setTimeout(function () {
        getBlock(i);
        i++;
		if (i < 3) theLoop(i);
	}, 3000);
  })(0);