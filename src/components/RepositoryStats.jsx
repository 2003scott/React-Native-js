import React from 'react';
import { View } from 'react-native';
import StyledText from './StyledText';

const parseThousands = value => {
    return value > 999 
    ? `${Math.round(value / 100) / 100}K` : String(value)

}

const RepositoryStats = (props) => {
    return(
        <View style={{flexDirection : "row", justifyContent : "space-around" }}>
            <View>
                <StyledText StyledText aling= "center">{parseThousands(props.stargazersCount)}</StyledText>
                <StyledText aling= "center" fontWeight="bold">Stars</StyledText>
            </View>
            <View>
                <StyledText aling= "center">{parseThousands(props.forksCount)}</StyledText>
                <StyledText aling= "center" fontWeight="bold">Forks</StyledText>
            </View>
            <View>
                <StyledText aling= "center">{parseThousands(props.reviewCount)}</StyledText>
                <StyledText aling= "center" fontWeight="bold">Reviews</StyledText>
            </View>
            <View>
                <StyledText aling= "center">{parseThousands(props.ratingAverage)}</StyledText>
                <StyledText aling= "center" fontWeight="bold">Rating</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats;