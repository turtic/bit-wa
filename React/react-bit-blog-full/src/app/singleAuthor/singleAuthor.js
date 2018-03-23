import React from 'react';

const SingleAuthor = () => (
    <div className="container">
        <div className="row">

            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s6">
                            <img src="http://via.placeholder.com/350x350" alt="" class="responsive-img" />
                        </div>
                        <div class="col s10">
                            <h3>Name Surname</h3>
                            <p>username:</p>
                            <p>email:</p>
                            <p>phone:</p>

                        </div>
                    </div>
                </div>
            </div>


            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s6 order-2">
                            <img src="http://via.placeholder.com/350x350" alt="" class="responsive-img" />
                        </div>
                        <div class="col s10 order-1">
                            <h3>Address</h3>
                            <p>street:</p>
                            <p>city:</p>
                            <p>zipcode:</p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        
                        <div class="col s12">
                            <h3>Company</h3>
                            <p>name:</p>
                            <p>slogan:</p>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    </div>
);
export default SingleAuthor;