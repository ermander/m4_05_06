import React, { Component } from 'react';

let books = {
    fantasy: require("../data/fantasy.json"),
    history: require("../data/history.json"),
    horror: require("../data/horror.json"),
    romance: require("../data/romance.json"),
    scifi: require("../data/scifi.json")
}

class Comment extends Component {
    render() {

        const getComments = async () =>{
            let authToken = btoa("user17:6DJn4e5qbqb2a4D8")
            let response = await fetch("https://striveschool.herokuapp.com/api/comments/" + isin, {
            method: "GET",
            headers: {
            "Authorization": `Basic ${authToken}`
            }
            })
            console.log(response.json())
        }
        return (
            getComments()
        );
    }
}

export default Comment;