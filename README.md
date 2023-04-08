<img src="https://github.com/JohnApCo/drum-machine/blob/main/public/img/Drum-Machine.png?raw=true"></img>

<h1 align="center">Drum Machine</h1>

<div align="center">
  <h3>
    <a href="https://codepen.io/JohnApCo/full/ExpWBQd" color="white">
      Live
    </a>
   <span> | </span>
    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine">
      Challenge
    </a>
  </h3>
</div>
<div align="center">
   Solution for a challenge from  <a href="https://www.freecodecamp.org/" target="_blank">freecodecamp.org</a>.
</div>
<br>
<br>
<br>

## About The Project

<p> Modern drum machines are electronic musical instruments that produce drum sounds through synthesis or sampling.

### Users should be able to:

<p><strong>User Story #1:</strong> I should be able to see an outer container with a corresponding <code>id="drum-machine"</code> that contains all other elements.</p>
<p><strong>User Story #2:</strong> Within <code>#drum-machine</code> I can see an element with a corresponding <code>id="display"</code>.</p>
<p><strong>User Story #3:</strong> Within <code>#drum-machine</code> I can see 9 clickable drum pad elements, each with a class name of <code>drum-pad</code>, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: <code>Q</code>, <code>W</code>, <code>E</code>, <code>A</code>, <code>S</code>, <code>D</code>, <code>Z</code>, <code>X</code>, <code>C</code>. The drum pads MUST be in this order.</p>
<p><strong>User Story #4:</strong> Within each <code>.drum-pad</code>, there should be an HTML5 <code>audio</code> element which has a <code>src</code> attribute pointing to an audio clip, a class name of <code>clip</code>, and an id corresponding to the inner text of its parent <code>.drum-pad</code> (e.g. <code>id="Q"</code>, <code>id="W"</code>, <code>id="E"</code> etc.).</p>
<p><strong>User Story #5:</strong> When I click on a <code>.drum-pad</code> element, the audio clip contained in its child <code>audio</code> element should be triggered.</p>
<p><strong>User Story #6:</strong> When I press the trigger key associated with each <code>.drum-pad</code>, the audio clip contained in its child <code>audio</code> element should be triggered (e.g. pressing the <code>Q</code> key should trigger the drum pad which contains the string <code>Q</code>, pressing the <code>W</code> key should trigger the drum pad which contains the string <code>W</code>, etc.).</p>
<p><strong>User Story #7:</strong> When a <code>.drum-pad</code> is triggered, a string describing the associated audio clip is displayed as the inner text of the <code>#display</code> element (each string must be unique).</p>

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- Grid
- Desktop-first workflow
- React

## What I learned

I learned how to use event listeners to control keyboard to control drum machine. I also use hooks to control state in React. It turned out to be an amazing experience.
