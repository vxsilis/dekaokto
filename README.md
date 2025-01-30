<br />
<div align="center">
  <a href="https://github.com/vxsilis/dekaokto">
    <img src="images/18mblack.png#gh-light-mode-only" alt="Logo"  height="80">
    <img src="images/18mwhite.png#gh-dark-mode-only"  alt="Logo"  height="80">
  </a>

<h3 align="center">18 Μέρες Μετά (18 Days Later)</h3>

  <p align="center">
  is an interactive text-based mystery game developed with <a target="_blank" href="https://github.com/klembot/twinejs">Twine</a> <br /> 
    <br />
    <br />
    <a href="https://18mm.netlify.app/">Play The Game</a>
    ·
    <a href="https://github.com/vxsilis/dekaokto/issues">Report Bug</a>
    ·
    <a href="https://github.com/vxsilis/dekaokto/issues">Request Feature</a>
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>




## About The Project


<img src="https://github.com/vxsilis/dekaokto/blob/main/images/18mm.gif" height="250" />


### Built With

* [Twine](https://github.com/klembot/twinejs)
* [Harlowe](https://foss.heptapod.net/games/harlowe/)
* [Netlify](https://www.netlify.com)


## Installation


Download or clone this repo
   ```sh
   git clone https://github.com/vxsilis/dekaokto.git
   ```

By forking and importing the file to Twine you automatically import the Harlowe library which is prerequisite to code the audio timing.

```index.html``` is the main menu of the game which procceds to ```game.html``` which is the actual file written in Twine.

The ```game.html``` file is not supposed to be opened with a classic text editor but only throught the Twine Engine. The custom CSS and JS used for this project will appear under "Story JavaScript" and "Story Stylesheet" but you can also find the isolated code used [here](https://github.com/vxsilis/dekaokto/tree/main/in-game%20code).




## Usage
The most common way we used to show links and move from passage to passage is
```
[[Talk with the policeman|go to the policeman passage]]
```
or simpler
```
[[Talk with policeman]]
```

For text that will be displayed after some seconds
```
|clue)[This text went live 2 seconds late]

{(live: 2s)[
    (show: ?clue)
    (stop:)
]}
```
Every part of the story is wrapper around the ```<div class="story">``` and the clickable links that moves the player to a new passage are wrapped around ```<div class="options">```to follow the same styling and layout.


_For more examples, please refer to the [Harlowe Documentation](https://twine2.neocities.org) & [Twine Documentation](https://twine2.neocities.org)_

<p align="right">(<a href="#top">back to top</a>)</p>




## Contributing

Do you want to fix a bug or make an enchancement? Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. To make sure you are contributing in the same coding path the project started check the [Usage](#Usage) tab 

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




## License

View code and images licence [here](https://github.com/vxsilis/dekaokto/blob/main/LICENSE). <br />
All the sounds are free to use except chase.mp3, woman-fight.mp3, fight.mp3 which contain music that need to credit the [original artist](https://www.youtube.com/watch?v=9tYBMywPpgA)


<p align="right">(<a href="#top">back to top</a>)</p>


