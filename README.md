# max-shift-register-sequencer
 A Max implementation of a shift register sequencer like the MTM Turing Machine and the Klee Sequencer

- Intuitive rhythmic input notation in binary
- Consise decimal notation for saving and exploration
- Arithmetic operations create variations
- Complementary rhythms from inverted bits
- Pattern-morphing by global or per-step inversion probability
- Forward and backward bit shifting
- Output triggers
- Scalable CV out (with quantizer?)

---

## What is it?

### Inputs
- Clock (bangs)
- Number
  - Decimal (0—65,536)
  - Binary (16 digits)
  - Hex?

### Process
- Bidirectional bit shifting (i.e. the direction of the sequencer)
- Invert all bits (create 'complementary' rhythm)
- Randomise bit inversion amount

### Outputs
- Triggers (bangs)
- CV (0-1)
