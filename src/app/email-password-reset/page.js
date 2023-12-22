"use client"
import React  from 'react'
import Link from "next/link"
import Image from "next/image"

export default function PasswordReset(){
    return(
            <div style={{marginTop: 50+'px'}}>
                <table cellPadding="0" cellSpacing="0" style={{fontFamily: 'Nunito, sans-serif', fontSize: 15+'px', fontWeight: 400, maxWidth: 600 + 'px',  border: 'none', margin: '0 auto', borderRadius: 6+ 'px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)' }}>
                    <thead>
                        <tr style={{backgroundColor: "#4f46e5", padding: "3px 0", border: "none",  height: "68px",textAlign: "center", color:" #fff", fontSize: "24px", }}>
                            <th scope="col"><Image src="/images/logo-light.png" width={138} height={24}  alt="" style={{margin:"0px auto"}}/></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td style={{padding: '48px 24px 0', color: '#161c2d', fontSize: '18px', fontWeight: 600}}>
                                Hello, Harry
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding: '15px 24px 15px',  color: '#8492a6'}}>
                                To reset your password, please click the button below :
                            </td>
                        </tr>

                        <tr>
                            <td style={{padding: '15px 24px'}}>
                                <Link href="#"  style={{padding: '8px 20px',  outline: 'none', textDecoration: 'none', fontSize: '16px', letterSpacing: 0.5+ 'px', transition: 'all 0.3s', fontWeight: 600,  borderRadius: 6+ 'px', backgroundColor: '#4f46e5', border: '1px solid #4f46e5', color: '#ffffff'}}>Reset Password</Link>
                            </td>
                        </tr>

                        <tr>
                            <td style={{padding: '15px 24px 0', color: '#8492a6'}}>
                                This link will be active for 45 second from the time this email was sent. If you did not request to reset your password, please ignore this email and your account will not be affected.
                            </td>
                        </tr>

                        <tr>
                            <td style={{padding: '15px 24px 15px',  color: '#8492a6'}}>
                                Techwind <br /> Support Team
                            </td>
                        </tr>

                        <tr>
                            <td style={{padding: '16px 8px', color: '#8492a6', backgroundColor: '#f8f9fc',  textAlign: 'center'}}>
                                © {new Date().getFullYear()} Techwind.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}