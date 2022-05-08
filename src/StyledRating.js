import React from 'react';
import styled from "styled-components";

//passed props from Feedback
//passed callback that changes state on parent (app.js)
//passed flag from feedback to indicate if rating isSelected.

const RatingWrapper = styled.div`
cursor: pointer;
margin: 0 12px;
position: relative;
`
const Circle = styled.div`
border-radius: 50%;
background-color: ${props => (props.isSelected ? "#ff3f00" : "#e4e4e8")};
display: flex;
align-items: center;
justify-content: center;
padding: .5em;
height: 1.2em;
width: 1.2em;
`

const StyledRating = ({rating, isSelected, setActiveRating, activeRating}) => {

    const handleClick = () => {
        if (isSelected) {
            setActiveRating('')
        } else {
            setActiveRating(rating)
        }
        console.log('isSelected', isSelected)
        console.log('activeraging', activeRating)

    }


    return (
        <RatingWrapper onClick={handleClick}>
            <Circle isSelected={isSelected} activeRating={activeRating}>
                {rating}
            </Circle>
        </RatingWrapper>
    )
}


export default StyledRating;
