import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Item, TextField } from '@mui/material'
import Matchup from './components/Matchup';

function App() {
  const [bracket, setBracket] = useState({});
  const [matchData, setMatchData] = useState({leftTop: [], rightTop: [], leftBottom: [], rightBottom: []});
  const [matches, setMatches] = useState([]);
  const [username, setUsername] = useState('');
  
  const updateBracket = (round, winner) => {
    setBracket(prevState => {
      let newBracket = Object.assign({}, prevState)
      newBracket[round] = winner;
      return newBracket
    })
  }

  const fetchMatches = () => {
    fetch('./matches2022.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then((response) => {
      return response.json();
    }).then((data) => {
      setMatchData(data);
      var tempMatches = [];
      for (const [key, val] of Object.entries(data)) {
        for (const [key2, val2] of Object.entries(val)) {
          tempMatches.push(val2);
        }
      }
      tempMatches = tempMatches.flat()
      setMatches(tempMatches)
    })
  }

  const updateUsername = (event) => {
    setUsername(event.target.value)
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>MONGOOSE MADNESS</h2>
        <div className="bracket">
          <div className="discordBox">
            Discord Username:
            <TextField value={username} onChange={updateUsername}></TextField>
          </div>
          {matchData && (
            <div>
              {Object.keys(matchData.leftTop).map((match, i) => (
                <div key={match} style={{position: 'absolute', left: '2%', top: 3+(i*5) + '%'}}>
                  <Matchup val1={matches[2*i]} val2={matches[(2*i)+1]} id1={"round1match" + (i + 1)} round={1} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { Object.keys(matchData.leftBottom).map((match, i) => (
                <div key={match} style={{position: 'absolute', left: '2%', top: 57+(i*5) + '%'}}>
                  <Matchup val1={matches[(2*i)+16]} val2={matches[(2*i)+17]} id1={"round1match" + (i + 9)} round={1} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { Object.keys(matchData.rightTop).map((match, i) => (
                <div key={match} style={{position: 'absolute', right: '2%', top: 3+(i*5) + '%'}}>
                  <Matchup val1={matches[(2*i)+32]} val2={matches[(2*i)+33]} id1={"round1match" + (i + 17)} round={1} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { Object.keys(matchData.rightBottom).map((match, i) => (
                <div key={match} style={{position: 'absolute', right: '2%', top: 57+(i*5) + '%'}}>
                  <Matchup val1={matches[(2*i)+48]} val2={matches[(2*i)+49]} id1={"round1match" + (i + 25)} round={1} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [0,1,2,3].map((i) => (
                <div style={{position: 'absolute', left: '14%', top: 5+(i*10) + '%'}}>
                  <Matchup val1={bracket['round1match'+((i*2)+1)]} val2={bracket['round1match'+((i*2) + 2)]} id1={"round2match" + (i + 1)} round={2} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [4,5,6,7].map((i, j) => (
                <div style={{position: 'absolute', left: '14%', top: 60+(j*10) + '%'}}>
                  <Matchup val1={bracket['round1match'+((i*2)+1)]} val2={bracket['round1match'+((i*2) + 2)]} id1={"round2match" + (i + 1)} round={2} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [8,9,10,11].map((i, j) => (
                <div style={{position: 'absolute', right: '14%', top: 5+(j*10) + '%'}}>
                  <Matchup val1={bracket['round1match'+((i*2)+1)]} val2={bracket['round1match'+((i*2) + 2)]} id1={"round2match" + (i + 1)} round={2} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [12,13,14,15].map((i, j) => (
                <div style={{position: 'absolute', right: '14%', top: 60+(j*10) + '%'}}>
                  <Matchup val1={bracket['round1match'+((i*2)+1)]} val2={bracket['round1match'+((i*2) + 2)]} id1={"round2match" + (i + 1)} round={2} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [0,1].map((i, j) => (
                <div style={{position: 'absolute', left: '26%', top: 10+(j*20) + '%'}}>
                  <Matchup val1={bracket['round2match'+((i*2)+1)]} val2={bracket['round2match'+((i*2) + 2)]} id1={"round3match" + (i + 1)} round={3} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [2,3].map((i, j) => (
                <div style={{position: 'absolute', left: '26%', top: 65+(j*20) + '%'}}>
                  <Matchup val1={bracket['round2match'+((i*2)+1)]} val2={bracket['round2match'+((i*2) + 2)]} id1={"round3match" + (i + 1)} round={3} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [4,5].map((i, j) => (
                <div style={{position: 'absolute', right: '26%', top: 10+(j*20) + '%'}}>
                  <Matchup val1={bracket['round2match'+((i*2)+1)]} val2={bracket['round2match'+((i*2) + 2)]} id1={"round3match" + (i + 1)} round={3} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [6,7].map((i, j) => (
                <div style={{position: 'absolute', right: '26%', top: 65+(j*20) + '%'}}>
                  <Matchup val1={bracket['round2match'+((i*2)+1)]} val2={bracket['round2match'+((i*2) + 2)]} id1={"round3match" + (i + 1)} round={3} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [0,1].map((i, j) => (
                <div style={{position: 'absolute', left: '32%', top: 20+(j*55) + '%'}}>
                  <Matchup val1={bracket['round3match'+((i*2)+1)]} val2={bracket['round3match'+((i*2) + 2)]} id1={"round4match" + (i + 1)} round={4} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [2,3].map((i, j) => (
                <div style={{position: 'absolute', right: '32%', top: 20+(j*55) + '%'}}>
                  <Matchup val1={bracket['round3match'+((i*2)+1)]} val2={bracket['round3match'+((i*2) + 2)]} id1={"round4match" + (i + 1)} round={4} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              { [0,1].map((i, j) => (
                <div style={{position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', top: 20 + (j*55) + '%'}}>
                  <Matchup val1={bracket['round4match'+((i*2)+1)]} val2={bracket['round4match'+((i*2) + 2)]} id1={"round5match" + (i + 1)} round={5} updateBracket={updateBracket}></Matchup>
                </div>
              ))}
              <div style={{position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', top: '45%'}}>
                <Matchup val1={bracket['round5match1']} val2={bracket['round5match2']} id1={"final"} round={6} updateBracket={updateBracket}></Matchup>
              </div>
              {bracket.final !== undefined && username !== '' && (
                <div className='confirmButton'>
                  <Button variant="contained" color="primary">
                    Submit Bracket
                  </Button>
                </div>
              )}

            </div>
          )}
        </div>
      </header>
      {/* <div>
        {JSON.stringify(bracket)}
      </div> */}
    </div>
  );
}

export default App;
