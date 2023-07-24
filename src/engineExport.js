/** 
 * LittleJS Module Export
 * <br> - Export engine as a module with extra functions where necessary
 */

'use strict';

import {
    canvasMaxSize,
    canvasFixedSize,
    cavasPixelated,
    fontDefault,
    tileSizeDefault,
    tileFixBleedScale,
    enablePhysicsSolver,
    objectDefaultMass,
    objectDefaultDamping,
    objectDefaultAngleDamping,
    objectDefaultElasticity,
    objectDefaultFriction,
    objectMaxSpeed,
    gravity,
    particleEmitRateScale,
    cameraPos,
    cameraScale,
    glEnable,
    glOverlay,
    gamepadsEnable,
    gamepadDirectionEmulateStick,
    inputWASDEmulateDirection,
    touchGamepadEnable,
    touchGamepadAnalog,
    touchGamepadSize,
    touchGamepadAlpha,
    vibrateEnable,
    soundEnable,
    soundVolume,
    soundDefaultRange,
    soundDefaultTaper,
    medalDisplayTime,
    medalDisplaySlideTime,
    medalDisplaySize,
    medalDisplayIconSize,
    medalsPreventUnlock
} from './engineSettings.js';

import {
    Vector2
} from './engineUtilities.js';

// Setters for all variables that devs will need to modify

/** Set position of camera in world space
 *  @param {Vector2} pos
 *  @memberof Settings */
export const setCameraPos = (pos)=> cameraPos = pos;

/** Set scale of camera in world space
 *  @param {Number} scale
 *  @memberof Settings */
export const setCameraScale = (scale)=> cameraScale = scale;

/** Set max size of the canvas
 *  @param {Vector2} size
 *  @memberof Settings */
export const setCanvasMaxSize = (size)=> canvasMaxSize = size;

/** Set fixed size of the canvas
 *  @param {Vector2} size
 *  @memberof Settings */
export const setCanvasFixedSize = (size)=> canvasFixedSize = size;

/** Disables anti aliasing for pixel art if true
 *  @param {Boolean} pixelated
 *  @memberof Settings */
export const setCavasPixelated = (pixelated)=> cavasPixelated = pixelated;

/** Set default font used for text rendering
 *  @param {String} font
 *  @memberof Settings */
export const setFontDefault = (font)=> fontDefault = font;

/** Set if webgl rendering is enabled
 *  @param {Boolean} enable
 *  @memberof Settings */
export const setGlEnable = (enable)=> glEnable = enable;

/** Set to not composite the WebGL canvas
 *  @param {Boolean} overlay
 *  @memberof Settings */
export const setGlOverlay = (overlay)=> glOverlay = overlay;

/** Set default size of tiles in pixels
 *  @param {Vector2} size
 *  @memberof Settings */
export const setTileSizeDefault = (size)=> tileSizeDefault = size;

/** Set to prevent tile bleeding from neighbors in pixels
 *  @param {Number} scale
 *  @memberof Settings */
export const setTileFixBleedScale = (scale)=> tileFixBleedScale = scale;

/** Set if collisions between objects are enabled
 *  @param {Boolean} enable
 *  @memberof Settings */
export const setEnablePhysicsSolver = (enable)=> enablePhysicsSolver = enable;

/** Set default object mass for collison calcuations
 *  @param {Number} mass
 *  @memberof Settings */
export const setObjectDefaultMass = (mass)=> objectDefaultMass = mass;

/** Set how much to slow velocity by each frame
 *  @param {Number} damping
 *  @memberof Settings */
export const setObjectDefaultDamping = (damp)=> objectDefaultDamping = damp;

/** Set how much to slow angular velocity each frame
 *  @param {Number} damping
 *  @memberof Settings */
export const setObjectDefaultAngleDamping = (damp)=> objectDefaultAngleDamping = damp;

/** Set how much to bounce when a collision occur
 *  @param {Number} elasticity
 *  @memberof Settings */
export const setObjectDefaultElasticity = (elasticity)=> objectDefaultElasticity = elasticity;

/** Set how much to slow when touching
 *  @param {Number} friction
 *  @memberof Settings */
export const setObjectDefaultFriction = (friction)=> objectDefaultFriction = friction;

