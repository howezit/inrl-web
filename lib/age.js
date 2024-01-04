const birthDetails = (yr) => {
		const birthdate = new Date(yr);
		const currentDate = new Date();
		const timeDiff = currentDate.getTime() - birthdate.getTime();
		const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
		const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
		const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
		const nextBirthdate = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
		if (nextBirthdate < currentDate) {
			nextBirthdate.setFullYear(nextBirthdate.getFullYear() + 1);
		}
		const timeUntilNextBirthdate = nextBirthdate.getTime() - currentDate.getTime();
		const remainingMonths = Math.floor(timeUntilNextBirthdate / (1000 * 60 * 60 * 24 * 30));
		const remainingDays = (Math.floor(timeUntilNextBirthdate / (1000 * 60 * 60 * 24)) - remainingMonths * 30);
		const remainingHours = Math.floor((timeUntilNextBirthdate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const remainingMinutes = Math.floor((timeUntilNextBirthdate % (1000 * 60 * 60)) / (1000 * 60));
		const remainingSeconds = Math.floor((timeUntilNextBirthdate % (1000 * 60)) / 1000);
		return {
			age: years,
			months,
			days,
			hours,
			minutes,
			seconds,
			next: {
				date: nextBirthdate.toDateString(),
				remainingMonths,
				remainingDays,
				remainingHours,
				remainingMinutes,
				remainingSeconds
			}
		}
	};
module.exports = {birthDetails};
