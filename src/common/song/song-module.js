
class PlaySound{
  constructor(props) {
    super(props);

    this.state = {
      play: true
    };

    this.filePath = "public/El Chombo - Chacarron.mp3";
    this.audio = new Audio(this.filePath);
    this.audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    this.togglePlay = this.togglePlay.bind(this);
  }
  togglePlay() {
    this.setState({
        play: !this.state.play
    });

    this.state.play ? this.audio.play() : this.audio.pause();
}

render() {
    return (
        <div>
            <button
                id="audioBtn"
                onClick={this.togglePlay}> {this.state.play ? <PlayArrow /> : <Pause />}
            </button>
        </div>
    );
  }
}