import {LineChart, Line, BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, YAxis} from "recharts"
import "./performance.css"

export default function Performance({data, dataKey, dataView, search}) {

    

    return (
        <div className="performance">
            <h1 style={{marginBottom: "20px", fontWeight: "600", fontSize: "22px"}}>Performance</h1>
        <div className="performanceContainer">
            <h3 className="performanceTitle">Page Views</h3>
                <LineChart data={data} height={250} width={500}>
                <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                <Tooltip />
                <Legend />
                </LineChart>
        </div>
        <div className="mostVisited">
            <h3 className="mostVisitedTitle">Most visited web pages</h3>
                <BarChart width={500} height={300} data={dataView}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                </BarChart>
        </div>
        <div className="userSearch">
            <h3 className="userSearchTitle">Users found you by: </h3>
                <div className="searchLineContainer">
                {search.map(e => {
                    return (
                        <div className="searchLine">
                            <h3>{e["userPopName"]}</h3>
                            <p>{e["value"]}</p>
                        </div>
                    )
                })}
                </div>
               
        </div>
        </div>
    )
}


