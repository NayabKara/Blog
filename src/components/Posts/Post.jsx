import "./Post.css";
import React from 'react'
import { Link } from 'react-router-dom';
import UserLogOut from "../UserLogOut/UserLogOut"; 


export default class Post extends React.Component {
  
  state = {
    comments: []
  }
  
  handleauth = async () => {
    try {
      let jwt = localStorage.getItem('token')
      let fetchResponse = await fetch("/api/users", {
        method: "POST",
        headers: 
          {"Content-Type": "application/json", 
          'Authorization': 'Bearer ' + jwt},
        body: JSON.stringifgy({comments: this.state.comments})
      })
      let serverResponse = await fetchResponse.json()
      console.log("Success:", serverResponse)
  
      this.setState({comments: []})
    } catch (err) {
      console.log("Error:", err)
    }
  }
  
  async componentDidMount() {
    try {
      let fetchItemsResponse = await fetch('/api.users')
    }  catch (err) {
      console.log("Error:", err)
    }
  }
  render () {
   
    <div className='body'>
      <UserLogOut setUserInState={this.props.setUserInState }/>
        <img
        className="Img1"
        src="https://miro.medium.com/max/600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg"
        alt=""
        />

        <img
        className="Img2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtxQBSXFdax4EQLqk95toHH0gHhNBLk6jiGUZK80tH3KNj9JShJcq8mG2dfvFP9fg2NQ&usqp=CAU"
        alt=""
        />
        <img
        className="Img3"
        src="https://miro.medium.com/max/1400/1*ULnvjYy9sFmxnXLIgjRXLQ.png"
        alt=""
        />
          <img
        className="Img4"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQoaZCETMdaBAKmgASvOmVt0UUCHaTxXRixPXXYW9O313CkTQ-GaXlxOUD8WrGGMCjT8&usqp=CAU"
        alt=""
        />
          <img
        className="Img5"
        src="https://www.codebelgium.com/assets/site/postsmedia/13-reasons-why-coding.jpg"
        alt=""
        />
          <img
        className="Img6"
        src="https://appinventiv.com/wp-content/uploads/sites/1/2018/06/10-Tips-to-Hire-Android-App-Developer-2020-Edition.png"
        alt=""
        />
          <img
        className="Img7"
        src="https://cdn.shopify.com/app-store/listing_images/be8e18fe7fd62b265563360c2986633d/banner/CNbd3rn0lu8CEAE=.jpg"
        alt=""
        />
    </div>
  }
}
