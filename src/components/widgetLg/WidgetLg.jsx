import './widgetLg.css'

function WidgetLg() {
    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://ladyapril.files.wordpress.com/2019/12/84a78ceaac5863cdeb49a2c99e1082c5_11027764790.jpg?w=584"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">22 Jun 2021</td>
                    <td className="widgetLgAmount">$122.0</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved' />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://ladyapril.files.wordpress.com/2019/12/84a78ceaac5863cdeb49a2c99e1082c5_11027764790.jpg?w=584"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">22 Jun 2021</td>
                    <td className="widgetLgAmount">$122.0</td>
                    <td className="widgetLgStatus">
                        <Button type='Declined' />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://ladyapril.files.wordpress.com/2019/12/84a78ceaac5863cdeb49a2c99e1082c5_11027764790.jpg?w=584"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">22 Jun 2021</td>
                    <td className="widgetLgAmount">$122.0</td>
                    <td className="widgetLgStatus">
                        <Button type='Pending' />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://ladyapril.files.wordpress.com/2019/12/84a78ceaac5863cdeb49a2c99e1082c5_11027764790.jpg?w=584"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">22 Jun 2021</td>
                    <td className="widgetLgAmount">$122.0</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved' />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
