# Solar-System-Generator
To everyone interested in this project,

Thank you for taking the time to read this README. Just a note, this code/project was made with a lot of love and determination.
Although the code is completed and being implemented by the Roling Foundation, they were generous enough to allow me to release
an older beta version of the code. 

What is the Solar System Generator and its purpose?
The Solar System generator was built on the idea of aiding government groups NASA and SETI with a functional solar system generator that
helped narrow the search for terrestrial/potentially habitable planets. Using Earth as a reference guide, one can look out at the night 
sky and potentially calculate the luminosity of the star. 

Functionality:

Mass Calculation: By using the luminosity of the observed star and taking the average luminosity of the Sun, there is an observable mathematical formula (albeit a complex correlation, involving stellar classes and generation of intensity which I will touch upon below) that can derive this mass. You will find the simplified version in the scripts.js. 

Random cosmic mass disruption: By generating a random number between the physical/observable limitation (p-value<.05), this seems to correct for the random distrubution of clumped matter and variance between mass clusters after the Big Bang. This was added by the client to generate random variation among differing stellar classes. 

Spectral Class: Is the classification of the star observed. Classification model: Yerkes spectral classification.
Helpful guide: https://en.wikipedia.org/wiki/Stellar_classification#Yerkes_spectral_classification

Habitable Zone: This is why I created this app. Extrapolating the habitable zone from the data and deriving the width/circumference/distance to the borders allows for a more narrow search. As you can see by the code this is overlayed with our solar system and then is fitted by the variations of the target star. This can either narrow/widen the zone, shift the zone farther or closer, etc. 

Thank you again for taking the time to read this and I hope you get some use or ideas from this. 
You have my full consent to use my code in your own work and projects. Cheers!
