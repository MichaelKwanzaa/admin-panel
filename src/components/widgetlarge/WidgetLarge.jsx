import Avatar from "../../images/avatar.png"
import "./widgetlarge.css"
export default function WidgetLarge() {

    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">Latest Transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Customer</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={Avatar} 
                        alt="" 
                        className="widgetLargeTrImage" />
                        <span className="widgetLargeTrName">
                        Michael Agbonyeme
                        </span>
                    </td>
                    <td className="widgetLargeDate">13 July 2021</td>
                    <td className="widgetLargeAmount">$19.99</td>
                    <td className="widgetLargeStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={Avatar} 
                        alt="" 
                        className="widgetLargeTrImage" />
                        <span className="widgetLargeTrName">
                        Toni Osundina
                        </span>
                    </td>
                    <td className="widgetLargeDate">16 July 2021</td>
                    <td className="widgetLargeAmount">$14.99</td>
                    <td className="widgetLargeStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={Avatar} 
                        alt="" 
                        className="widgetLargeTrImage" />
                        <span className="widgetLargeTrName">
                        Rhona Sinamtwa
                        </span>
                    </td>
                    <td className="widgetLargeDate">18 July 2021</td>
                    <td className="widgetLargeAmount">$19.99</td>
                    <td className="widgetLargeStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={Avatar} 
                        alt="" 
                        className="widgetLargeTrImage" />
                        <span className="widgetLargeTrName">
                        John Timo
                        </span>
                    </td>
                    <td className="widgetLargeDate">20 July 2021</td>
                    <td className="widgetLargeAmount">$54.99</td>
                    <td className="widgetLargeStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}
