import classNames from 'classnames/bind';
import styles from './PaymentSuccess.module.scss';

const cx = classNames.bind(styles);
function PaymentSuccess() {
    return (
        <div>
            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: 600}}>
    <tbody>
    <tr>
        <td align="center" valign="top" style={{fontSize:0, padding: 35}} bgcolor="#2e3f6e">

            <div style={{display: "inline-block", maxWidth: "50%" , minWidth:100, verticalAlign: "top", width: "100%"}}>
                <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:300}}>
                    <tbody>
                    <tr>
                        <td align="left" valign="top"
                            style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 36, fontWeight: 800,  lineHeight: "48px"}}
                            className={cx("mobile-center")}>
                            <h1 style={{fontSize: 36, fontWeight: 800, margin: 0, color: "#ffffff"}}><span style={{color: "#3eaafd"}}>Town</span>Hub<span style={{color: "#3eaafd"}}></span></h1>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div style={{display: "inline-block", maxWidth: "50%" , minWidth:100, verticalAlign: "top", width: "100%"}}
                 className={cx("mobile-hide")}>fontFamily
                <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:300}}>
                    <tbody>
                    <tr>
                        <td align="right" valign="top"
                            style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 48, fontWeight: 400,  lineHeight: "48px"}}>
                            <table cellSpacing="0" cellPadding="0" border="0" align="right">
                                <tbody>
                                <tr>
                                    <td style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 18, fontWeight: 400}}>
                                        <p style={{fontSize: 18, fontWeight: 400, margin: 0, color: "#ffffff"}}><a
                                                href="#" target="_blank" style={{color: "#ffffff", textDecoration: "none"}}>
                                            &nbsp;</a></p>
                                    </td>
                                    <td style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 18, fontWeight: 400, lineHeight: 24}}>
                                        <a href="/" target="_blank" style={{color: "#ffffff", textDecoration: "none"}}><img
                                                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/digital-city-2635775-2183076.png"
                                                width="49" height="45" style={{display: "block", border: 0}}/></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </td>
    </tr>
    <tr>
        <td align="center" style={{padding: "35px 35px 20px 35px", backgroundColor: "#ffffff"}} bgcolor="#ffffff">
            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:600}}>
                <tbody>
                <tr>
                    <td align="center"
                        style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "24px", paddingTop: 25}}>
                        <img src="https://www.pngkey.com/png/full/785-7855876_check-mark-icon-blue.png" width="125"
                             height="120" style={{display: "block", border: 0}}/><br/>
                        <h2 style={{fontSize: 30, fontWeight: 800, lineHeight: "36px", color: "#333333", margin: 0}}>
                            Thanh toán thành công!
                        </h2>
                    </td>
                </tr>
                <tr>
                    <td align="left"
                        style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "24px", paddingTop: 10}}>
                        <p style={{fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#777777"}}>
                            Quý khách đặt phòng thành công thông qua Website đặt phòng trực tiến TownHub.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" style={{paddingTop: 20}}>
                        <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="75%" align="left"  bgcolor="#eeeeee"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 800, lineHeight: "24px", padding: 10}}>
                                    Xác nhận đặt phòng #
                                </td>
                                <td width="25%" align="left"  bgcolor="#eeeeee"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 800, lineHeight: "24px", padding: 10}}>
                                    2345678
                                </td>
                            </tr>
                            <tr>
                                <td width="75%" align="left"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "24px", padding: "15px 10px 5px 10px"}}>
                                    Purchased Item (1)
                                </td>
                                <td width="25%" align="left"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "24px", padding: "15px 10px 5px 10px"}}>
                                    $100.00
                                </td>
                            </tr>
                            <tr>
                                <td width="75%" align="left"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "24px", padding: "5px 10px"}}>
                                    Shipping + Handling
                                </td>
                                <td width="25%" align="left"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "24px", padding: "5px 10px"}}>
                                    $10.00
                                </td>
                            </tr>
                            <tr>
                                <td width="75%" align="left"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "24px", padding: "5px 10px"}}>
                                    Sales Tax
                                </td>
                                <td width="25%" align="left"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "24px", padding: "5px 10px"}}>
                                    $5.00
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" style={{paddingTop: 20}}>
                        <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="75%" align="left"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 800, lineHeight: "24px", padding: 10, borderTop: "3px solid #eeeeee", borderBottom: "3px solid #eeeeee"}}>
                                    Tổng cộng
                                </td>
                                <td width="25%" align="left"
                                    style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 800, lineHeight: "24px", padding: 10, borderTop: "3px solid #eeeeee", borderBottom: "3px solid #eeeeee"}}>
                                    $115.00
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>

        </td>
    </tr>
    <tr>
        <td align="center" height="100%" valign="top" width="100%"
            style={{padding: "0px 35px 35px 35px", backgroundColor: "#ffffff"}}  bgcolor="#ffffff">
            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:660}}>
                <tbody>
                <tr>
                    <td align="center" valign="top" style={{fontSize:0}}>
                        <div style={{display:"inline-block", maxWidth:"50%", minWidth:240, verticalAlign:"top", width:"100%"}}>

                            <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%"
                                   style={{maxWidth:300}}>
                                <tbody>
                                <tr>
                                    <td align="left" valign="top"
                                        style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 24}}>
                                        <p style={{fontWeight: 800}}>Thông tin khách hàng</p>
                                        <p>675 Massachusetts Avenue<br/>11th Floor<br/>Cambridge, MA 02139</p>

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{display:"inline-block", maxWidth:"50%", minWidth:240, verticalAlign:"top", width:"100%"}}>
                            <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%"
                                   style={{maxWidth:300}}>
                                <tbody>
                                <tr>
                                    <td align="left" valign="top"
                                        style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 24}}>
                                        <p style={{fontWeight: 800}}>Ngày giao dịch</p>
                                        <p>January 1st, 2016</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
        </div>
    );
}

export default PaymentSuccess;
