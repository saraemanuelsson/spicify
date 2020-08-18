import React, {Component} from 'react';
import MoodSelector from './MoodSelector';
import Logo from './Logo.js'
import MoodTracker from './MoodTracker.js'
import PlayBar from './PlayBar.js'
import PlayList from './PlayList.js'

class Home extends Component {

    constructor(props) {
        super(props);
        this.test = this.test.bind(this)
    }

    componentDidMount() {
        this.props.handleLoggedIn();
    }

    test() {
        this.props.handleSetTracks();
    }

    render() {
        return (
            <div className="home">
                <Logo />
                <MoodSelector 
                setSliderValence={this.props.setSliderValence} 
                setEmotion={this.props.setEmotion} 
                emotion={this.props.emotion}
                setSliderDanciness={this.props.setSliderDanciness}
                setSliderEnergy={this.props.setSliderEnergy}
                />
                <button onClick={this.test}>Heeeey</button>
                <PlayBar />
                <PlayList tracks={this.props.tracks}/>
            </div>
        )
        }

}

export default Home;