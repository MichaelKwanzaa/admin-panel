import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/charts/Charts'
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import WidgetLarge from '../../components/widgetlarge/WidgetLarge';

import { userDummyData } from "../../dummyData";

import './home.css'


export default function Home() {
    let userDataKey = userDummyData.map((ele) => {
        return Object.keys(ele)[1]
    })[0]
    
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userDummyData} title="User Analytics" grid dataKey={userDataKey} />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
