import React from "react";
import {Component} from 'react'
import CardItem from './components/CardItem'
import './App.css'

const initialCardDetailsList = [
  {
    id:1,
    imageUrl:"https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png",
    isClicked: false
  },
  {
    id:2,
    imageUrl:"https://m.media-amazon.com/images/I/51IM+jkaEbL._AC_UF1000,1000_QL80_.jpg",
    isClicked: false
  },
  {
    id:3,
    imageUrl:"https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png",
    isClicked: false
  },
  {
    id:4,
    imageUrl:"https://m.media-amazon.com/images/I/51IM+jkaEbL._AC_UF1000,1000_QL80_.jpg",
    isClicked: false
  },
  {
    id:5,
    imageUrl:"https://cdn.pixabay.com/photo/2013/07/12/14/07/basketball-147794_640.png",
    isClicked: false
  },
  {
    id:6,
    imageUrl:"https://media.istockphoto.com/id/181668903/vector/shiny-red-traditional-cricket-ball.jpg?s=612x612&w=0&k=20&c=FrODP12OH_uCIhzpa9oChPu6l--5h5BBLgnkJy9n5sg=",
    isClicked: false
  },
  {
    id:7,
    imageUrl:"https://cdn.pixabay.com/photo/2013/07/12/14/07/basketball-147794_640.png",
    isClicked: false
  },
  {
    id:8,
    imageUrl:"https://media.istockphoto.com/id/181668903/vector/shiny-red-traditional-cricket-ball.jpg?s=612x612&w=0&k=20&c=FrODP12OH_uCIhzpa9oChPu6l--5h5BBLgnkJy9n5sg=",
    isClicked: false
  },
  {
    id:9,
    imageUrl:"https://media.istockphoto.com/id/137345149/photo/tennis-ball.jpg?s=612x612&w=0&k=20&c=1V1nTJmDHD-FFxIKJ-xamztIfm70gknLQy9hcMSlJbQ=",
    isClicked: false
  },
  {
    id:10,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqw40txaMjL7jHWTwxD0O-bvlnMw2Uwt_Kg&usqp=CAU",
    isClicked: false
  },
  {
    id:11,
    imageUrl:"https://media.istockphoto.com/id/137345149/photo/tennis-ball.jpg?s=612x612&w=0&k=20&c=1V1nTJmDHD-FFxIKJ-xamztIfm70gknLQy9hcMSlJbQ=",
    isClicked: false
  },
  {
    id:12,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqw40txaMjL7jHWTwxD0O-bvlnMw2Uwt_Kg&usqp=CAU",
    isClicked: false
  }
]

class App extends Component{
  state = {
    cardDetailsList: initialCardDetailsList, currentOpenCount:0, selectedImageUrlList:[]
  }

  isSelectedImagesAreSame = () => {
    const {cardDetailsList, selectedImageUrlList} = this.state
    let updatedCardDetailsList = cardDetailsList;
    if (selectedImageUrlList[0] !== selectedImageUrlList[1]){
      updatedCardDetailsList = cardDetailsList.map(eachCard=>{
        if (selectedImageUrlList.includes(eachCard.imageUrl) && eachCard.isClicked===true){
          return {...eachCard, isClicked:!eachCard.isClicked}
        }
        return eachCard
      })
    }
    this.setState({cardDetailsList:updatedCardDetailsList, selectedImageUrlList:[]})
  }

  clickedImage = async id => {
    const {cardDetailsList, currentOpenCount, selectedImageUrlList} = this.state
    let updateCount = currentOpenCount
    let updatedImageUrlList = selectedImageUrlList;
    const updatedCardDetailsList = cardDetailsList.map(eachCard=>{
      if (eachCard.id === id && eachCard.isClicked===false){
        updateCount += 1
        updatedImageUrlList = [...selectedImageUrlList, eachCard.imageUrl]
        return {...eachCard, isClicked:!eachCard.isClicked}
      }
      return eachCard
    })
    if (updateCount !== 2){
      await this.setState({cardDetailsList:updatedCardDetailsList, currentOpenCount:updateCount, selectedImageUrlList:updatedImageUrlList})
    }
    else{
      await this.setState({cardDetailsList:updatedCardDetailsList, currentOpenCount:0, selectedImageUrlList:updatedImageUrlList})
      setTimeout(this.isSelectedImagesAreSame, 500)
    }
  }

  render(){
    const {cardDetailsList} = this.state 

    return(
      <div className="App-container">
        <ul className="list-container">
            {cardDetailsList.map((eachCardDetail)=>(
              <CardItem cardDetails={eachCardDetail} key={eachCardDetail.id} clickedImage={this.clickedImage} />
            ))}
        </ul>
      </div>
    )
  }
}

export default App