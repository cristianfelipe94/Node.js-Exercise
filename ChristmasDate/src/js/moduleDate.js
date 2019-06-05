exports.gettingDate = () => {
	const todayIs = new Date();
	const futureIs = new Date(2019, 12, 25);

	function formatterDate(date) {
		const ddd = date.getDate();
		const mmm = date.getMonth();
		const yyy = date.getFullYear();

		const dateFormat = `Day:${ddd}  Month:${mmm}  Year:${yyy}`;
		return dateFormat;
	}

	console.log(`Today:		${formatterDate(todayIs)}`);
	console.log(`Future:		${formatterDate(futureIs)}`);
}
