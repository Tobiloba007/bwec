import React from 'react'
import classes from './ProContent.module.css'
import img1 from '../../../Assets/img2.png'
import img2 from '../../../Assets/img3.png'
import img3 from '../../../Assets/img4.png'
import img4 from '../../../Assets/img5.png'
import img5 from '../../../Assets/img7.png'


const ProContent = () => {
  return (
    <div className={classes['wrapper']}>
        <h1 className={classes['heading']}>What we do</h1>

                       {/* Div 1 */}
        <div className={classes['div-1']}>
            <div className={classes['left-1']}>
             <img className={classes['image-1']} src={img1} alt="" />
            </div>
            <div className={classes['right-1']}>
                <h1 className={classes['right-title-1']}>Food & Clothes Distribution</h1>
                <p className={classes['div-words-1']}>
                   Poverty reduction strategy through the provision  of necessities of life such as food, clothing, formula, diapers, toys, and/or shelter to individuals and families in need. Ongoing outreach  to as many communities  and neighborhood that we serve .
                </p>
            </div>
        </div>
                         {/* Div 2 */}
        <div className={classes['div-2']}>
            <div className={classes['left-2']}>
                <h1 className={classes['left-title-2']}>Seniors Program</h1>
                <p className={classes['div-words-2']}>
                   Programs are designed to empower  through wellness & healthy living. Engaging seniors in  productive activities including learning new skills, cultural competencies in their communities. Supporting seniors through interactive groups to alleviate loneliness and isolation.
                </p>
            </div>
            <div className={classes['right-2']}>
             <img className={classes['image-2']} src={img2} alt="" />
            </div>
        </div>
                      {/* Div 3 */}
        <div className={classes['div-1']}>
            <div className={classes['left-1']}>
             <img className={classes['image-1']} src={img5} alt="" />
            </div>
            <div className={classes['right-1']}>
                <h1 className={classes['right-title-1']}>Immigrant & Refugee Support</h1>
                <p className={classes['div-words-1']}>
                    We help and support new immigrants by providing them with free counseling, advocacy support with employment and housing searches, and any other resources they may need. It is a centre where Immigrants and refugees will receive desired assistance  towards adapting to their new environment and resettlement.
                </p>
            </div>
        </div>
                       {/* Div 4 */}
        <div className={classes['div-2']}>
            <div className={classes['left-2']}>
                <h1 className={classes['left-title-2']}>Mentorship Program</h1>
                <p className={classes['div-words-2']}>
                    Those not able to thrive in an educational environment or socially disadvantaged, are issued information and directions and other alternative pathways for people that feel educational pathways is not for them through mentorship and guidance. Information and workshops regarding vocational trades, apprenticeship, self employment and small business opportunities will be provided.
                </p>
            </div>
            <div className={classes['right-2']}>
             <img className={classes['image-2']} src={img3} alt="" />
            </div>
        </div>
                               {/* Div 5 */}
         <div className={classes['div-1']}>
            <div className={classes['left-1']}>
             <img className={classes['image-1']} src={img4} alt="" />
            </div>
            <div className={classes['right-1']}>
                <h1 className={classes['right-title-1']}>Youth/Educational Workshop <br /> & Employment Programs </h1>
                <p className={classes['div-words-1']}>
                   Providing educational workshops sessions  and tools that will connect youths to apprenticeship towards skills acquisition  and pathways to learning. Introducing youths to trades through apprenticeship, learning about skilled trades and showing the opportunities and possibilities available to learn a skilled trade on the job. Youths are able to work and learn from experienced workers and get paid.
                </p>
            </div>
        </div>
           
                      {/* BOTTOM */}
        <div className={classes['bottom-div']}>
            <h1 className={classes['btm-words']}>
                <span style={{color: "#FEA700"}}>Happiness</span> doesn’t <span style={{color: "#FEA700"}}>result</span> from what we get but from what <span style={{color: "#FEA700"}}>we give</span> 
            </h1>
            <button className={classes['btm-btn']}>DONATE NOW </button>
        </div>

    </div>
  )
}

export default ProContent