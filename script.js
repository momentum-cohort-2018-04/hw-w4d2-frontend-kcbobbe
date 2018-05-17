import request from 'superagent'

function onSubmit (event) {
  event.preventDefault()
  console.log('submitted!')
  const query = document.getElementById('query').value
  getData(query)
}

function getData (username) {
  request.get(`https://api.github.com/users/${username}`)
    .then(function (result) {
      const url = (result.body.url)
      const name = (result.body.name)
      const bio = (result.body.bio)
      const myPic = (result.body.avatar_url)
      const website = (result.body.blog)
      const company = (result.body.company)
      document.getElementById('myName').innerHTML = name
      document.getElementById('bio').innerHTML = `<div class = bio>${bio}`
      document.getElementById('links').innerHTML = 
      `<ul>
          <li><strong>Name</strong>: ${name}</li>
          <li><strong>Webpage: </strong>${website}</li>
          <li><strong>GitHub: </strong>${url}</li>
          <li><strong>Company: </strong>${company}</li>
      </ul>`
      document.getElementById('myPic').innerHTML = `<img src = ${myPic}>`
    })
}

// getData('kcbobbe')

document.getElementById('search-form').addEventListener('submit', onSubmit)
