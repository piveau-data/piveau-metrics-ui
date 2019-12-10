<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
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
        tooltips: { // Toolbar an/aus
          enabled: true
        },
        scales: {
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
          data: this.chartData,
          backgroundColor: ['rgb(41, 114, 170)', 'rgb(242, 242, 242)', 'rgb(159, 242, 223)']
        },
        {
          data: this.yes,
          backgroundColor: 'white'
        },
        {
          data: this.no,
          backgroundColor: 'black'
        }
      ]
    }, this.options)
  }
}
</script>
