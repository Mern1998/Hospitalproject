import React from 'react'
import Navfooter from '../Footericon/Navfooter'
import Header from '../header/Header'

export default function HowItWork() {
    return (
        <div>
            <Header />
            <section className='bgimageinner' style={{ backgroundImage: `url("")` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center my-auto">
                            <h1>Le fonctionnement</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className='howitwork-page'>
                <div className='container'>
                    <h2>Comment fonctionne la plateforme ?</h2>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='howitwork-disc'>
                                <p>Une plateforme d'échange sans intermédiaire, des profils vérifiés, des familles rassurés</p>
                            </div>
                        </div>
                    </div>
                    <div className='row workrow'>
                        <div className='col-sm-6 col-12 paddingright' id='box'>
                            <div className='works-card'>
                                <p><b>Vous recherchez une aide à domicile?</b> Préparation des repas, aide au lever et au coucher etc..</p>
                                <p><b>Ou</b></p>
                                <p><b>Vous recherchez une mission?</b> Vous êtes auxiliaire de vie ou dame de compagnie.</p>
                            </div>
                        </div>
                        
                       
                    </div>
                    <Navfooter/>
                        </div>

                    </div>
                </div>
    )
}
