// Chart.js - doughnut chart
const doughnutCtx = document.getElementById("doughnut-chart");
const doughnutChart = new Chart(doughnutCtx, {
    type: "doughnut",
    data: {
        // labels: ["Total score"],
        datasets: [
            {
                label: "Total score",
                data: [65, 35],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0)"
                ],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
                borderWidth: 1
            }
        ]
    },
    options: {
        centertext: "65",
        cutoutPercentage: 70,
        aspectRatio: 1,
        tooltips: {
            // titleFontSize: 0
            // bodyFontSize: 18
            enabled: false
        }
    }
});

// Text inside of the doughnut
Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.options.centertext) {
            const width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

            ctx.restore();

            const fontSize = (height / 80).toFixed(2);

            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            const text = chart.options.centertext,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2 - (chart.titleBlock.height - 5);

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }
});
