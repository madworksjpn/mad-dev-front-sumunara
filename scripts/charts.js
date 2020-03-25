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
    beforeDraw: function(chart) {
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

// Chart.js - bar charts
// const barCtx = document.getElementById("bar-charts");
// const xs = [
//     2000,
//     2001,
//     2002,
//     2003,
//     2004,
//     2005,
//     2006,
//     2007,
//     2008,
//     2009,
//     2010,
//     2011,
//     2012,
//     2012,
//     2014,
//     2015,
//     2016,
//     2017,
//     2018,
//     2019,
//     2020
// ];

// const ys = [
//     30,
//     40,
//     50,
//     60,
//     70,
//     80,
//     90,
//     100,
//     110,
//     120,
//     130,
//     140,
//     150,
//     160,
//     170,
//     180,
//     190,
//     200,
//     210,
//     220
// ];

// const barChart = new Chart(barCtx, {
//     type: "bar",
//     data: {
//         labels: xs,
//         datasets: [
//             {
//                 label: "Population in Sumiyoshi",
//                 data: ys,
//                 backgroundColor: "rgba(255, 99, 132, 0.2)",
//                 borderColor: "rgba(255, 99, 132, 1)",
//                 borderWidth: 1
//             }
//         ]
//     },
//     options: {
//         barPercentage: 0.4,
//         maintainAspectRatio: false
//         // scales: {
//         //     yAxes: [
//         //         {
//         //             ticks: {
//         //                 beginAtZero: true
//         //             }
//         //         }
//         //     ]
//         // }
//     }
// });

// API call
// const getDataBtns = document.querySelectorAll(".get-data");

// getDataBtns.forEach(getDataBtn => {
//     getDataBtn.addEventListener("click", getData);
// });

// function getData() {
//     console.log(this);
//     // fetch("")
//     //     .then(res => {
//     //         return res.json;
//     //     })
//     //     .then(data => {
//     //         console.log(data);
//     //     })
//     //     .catch(err => {
//     //         console.log(err);
//     //     });
// }
