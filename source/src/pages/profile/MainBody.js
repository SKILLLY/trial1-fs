import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import "../../Css/profile/MainBody.css"
import UserData from "../../data/ProfileData"
import CoverImage from "./MainBody/CoverImage"
import Box1 from "./MainBody/Box1"
import Box2 from "./MainBody/Box2"
import Box3 from "./MainBody/Box3"
class MainBody extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        id: 0,
        name: "",
        nickName: "",
        profileImage: "",
        coverImage: "",
        city: "",
        country: "",
        email: "",
        facebookId: "",
        twitterId: "",
        linkedinId: "",
        aboutMe: "",
        aiRating: 0,
        reviewRating: 0,
        SkillliesEarned: 0,
        badgesReceived: []
      };
    }
    render(){

      this.state = UserData[0]

      return (
        <div id="main-body">
            <CoverImage coverImage={this.state.coverImage} />
            <div className="grid-container" >
                <Box1 data = {this.state} />
                <Box2 data = {this.state} />
                <Box3 data = {this.state} />
            </div>

        </div>
      )
    }
}




export default MainBody
