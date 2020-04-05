// Sum numbers
// Grab elements to output
document.querySelectorAll(".sum").forEach(sum => {
    let val = 0;

    // Grab elements to calculate
    let values = sum.parentElement.parentElement.querySelectorAll(".value");

    values.forEach(value => {
        // Grab unit
        let unit = sum.parentElement.parentElement.querySelector(".unit")
            .innerHTML;

        // Convert str to num
        let num = parseInt(value.innerHTML.replace(",", ""));

        // Add values
        val += num;

        // Output the result
        sum.innerHTML = formatNum(`<span class="value">${val}</span>
        <span class="unit">${unit}</span>`);

        // Add comma
        function formatNum(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });
});
