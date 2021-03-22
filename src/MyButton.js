import './MyButton.css'

function clickme() {
    alert("You clicked me!!!!")
}

function MyButton() {


    return (
        <div>
            <button onClick={clickme}>Click Me!!!</button>
            <div class="grid-container">
                <div class="grid-item display" id="display">0</div>

                <div class="grid-item symbols">AC</div>
                <div class="grid-item symbols">{'\u00B1'}</div>
                <div class="grid-item symbols">%</div>
                <div class="grid-item calculations">/</div>

                <div class="grid-item numbers">7</div>
                <div class="grid-item numbers">8</div>
                <div class="grid-item numbers">9</div>
                <div class="grid-item calculations">X</div>

                <div class="grid-item numbers">4</div>
                <div class="grid-item numbers">5</div>
                <div class="grid-item numbers">6</div>
                <div class="grid-item calculations">-</div>

                <div class="grid-item numbers">1</div>
                <div class="grid-item numbers">2</div>
                <div class="grid-item numbers">3</div>
                <div class="grid-item calculations">+</div>

                <div class="grid-item digit0 numbers">0</div>
                <div class="grid-item numbers">.</div>
                <div class="grid-item equals calculations">=</div>
                {/* <script src="script.js"></script> */}
            </div>
        </div>

    )
}

export default MyButton