import React from 'react'
import classes from './AboutMission.module.css'

const items = [
    {
        index: 1,
        content: 'To relieve poverty by proving necessities of life such as food, clothing, formula, diapers, toys, and/or shelter to individuals and families in need. To .....',
    },
    {
        index: 2,
        content: 'To advance education by providing classes on life skills, including money management, managing mental health and other topics that help develop emotional and moral maturity, the ability to effectively interact with others, team work, co-operation, good citizenship and leadership skills, to youth with a focus on girls.',
    },
    {
        index: 3,
        content: ' To advance education by operating a summer camp, with a focus on topics such as engineering, computer programming and service, to youth with a focus on girls.'
    }
]

const AboutMission = () => {
  return (
    <div className={classes['wrapper']}>

        <div className={classes['top']}>
            <p className={classes['title']}>
                Mission
            </p>
            <p className={classes['sub-title']}>
               Our Mission
            </p>
        </div>

        <div className={classes['bottom']}>

            {items.map((item)=>{
                return(
                     <div className={classes['item']}>
                        <p className={classes['index']}>{item.index}</p>
                        <p className={classes['content']}>
                            {item.content}                            
                        </p>
                     </div>
                )
            })}

        </div>

    </div>
  )
}

export default AboutMission