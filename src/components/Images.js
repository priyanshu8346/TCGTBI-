import React from 'react'

export default function Images() {
    return (
        <>
            <div className="container">
                <div className="container1">
                    <div className="team" id="team1">
                        <div className="position">
                            <b>General Secretery</b>
                        </div>
                        <div className="name">
                            <b>Prof.M.K.Sanyal</b><i
                                className="fas fa-envelope" onClick={() => {
                                    window.open('mailto:sec.tcgtbi@iiests.ac.in')
                                }}></i>
                            <i className="fa-solid fa-phone" onClick={() => {
                                window.open('tel:944949990')
                            }}></i>
                        </div>
                    </div>
                    <div className="team" id="team2">
                        <div className="image">
                        </div>
                        <div className="position">
                            <b>General Manager</b>
                        </div>
                        <div className="name">
                            <b>Dr.Juni Deb Mallick Dutta</b><i
                                className="fas fa-envelope" onClick={() => { window.open('mailto:manager.tcgtbi@iiests.ac.in') }}></i>
                            <i className="fa-solid fa-phone" onClick={() => { window.open('tel:09831036650') }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
