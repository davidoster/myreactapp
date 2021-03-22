import React, {useState} from 'react'
import './MyButton.css'

function MyButton() {
    const [number, setNumber] = useState("0")

    return (
        <div>
            <button onClick={()=>{}}>Click Me!!!</button>
            <div>{number}</div>
            <div class="grid-container">
                <div class="grid-item display" id="display">{number}</div> 

                <div class="grid-item symbols">AC</div>
                <div class="grid-item symbols">{'\u00B1'}</div>
                <div class="grid-item symbols">%</div>
                <div class="grid-item calculations">/</div>

                <div class="grid-item numbers" onClick={()=>setNumber("7")}>7</div> {/* function() {setNumber("7")} */}
                <div class="grid-item numbers" onClick={()=>setNumber("8")}>8</div>
                <div class="grid-item numbers" onClick={()=>setNumber("9")}>9</div>
                <div class="grid-item calculations">X</div>

                <div class="grid-item numbers" onClick={()=>setNumber("4")}>4</div>
                <div class="grid-item numbers" onClick={()=>setNumber("5")}>5</div>
                <div class="grid-item numbers" onClick={()=>setNumber("6")}>6</div>
                <div class="grid-item calculations">-</div>

                <div class="grid-item numbers" onClick={()=>setNumber("1")}>1</div>
                <div class="grid-item numbers" onClick={()=>setNumber("2")}>2</div>
                <div class="grid-item numbers" onClick={()=>setNumber("3")}>3</div>
                <div class="grid-item calculations">+</div>

                <div class="grid-item digit0 numbers" onClick={()=>setNumber("0")}>0</div>
                <div class="grid-item numbers" onClick={()=>setNumber(".")}>.</div>
                <div class="grid-item equals calculations">=</div>
                
            </div>
        </div>
    )
}

export default MyButton