import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
        <Preview>Welcome to our platform</Preview>
        <Tailwind>
            <Body className='bg-red-100'>
                <Container>
                    <Text style={heading}>Hello {name}</Text>
                    <Link className='underline' href='https://jeremydallain.com'>jeremydallain.com</Link>
                </Container>
            </Body>
        </Tailwind>
        
    </Html>
  )
}

const body: CSSProperties = {
    backgroundColor: '#f0f0f0',
    padding: 20,
    fontFamily: 'fantasy',
}

const heading: CSSProperties = {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
}

export default WelcomeTemplate