import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a React app to leave feedback for a product for service</p>
            <p>Verison: 1.0.0</p>

            <p>
                <a href="/">Back to Home</a>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage