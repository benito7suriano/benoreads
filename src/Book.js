import React, { Component } from 'react'

const Book = (props) => (
  <article className='book'>
    <img src={props.image} alt="book" />
    <h2>{props.title}</h2>
    <h4>{props.author}</h4>
  </article>
)

export default Book
