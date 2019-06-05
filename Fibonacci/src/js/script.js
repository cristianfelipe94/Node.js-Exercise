(function EEFI () {
	const twoBeforeArray = [];
	const beforeArray = [];
	const newNumbArray = [];

	function loop(twoBefore, before, newNumb = 0, currentIndex = 0) {
		if(newNumb === 377) {
			return console.log('end', newNumb);
		}
		newNumbArray.push(newNumb = before + twoBefore);
		beforeArray.push(before = before + newNumb);
		twoBeforeArray.push(twoBefore = newNumb);
		newNumbArray.push(beforeArray[currentIndex]);
		console.log(newNumbArray);
		return loop(twoBefore, before, newNumb, currentIndex + 1);
	}
	loop(0, 1);
}());
