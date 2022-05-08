import React from 'react';
import styled from 'styled-components'
import {Heading} from './Feedback'
import {Card} from './Feedback'
import {Paragraph} from './Feedback'
import {ReactComponent as ThankYouIllustration} from './images/illustration-thank-you.svg'

// const ThankYouCardOld = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// width: 400px;
// height: 400px;
// background-color: #202630;
// border-radius: 33px;
// padding: 44px 48px;
// margin: 10% auto;
// box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
// @media only screen and (max-width: 930px) {
//     width: 500px;
//     height: 500px;
//     margin: 30% auto;
//   }
// `;

const ThankYouCard = styled(Card) `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ThankYouHeading = styled.h2`
font-size: 1.2em;
color: #fc7615
`

const ThankYouParagraph = styled(Paragraph)`
text-align: center;
`

const ThankYou = ({activeRating}) => {
    return (
        <div>
        <ThankYouCard>
            <ThankYouIllustration />
            <ThankYouHeading>You Selected {activeRating} out of 5</ThankYouHeading>
            <Heading>Thank You!</Heading>
           <ThankYouParagraph>We appreciate you taking the time to give a rating. If you ever need more support don't hesitate to get in touch.</ThankYouParagraph>
        </ThankYouCard>
        </div>
    )
}

export default ThankYou;
