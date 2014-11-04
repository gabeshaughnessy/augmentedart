// Sprite Sheet animation - this gets applied to the layer composition that is repeated.
// Adjustment Layer 4 is the name of the control layer
// it has the effects 'x repeats', 'width', 'height', 'offset', and 'autoscale'
// composition size needs to match your sprite sheet target size.
(this.index-2) * thisComp.frameDuration * thisComp.layer("Adjustment Layer 4").effect("Offset")("Slider");



//NULL objects parent the puppet pins
//this goes on the expression of the puppet pin's position.
//the layer name for the null object
n=thisComp.layer("Null Object Name"); 
nullpos=n.toComp(n.anchorPoint);
fromComp(nullpos);

n=thisComp.layer(""); 
nullpos=n.toComp(n.anchorPoint);
fromComp(nullpos);
