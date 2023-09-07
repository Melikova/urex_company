import React from 'react'
import Image from 'next/image'

//image
import chart1 from './../../images/chart1.png'
import chart2 from './../../images/chart2.png'
import bg from './../../images/Subtract.png'

//style
import './style.scss'

function AdvanceProtection() {
    return (
        <div className='advanceprotection'>
            <Image
                className='bg'
                src={bg}
                alt=""
            />
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='text'>
                            <h3>
                                Easy Advance Protection
                            </h3>
                            <p>
                                Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.
                            </p>
                            <div className="button">
                                Read more
                            </div>
                        </div>
                        <div className='image'>
                            <Image
                                src={chart1}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='text'>
                            <h3>
                                Advance Protection Mode Easy
                            </h3>
                            <p>
                                Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.
                            </p>
                            <div className="button">
                                Read more
                            </div>
                        </div>
                        <div className='image'>
                            <Image
                                src={chart2}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvanceProtection