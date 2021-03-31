import React from 'react'
import { Card, Text, View } from 'react-native-paper'
import styled from 'styled-components'
import { SvgXml } from 'react-native-svg'
import closed from '../../assets/closed'
import star from '../../assets/star'
import { Button } from 'react-native-paper'

const CardContainer = styled(Card)`
  padding: 8px;
  margin: 20px;
  background-color: #f8f8f8;
`

const CardCover = styled(Card.Cover)`
  background-color: #f8f8f8;
  padding: 16px;
`

const Info = styled.View`
  padding: 12px;
`
const Title = styled(Text)`
  font-size: 20px;
`
const Rating = styled.View`
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 8px;
`
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

const Address = styled(Text)`
  font-size: 14px;
  padding-bottom: 8px;
`

const AccomodationCard = ({ accomodationInfo, navigation }) => {
  const { title, city, rating = 2.7, img, tempClosed } = accomodationInfo

  const ratingArray = Array.from(new Array(Math.round(rating)))
  const image = img
    ? img
    : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
  return (
    <CardContainer elevation={8}>
      <CardCover source={{ uri: image }} />
      <Info>
        <Title>{title}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {tempClosed && <SvgXml xml={closed} width={20} height={20} />}
          </SectionEnd>
        </Section>
        {city && <Address>{city}</Address>}
        <Button
          compact
          mode={'contained'}
          color={'orange'}
          onPress={() => navigation.push('Detail', { accomodationInfo })}
        >
          Details
        </Button>
      </Info>
    </CardContainer>
  )
}

export default AccomodationCard
