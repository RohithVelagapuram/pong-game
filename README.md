# Pong Game

A classic Pong game implementation using HTML, CSS, and JavaScript. Play against an AI opponent in this retro arcade-style game.

## Features

- **Player vs AI Gameplay**: Control the left paddle and compete against an intelligent computer opponent
- **Dual Control Methods**: Use mouse movement or arrow keys (↑/↓) to control your paddle
- **Physics-Based Ball**: Realistic ball bouncing with collision detection and spin effects
- **Scoreboard**: Real-time score tracking for both player and computer
- **Collision Detection**: Accurate collision detection for paddles and walls
- **AI Opponent**: Smart computer paddle with adjustable difficulty
- **Retro Design**: Classic green arcade aesthetic with smooth animations

## How to Play

1. **Open the Game**: Open `pong-game.html` in any modern web browser
2. **Control Your Paddle**:
   - Move your mouse up and down, OR
   - Use arrow keys (↑ Arrow Up, ↓ Arrow Down)
3. **Objective**: Hit the ball past the computer paddle to score points
4. **Win**: First to reach a desired score wins!

## Game Rules

- The ball bounces off the top and bottom walls
- If the ball passes your paddle (left side), the computer scores a point
- If the ball passes the computer paddle (right side), you score a point
- The ball's trajectory is affected by where it hits the paddle (spin effect)
- After each point, the ball resets to the center

## Controls

| Control | Action |
|---------|--------|
| Mouse Move | Move paddle up/down |
| ↑ Arrow Key | Move paddle up |
| ↓ Arrow Key | Move paddle down |
| Reset Button | Reset game score to 0-0 |

## Technical Details

### Technologies Used
- **HTML5**: Canvas API for rendering
- **CSS3**: Styling and layout
- **Vanilla JavaScript**: Game logic, physics, and AI

### Key Components

#### Game Objects
- **Player Paddle**: Left side, controlled by user
- **Computer Paddle**: Right side, AI-controlled
- **Ball**: Center object with physics and collision detection

#### Game Features
- `update()`: Updates game logic each frame
- `render()`: Renders all game elements
- `checkPaddleCollision()`: Detects ball-paddle collisions
- `updateAI()`: Controls computer paddle movement
- `resetBall()`: Resets ball position and velocity
- `resetGame()`: Resets entire game state

### Physics

- **Ball Speed**: 5 pixels per frame
- **Paddle Speed**: 6 pixels per frame (player)
- **AI Speed**: 4 pixels per frame (computer)
- **Collision Response**: Velocity reversal and spin application
- **Spin Calculation**: Based on collision point relative to paddle center

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with HTML5 Canvas support

## Installation

1. Clone or download this repository
2. Open `pong-game.html` in your web browser
3. Start playing!

No installation, dependencies, or build process required.

## Game Difficulty

The AI opponent is set to a medium difficulty level with:
- Reaction time (slight delay in movement)
- Dead zone (doesn't react to small ball movements)
- Speed limitation (moves at AI_SPEED)

You can adjust difficulty by modifying the `AI_SPEED` and dead zone values in the JavaScript code.

## Customization

You can easily customize the game by modifying these constants in the JavaScript:

```javascript
const PADDLE_WIDTH = 10;      // Width of paddles
const PADDLE_HEIGHT = 100;    // Height of paddles
const BALL_RADIUS = 8;        // Size of ball
const BALL_SPEED = 5;         // Ball movement speed
const PADDLE_SPEED = 6;       // Player paddle speed
const AI_SPEED = 4;           // Computer paddle speed
