import request from 'superagent'

function getData(){
  request.get(`https://api.github.com/users/kcbobbe`)
  .then(function(result) {
  const url = (result.body.url)
  const name = ('Name', result.body.name)
  const bio = ('Bio', result.body.bio)
  const myPic = ('myPic', result.body.avatar_url)
  const website = ('webpage',result.body.blog)
  const company = ('company', result.body.company)
  // const 
  console.log(url, name, bio)
  document.getElementById('myName').innerHTML = name
  document.getElementById('bio').innerHTML = `<div class = bio>${bio}`
  document.getElementById('links').innerHTML = 
  `<ul>
      <li>Name: ${name}</li>
      <li>My LinkedIn profile: ${website}</li>
      <li>GitHub: ${url}</li>
      <li>Company: ${company}</li>
  </ul>`
  document.getElementById('myPic').innerHTML = `<img src = ${myPic}>`
  
  // document.getElementById('myName').innerHTML = result;
})
}

// console.log(getData('url'))
getData()