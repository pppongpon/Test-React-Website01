import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function BookDetail() {
    const { roomNo } = useParams()
    
  
    const onClickFilter = (e) => {
        console.log(e)
    }
    return (
      <div className="BookDetail">
            <div className='RoomHeaderLeft'>
                <div className='TextHeader'>
                    <br></br>
                    <label  className='textHeaderStyle'>
                        {roomNo}
                    </label>
                </div>
                <div>
                    <RenderToday/>
                </div>
            </div>

            <div className='RoomHeaderRight'>
                <div className='TextHeaderRight'>

                    <ul className='rightList'>
                        <Link to={`/booking/${roomNo}`} onClick={() => onClickFilter("1")}>
                            <li className='textSelect'>History</li>
                        </Link>
                        {/*<Link to={`/booking/${roomNo}`} onClick={() => onClickFilter("1")}>
                            <li className='textSelect'>This Week</li>
                        </Link>
                        <Link to={`/booking/${roomNo}`} onClick={() => onClickFilter("2")}>
                            <li className='textSelect'>Next Week</li>
                        </Link>*/}
                    </ul>
                </div>
                <div>
                    <RenderBook/>
                </div>
                
            </div>
            
      </div>
    );
  }
function RenderToday(){
    const { roomNo } = useParams()
    const today = new Date()
    const [date, day, month] = [
        today.getDate(), 
        today.getDay(), 
        today.getMonth()
    ]
    const [stringDay, setStringDay] = useState("")
    const [stringMonth, setStringMonth] = useState("")
    const [allData, setAllData] = useState([])

    const getData = async() => {
        let roomArray = []
        let data = await fetch('https://raw.githubusercontent.com/forviz/developer-test/master/02-venue-booking/demo-booking-data.json', {mode: 'cors'})
        let respond = await data.json()
        respond.map((room) => {
            if(room.roomId == roomNo){
                roomArray.push(room)
            }
        })
        setAllData(roomArray)
    }
    let roomData = []
    const getRoom = () => {
        for(let i of allData){
            if(i.roomId === roomNo){
                roomData.push(i) 
            }
        }
        console.log(roomData)
    }
    useEffect(() => {
        getData();
        getRoom();
    },[])

    useEffect(() => {
        if(day === 0){
            setStringDay("Sunday")
        }else if(day === 1){
            setStringDay("Monday")
        }else if(day === 2){
            setStringDay("Tuesday")
        }else if(day === 3){
            setStringDay("Wednesday")
        }else if(day === 4){
            setStringDay("Thursday")
        }else if(day === 5){
            setStringDay("Friday")
        }else if(day === 6){
            setStringDay("Saturday")
        }

        if(month === 0){
            setStringMonth("January")
        }else if(month === 1){
            setStringMonth("Febuary")
        }else if(month === 2){
            setStringMonth("March")
        }else if(month === 3){
            setStringMonth("April")
        }else if(month === 4){
            setStringMonth("May")
        }else if(month === 5){
            setStringMonth("June")
        }else if(month === 6){
            setStringMonth("July")
        }else if(month === 7){
            setStringMonth("August")
        }else if(month === 8){
            setStringMonth("November")
        }else if(month === 9){
            setStringMonth("October")
        }else if(month === 10){
            setStringMonth("September")
        }else if(month === 11){
            setStringMonth("December")
        }
    },[])
    return(
        <div className='today-view'>
            <div className='upcoming'>
                Upcoming
            </div>
            <div className='Day-month'>
                {stringDay}
            </div>
            <div className='day-Month'>
                {stringMonth}
            </div>
        </div>
    )
}

function RenderBook(){
    const { roomNo } = useParams()
    const today = new Date()
    const [date, day, month] = [
        today.getDate(), 
        today.getDay(), 
        today.getMonth()
    ]
    const [stringDay, setStringDay] = useState("")
    const [stringMonth, setStringMonth] = useState("")
    const [allData, setAllData] = useState([])

    const [temp, setTemp] = useState("")
    const getData = async() => {
        let roomArray = []
        let data = await fetch('https://raw.githubusercontent.com/forviz/developer-test/master/02-venue-booking/demo-booking-data.json', {mode: 'cors'})
        let respond = await data.json()
        respond.map((room) => {
            if(room.roomId == roomNo){
                roomArray.push(room)
            }
        })
        setAllData(roomArray.sort((a, b) => (a.startTime > b.startTime) ? 1 : -1))
    }
  
    useEffect(() => {
        getData();
    },[])

    useEffect(() => {
        if(day === 0){
            setStringDay("Sunday")
        }else if(day === 1){
            setStringDay("Monday")
        }else if(day === 2){
            setStringDay("Tuesday")
        }else if(day === 3){
            setStringDay("Wednesday")
        }else if(day === 4){
            setStringDay("Thursday")
        }else if(day === 5){
            setStringDay("Friday")
        }else if(day === 6){
            setStringDay("Saturday")
        }

        if(month === 0){
            setStringMonth("January")
        }else if(month === 1){
            setStringMonth("Febuary")
        }else if(month === 2){
            setStringMonth("March")
        }else if(month === 3){
            setStringMonth("April")
        }else if(month === 4){
            setStringMonth("May")
        }else if(month === 5){
            setStringMonth("June")
        }else if(month === 6){
            setStringMonth("July")
        }else if(month === 7){
            setStringMonth("August")
        }else if(month === 8){
            setStringMonth("November")
        }else if(month === 9){
            setStringMonth("October")
        }else if(month === 10){
            setStringMonth("September")
        }else if(month === 11){
            setStringMonth("December")
        }
    },[])
    return(
        <div className='rightView'>
            <div style={{
                backgroundColor: "#F7F7F7",
                width: "5px",
                height: "20%",
                position: "absolute",
                marginLeft: 62,
                borderColor: "#F7F7F7"
            }}/>
            <div className='book-time-detail'>
                {allData.map((room) => {
                    let date = new Date(room.startTime.split(" ")[0].split(" "))
                    let start = room.startTime.split(" ")[1].slice(0,5)
                    let end = room.endTime.split(" ")[1].slice(0,5)
                    date = date.toString().split(" ")
                    return(
                        <div key={room.id}>
                            <div style={{
                                backgroundColor: "#F7F7F7",
                                width: "5px",
                                height: "32%",
                                position: "absolute",
                                marginLeft: -30,
                                borderColor: "#F7F7F7"
                            }}/>
                            <div className='show-time'>
                                <div className='date-text'>
                                    {date[0]}, {date[2]} {date[1]} {date[3]}
                                </div>
                            </div>
                            <div>
                                <div className='book-time'>
                                    {start} - {end}
                                </div>
                                <div className='book-detail'>
                                    {room.title}
                                </div>
                            </div>
                        </div>
                        
                    )
                })
                }
                <div className='show-time'/>
            </div>
        </div>
    )
}
export default BookDetail;

