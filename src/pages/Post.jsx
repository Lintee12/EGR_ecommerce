import React from 'react'

export default function Post() {
  return (
    <form className='form-post' action='/post.php'>
        <label>Small-post</label>
        <fieldset>
        <input placeholder="Product Name" type="text"></input>
        <input placeholder="Product Price" type="number"></input>
        <input placeholder="Image"></input>
        </fieldset>
        <label>Main-post</label>
        <fieldset>
        <input placeholder="Product Desription" type="text"></input>
        <input placeholder="Image1"></input>
        <input placeholder="Image1\"></input>
        <input placeholder="Image1"></input>
        <input placeholder="Image1"></input>
        </fieldset>
        <input type='submit'></input>
    </form>
  )
}
