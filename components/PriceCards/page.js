import React from 'react'

//style
import './style.scss'

function Applications() {
    return (
        <div className='applications'>
            <div className="container">
                <div className="application">
                    <p className='whatFor'>
                        For individuals
                    </p>
                    <p className='type'>
                        Basic
                    </p>
                    <p className='text'>
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                    </p>

                    <div className='price'>
                        <p>
                            $99
                        </p>
                        <p>
                            /monthly
                        </p>
                    </div>

                    <div className='list'>
                        <p>
                            What’s included
                        </p>
                        <ul>
                            <li>
                                <div className='icon'></div>
                                <p>All analytics features</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Up to 250,000 tracked visits</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Normal support</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Up to 3 team members</p>
                            </li>
                        </ul>
                    </div>
                    <div className='button'>
                        Get started
                    </div>
                </div>
                <div className="application">
                    <div className="popular">
                        Popular
                    </div>
                    <p className='whatFor'>
                        For startups
                    </p>
                    <p className='type'>
                        Pro
                    </p>
                    <p className='text'>
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                    </p>

                    <div className='price'>
                        <p>
                            $199
                        </p>
                        <p>
                            /monthly
                        </p>
                    </div>

                    <div className='list'>
                        <p>
                            What’s included
                        </p>
                        <ul>
                            <li>
                                <div className='icon'></div>
                                <p>All analytics features</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Up to 1,000,000 tracked visits</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Premium support</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Up to 10 team members</p>
                            </li>
                        </ul>

                    </div>
                    <div className='button'>
                        Get started
                    </div>
                </div>
                <div className="application">
                    <p className='whatFor'>
                        For big companies
                    </p>
                    <p className='type'>
                        Enterprise
                    </p>
                    <p className='text'>
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                    </p>

                    <div className='price'>
                        <p>
                            $399
                        </p>
                        <p>
                            /monthly
                        </p>
                    </div>

                    <div className='list'>
                        <p>
                            What’s included
                        </p>
                        <ul>
                            <li>
                                <div className='icon'></div>
                                <p>All analytics features</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Up to 5,000,000 tracked visits</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Dedicated support</p>
                            </li>
                            <li>
                                <div className='icon'></div>
                                <p>Up to 50 team members</p>
                            </li>
                        </ul>

                    </div>
                    <div className='button'>
                        Get started
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Applications