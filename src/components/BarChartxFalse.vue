<script>
import { Bar } from 'vue-chartjs'
// eslint-disable-next-line
Chart.defaults.scale.gridLines.display = false
export default {
  extends: Bar,
  props: {
    chartData: {
      type: Array | Object,
      required: false
    },
    chartLabels: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      options: {
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              max: 100
            }
          }],
          xAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
              max: 100
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart({
      labels: this.chartLabels,
      datasets: [
        {
          label: '%',
          data: this.chartData,
          backgroundColor: '#72d6ea'
        }
      ]
    }, this.options)
  }
}
</script>
