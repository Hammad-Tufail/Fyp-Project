import TopBox from "../../components/topBox/TopBox"
import "./home.scss"
import ChartBox from "../../components/chartBox/ChartBox"
import { chartBoxProduct, chartBoxUser, chartBoxRevenue, chartBoxConversion, barChartBoxRevenue } from "../../data"
import BarChartBox from "../../components/barChartBox/BarChartBox"

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><ChartBox{...chartBoxUser} /></div>
      <div className="box box3"><ChartBox{...chartBoxProduct} /></div>

      <div className="box box5"><ChartBox{...chartBoxConversion} /></div>
      <div className="box box6"><ChartBox{...chartBoxRevenue} /></div>

      <div className="box box8"><BarChartBox{...barChartBoxRevenue} /></div>

    </div>
  )
}

export default Home
