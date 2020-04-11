const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

search.addEventListener("input", () => searchAreas(search.value));

// Search areas.json and filter it
const searchAreas = async searchText => {
    const res = await fetch("scripts/data/areas.json");
    const areas = await res.json();

    // Get matches to current text input
    let matches = areas.filter(area => {
        const regex = new RegExp(`^${searchText}`, "gi");

        return area.name.match(regex) || area.abbr.match(regex);
    });

    if (searchText.length === 0) {
        matches = {};
        matchList.innerHTML = "";
    }

    outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches
            .map(
                match => `
                    <div class="suggestions border">
                        <p class="mb-1">${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></p>
                        <small class="mb-2">Lat: ${match.lat} / Long: ${match.long}</small>
                    </div>
                `
            )
            .join("");

        matchList.innerHTML = html;
    }
};
