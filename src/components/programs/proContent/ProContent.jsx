import React from 'react'
import classes from './ProContent.module.css'

const content = [
    {
        title: 'Immigrant & Refugee Support',
        words: 'We help and support new immigrants by providing them with free counseling, support with job and housing searches, and any other resources they may need. It is a centre where Immigrants and refugees will receive desired assistant  towards adapting to their new environment and resettlement.'
    },
    {
        title: 'Mentorship Program',
        words: 'Those not able to thrive in an educational environment or socially disadvantaged, are issued information and directions and other alternative pathways for people that feel educational pathways is not for them through mentorship and guidance. Information and workshops regarding vocational trades, apprenticeship, self employment and small business opportunities will be provided.'
    },
    {
        title: 'Seniors Program ',
        words: 'Programs are designed to empower  through wellness & healthy living. Engaging seniors in  productive activities including learning new skills, cultural competencies in their communities. Supporting seniors through interactive groups to alleviate loneliness and isolation.'
    },
    {
        title: 'Food & Clothes Distribution',
        words: 'Poverty reduction strategy through the provision  of necessities of life such as food, clothing, formula, diapers, toys, and/or shelter to individuals and families in need. Ongoing outreach  to as many communities  and neighborhood that we serve .'
    },
    {
        title: 'Youth/Educational Workshop & Employment Programs ',
        words: 'Introducing youths to trades through apprenticeship, learning about skilled trades and showing the opportunities and possibilities available to learn a skilled trade on the job. You work with and learn from experienced workers and get paid while you do it.'
    },
]

const ProContent = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['title-con']}>
            <p className={classes['title']}>What we do</p>
        </div>
        {content.map((item)=>{
            return (
          <div className={classes['content-wrapper']}>
            <div className={classes['content-con']}>
                <p className={classes['content-title']}>
                   {item.title}
                </p>
                <p className={classes['content-words']}>
                    {item.words}
                </p>
            </div>
          </div>
        )})}
        </div>
  )
}

export default ProContent