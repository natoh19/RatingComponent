import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledRating from './StyledRating';
import styled from 'styled-components'
import {Flex} from './styles/globalStyles'
import {ReactComponent as Star} from './images/icon-star.svg'

export const Card = styled.div`
width: 400px;
height: 400px;
background-color: #202630;
border-radius: 33px;
padding: 44px 48px;
margin: 10% auto;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
@media only screen and (max-width: 780px) {
    max-width: 70%;
    max-height:70%;
    margin: 30% auto;
  }
`;

export const Heading = styled.h2`
font-family: "Helvetica";
color: #ffffff;
font-size: 1.8em;
`;

const Content = styled(Flex)`
height:752px;
position: relative;
`;

export const Paragraph = styled.p`
font-size: 1.1em;
color: #eef
`;

const RatingsRow= styled(Flex)`
top:10%;
`

const Button = styled.button`
  background-color: ${props => (props.isSelected ? "#ff3f00" : "#333333")};
  cursor: ${props => (props.isSelected ? "pointer" : "not-allowed")};
  border: none;
  color: #fff;
  padding: 19.5px 107.3px;
  border-radius: 19px;
  font-family: Plus Jakarta Sans Medium;
  font-size: 24px;
  user-select: none;
  position: absolute;
  top: 3em;
`;



const Feedback = ({activeRating, setActiveRating}) => {

    const ratings = ["1", "2", "3", "4", "5"]
    const navigate = useNavigate();

    const handleSubmit=(e)=> {
        navigate('/thankyou')
    }

    return (
        <Card>
            <Star/>
            <Heading>How Did We Do?</Heading>
            <Paragraph>Please let us know how we did with your support request. All feedback is appreciated and helps us improve our offering.</Paragraph>
            <Content column>
                <RatingsRow>
            {ratings.map(rating => (
                <StyledRating
                rating = {rating}
                key={rating}
                isSelected={activeRating === rating}
                setActiveRating={setActiveRating}
                activeRating={activeRating}
                />
            ))}

            <Button isSelected={!!activeRating} type="submit" onClick={(e) => handleSubmit(e)}>Submit</Button>
            </RatingsRow>
            </Content>


        </Card>
    )


}

export default Feedback;
