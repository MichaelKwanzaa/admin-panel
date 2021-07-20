import Performance from "../../components/performance/Performance";
import Users from "../../components/users/Users";
import {performanceListRow, mostViewListRow, userChannelDummyData} from "../../dummyData"
import "./analytics.css"

export default function Analytics(){
    let performanceDataKey = performanceListRow.map((ele) => {
        return Object.keys(ele)[1]
    })[0];

    let mostViewDataKey = mostViewListRow.map((ele) => {
        return Object.keys(ele)[1];
    })
    return(
        <div className="analytics">
            <div className="analyticsWidget">
                <Performance data={performanceListRow} 
                dataKey={performanceDataKey} 
                title="Website Performance this month"
                dataView={mostViewListRow}
                dataViewNames={mostViewDataKey}
                dataViewNamesY={mostViewDataKey}
                search={userChannelDummyData} />
            </div>
        </div>
    )
}