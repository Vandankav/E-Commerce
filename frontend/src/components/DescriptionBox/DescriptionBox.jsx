import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Review (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptatibus atque ut voluptatum aliquid eum hic dolor quasi facere qui! Omnis incidunt consequuntur similique quo dolorum porro id odit necessitatibus, veniam cupiditate, maiores voluptates.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis laboriosam culpa architecto cupiditate, inventore asperiores, eligendi illum eius, dolores iste maxime ullam.
            </p>
        </div>
    </div>
  )
}