/** Set max speed to avoid fast objects missing collisions
 *  @param {Number} speed
 *  @memberof Settings */
export const setObjectMaxSpeed = (speed)=> objectMaxSpeed = speed;

/** Set how much gravity to apply to objects along the Y axis
 *  @param {Number} gravity
 *  @memberof Settings */
export const setGravity = (g)=> gravity = g;

/** Set to scales emit rate of particles
 *  @param {Number} scale
 *  @memberof Settings */
export const setParticleEmitRateScale = (scale)=> particleEmitRateScale = scale;

/** Set if gamepads are enabled
 *  @param {Boolean} enable
 *  @memberof Settings */
export const setGamepadsEnable = (enable)=> gamepadsEnable = enable;

/** Set if the dpad input is also routed to the left analog stick
 *  @param {Boolean} enable
 *  @memberof Settings */
export const setGamepadDirectionEmulateStick = (enable)=> gamepadDirectionEmulateStick = enable;

/** Set if true the WASD keys are also routed to the direction keys
 *  @param {Boolean} enable
 *  @memberof Settings */
export const setInputWASDEmulateDirection = (enable)=> inputWASDEmulateDirection = enable;

/** Set if touch gamepad should appear on mobile devices
 *  @param {Boolean} enable
 *  @memberof Settings */
export const setTouchGamepadEnable = (enable)=> touchGamepadEnable = enable;

/** Set if touch gamepad should be analog stick or 8 way dpad
 *  @param {Boolean} analog
 *  @memberof Settings */
export const setTouchGamepadAnalog = (analog)=> touchGamepadAnalog = analog;

/** Set size of virutal gamepad for touch devices in pixels
 *  @param {Number} size
 *  @memberof Settings */
export const setTouchGamepadSize = (size)=> touchGamepadSize = size;

/** Set transparency of touch gamepad overlay
 *  @param {Number} alpha
 *  @memberof Settings */
export const setTouchGamepadAlpha = (alpha)=> touchGamepadAlpha = alpha;

/** Set to allow vibration hardware if it exists
 *  @param {Boolean} enable
 *  @memberof Settings */
export const setVibrateEnable = (enable)=> vibrateEnable = enable;

/** Set to disable all audio code
 *  @param {Boolean} enable
 *  @memberof Settings */
export const setSoundEnable = (enable)=> soundEnable = enable;

/** Set volume scale to apply to all sound, music and speech
 *  @param {Number} volume
 *  @memberof Settings */
export const setSoundVolume = (volume)=> soundVolume = volume;

/** Set default range where sound no longer plays
 *  @param {Number} range
 *  @memberof Settings */
export const setSoundDefaultRange = (range)=> soundDefaultRange = range;

/** Set default range percent to start tapering off sound
 *  @param {Number} taper
 *  @memberof Settings */
export const setSoundDefaultTaper = (taper)=> soundDefaultTaper = taper;

/** Set how long to show medals for in seconds
 *  @param {Number} time
 *  @memberof Settings */
export const setMedalDisplayTime = (time)=> medalDisplayTime = time;

/** Set how quickly to slide on/off medals in seconds
 *  @param {Number} time
 *  @memberof Settings */
export const setMedalDisplaySlideTime = (time)=> medalDisplaySlideTime = time;

/** Set size of medal display
 *  @param {Vector2} size
 *  @memberof Settings */
export const setMedalDisplaySize = (size)=> medalDisplaySize = size;

/** Set size of icon in medal display
 *  @param {Number} size
 *  @memberof Settings */
export const setMedalDisplayIconSize = (size)=> medalDisplayIconSize = size;

/** Set to stop medals from being unlockable
 *  @param {Boolean} preventUnlock
 *  @memberof Settings */
export const setMedalsPreventUnlock = (prevent)=> medalsPreventUnlock = prevent;

/** Set if watermark with FPS should be shown
 *  @param {Boolean} show
 *  @memberof Debug */
export const setShowWatermark = (show)=> showWatermark = show;

/** Set if god mode is enabled
 *  @param {Boolean} enable
 *  @memberof Debug */
export const setGodMode = (enable)=> godMode = enable;

/** Set key code used to toggle debug mode, Esc by default
 *  @param {Number} key
 *  @memberof Debug */
export const setDebugKey = (key)=> debugKey = key;