import './App.css';
import personA from "./assets/personA.webp";
import personB from "./assets/personB.webp";

function App() {
  return (
    <div className="App">
      <main>
        <div className='container'>
          <div className='hero'>
            <h1 className='heroHeading'>Be specific</h1>
            <p className='heroSub'>If someone sent you this link and you ended up here, it's likely that you have asked an incomplete question.</p>
          </div>
          <div className='example'>
            <div className='chat'>
              <div className='conversation'>

                <div className='chatMsg'>
                  <div className='chatPfp'>
                    <img className='Pfp' src={personA} alt="Chat person A" />
                  </div>
                  <div className='chatDetails'>
                    <span className='sender'>Bob</span>
                    <span className='when'>Today at 11:40pm</span>
                    <br></br>
                    <span className='message'>Where do I get the download?</span>
                  </div>
                </div>

                <div className='chatMsg'>
                  <div className='chatPfp'>
                    <img className='Pfp' src={personB} alt="Chat person A" />
                  </div>
                  <div className='chatDetails'>
                    <span className='sender'>Albert</span>
                    <span className='when'>Today at 11:41pm</span>
                    <br></br>
                    <span className='message'>The download for what?..</span>
                  </div>
                </div>

                <div className='chatMsg'>
                  <div className='chatPfp'>
                    <img className='Pfp' src={personA} alt="Chat person A" />
                  </div>
                  <div className='chatDetails'>
                    <span className='sender'>Bob</span>
                    <span className='when'>Today at 11:42pm</span>
                    <br></br>
                    <span className='message'>Oh, the one for Overwatch 2!</span>
                  </div>
                </div>

                <div className='chatMsg'>
                  <div className='chatPfp'>
                    <img className='Pfp' src={personB} alt="Chat person A" />
                  </div>
                  <div className='chatDetails'>
                    <span className='sender'>Albert</span>
                    <span className='when'>Today at 11:44pm</span>
                    <br></br>
                    <span className='message link'>https://overwatch.blizzard.com/</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='exampleContent'>
              <h1 className='exampleHeading'>How <span className='not'>NOT</span> to do it!</h1>
              <p className='exampleSub'><span className='mobileText'>In the example below</span> Bob is asking an extremely general question and wants to know where to get the download. Unfortunately, Bob doesn't seem to know how big the internet is and that there are <strong>several billion download links</strong> spread all over the internet.
                <br></br><br></br>
                Bob now expects his counterpart to know exactly which download he is talking about. Meanwhile, Albert wastes valuable time pondering and trying to figure out what Bob is looking for. <strong>How annoying!</strong>
              </p>
            </div>
          </div>


          <div className='example'>
            <div className='chat'>
              <div className='conversation'>

                <div className='chatMsg'>
                  <div className='chatPfp'>
                    <img className='Pfp' src={personA} alt="Chat person A" />
                  </div>
                  <div className='chatDetails'>
                    <span className='sender'>Bob</span>
                    <span className='when'>Today at 11:40pm</span>
                    <br></br>
                    <span className='message'>Where do I get the download for Overwatch 2?</span>
                  </div>
                </div>

                <div className='chatMsg'>
                  <div className='chatPfp'>
                    <img className='Pfp' src={personB} alt="Chat person A" />
                  </div>
                  <div className='chatDetails'>
                    <span className='sender'>Albert</span>
                    <span className='when'>Today at 11:41pm</span>
                    <br></br>
                    <span className='message'><span className='link'>https://overwatch.blizzard.com/</span> Here it is!</span>
                  </div>
                </div>

                <div className='chatMsg'>
                  <div className='chatPfp'>
                    <img className='Pfp' src={personA} alt="Chat person A" />
                  </div>
                  <div className='chatDetails'>
                    <span className='sender'>Bob</span>
                    <span className='when'>Today at 11:42pm</span>
                    <br></br>
                    <span className='message'>Wow awesome, thank you! 😊</span>
                  </div>
                </div>

                <div className='chatMsg'>
                  <div className='chatPfp'>
                    <img className='Pfp' src={personB} alt="Chat person A" />
                  </div>
                  <div className='chatDetails'>
                    <span className='sender'>Albert</span>
                    <span className='when'>Today at 11:44pm</span>
                    <br></br>
                    <span className='message'>You're welcome! 🥸</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='exampleContent'>
              <h1 className='exampleHeading'>Do it <span className='likethis'>LIKE THIS</span>!</h1>
              <p className='exampleSub'>
                <span className='mobileText'>In the example below</span> Bob successfully asks a <strong>complete, detailed question</strong> that makes it easy for Albert to understand what he is looking for and thus Albert saves a lot of <strong>valueable time and brainpower</strong>.<br></br><br></br>Also, look at how extremely smooth the conversation went. <br></br>It almost looks like the two are becoming friends! 😃
              </p>
            </div>
          </div>
          <footer>
          <hr></hr>Made with ❤️ in ⚛️ by xyba<br></br>This website is open-source, find the repo <a target="blank" href='https://github.com/xyba1337/bespecific.wtf'>here</a></footer>
        </div>
      </main>
    </div>
  );
}

export default App;
