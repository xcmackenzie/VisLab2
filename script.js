
let attractions;

fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		var element = document.querySelector('#attraction-category');
		element.addEventListener("change", (event) => {
			var selection = event.target.value;
			filterData(selection);
		});
  })

function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

	
	var filtered = attractions.filter(att => att.Category == category);
	var sorted = filtered.sort((a, b) => b.Visitors - a.Visitors);
	var sliced = sorted.slice(0, 5);
	renderBarChart(sliced)
}