# HuiYang-Glitch-Slicer
This plugin is a simple slicer that allows the addition of glitch and granular effect, featuring three major modules:

## Global Speed Control
1. Pitch by Note Mode: Pitch is determined by the note's high or low, affecting the pitch of the slice.
2. Manual Speed Control: Allows for manual speed adjustments, including reverse playback.
3. Random Speed on Specified Beats: Speed can be randomized at specific beats.

## Global Pitch Control
1. Formant Sound Control: Adjusts the sound's formant.
2. Zero Crossing Change: Between the Lower Pitch and Higher Pitch Button, there can be a dramatic change because the audio switches to the pitch set by another button whenever one button becomes zero.
3. Pitchshift Mode And Quality

## Loop Control
1. Normal Mode: MIDI note control over different slices.
2. Glitch Mode: Offset grid allows for specifying or random playback of different slices, creating a granular effect. The Offset values can also be applied to velocity or pitch to create variations in volume or pitch.


## Implementation  


outermost patcher
![截图1](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/cdf41f1d-83d6-4193-a499-b698f0e94625)
![截图2](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/a9281354-20aa-4a88-aa04-b2c60f39b6c8)
![截图3](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/c50bc4ec-f73e-4cf9-be2b-67df0e2b246f)


bpatcher for global speed control
![截图4](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/5941927b-47d5-4828-b608-66e4ed379d31)


bpatcher for global pitch control
![截图5](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/afd42017-c220-46ec-8308-a83886d87169)


bpatcher for playback and loop control
![截图6](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/a460e185-8161-4fc0-a52e-59c8ecec2a27)
![Uploading 截图7.png…]()


bpatcher for grid
![截图8](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/ce62cf17-af94-4f4f-bdd9-00bd9c454ee8)


bpatcher for glitch slice scanning
![截图9](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/05198a8c-09f5-4905-8421-64d8b1391d94)


