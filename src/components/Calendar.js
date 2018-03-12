import React from 'react'
import styled from 'styled-components'
import { Segment, Header, Icon, Image } from 'semantic-ui-react'
import calendarData from '../calendarData'
import { Link } from 'react-router-dom'


const PageWrapper = styled.div`
  .calendarStyle{
    display: grid;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 85%;
    grid-auto-rows: 150px;
    margin: 0 auto;
  }

  div:nth-child(odd){
    background-color: yellow;
  }

  h1{
    text-align: center;
  }
`

class Calendar extends React.Component {

  generateCalendar = () => {
    return calendarData.map((day, i) => {
      return <Image as={Link} src={day.image} to={day.link} key={i} />
    })
  }

  render () {
    return(
      <PageWrapper>
        <Icon as={Link} to='/' name='arrow circle left' />
        <Segment as='h1'>Javascript 30 Challenge</Segment>
        <Segment basic className='calendarStyle'>
          {this.generateCalendar()}
        </Segment>
      </PageWrapper>
    )
  }
}

export default Calendar;
