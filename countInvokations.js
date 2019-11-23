let countInvokations = (() => {
	let count = 1;
  	return () => count++;
})();

// countInvokations();
// countInvokations();
// countInvokations();