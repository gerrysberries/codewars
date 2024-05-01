class SmallestIntegerFinder {
	findSmallestInt(args) {
		const min = args.reduce((acc, cur) => (acc < cur ? acc : cur));
		return min;
	}
}
