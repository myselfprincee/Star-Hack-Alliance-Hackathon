const questions = [
  {
    "question": "What is the largest planet in our solar system?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars",
      "Saturn"
    ],
    "correctAnswer": "Jupiter"
  },
  {
    "question": "What is the name of the first artificial satellite launched into space?",
    "options": [
      "Voyager 1",
      "Sputnik 1",
      "Hubble Space Telescope",
      "International Space Station"
    ],
    "correctAnswer": "Sputnik 1"
  },
  {
    "question": "Which planet has the most moons in our solar system?",
    "options": [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    "correctAnswer": "Jupiter"
  },
  {
    "question": "What is the largest moon in our solar system?",
    "options": [
      "Titan",
      "Ganymede",
      "Europa",
      "Callisto"
    ],
    "correctAnswer": "Ganymede"
  },
  {
    "question": "Which planet is famous for its beautiful rings?",
    "options": [
      "Jupiter",
      "Mars",
      "Saturn",
      "Uranus"
    ],
    "correctAnswer": "Saturn"
  },
  {
    "question": "Who was the first human to step on the Moon?",
    "options": [
      "Neil Armstrong",
      "Yuri Gagarin",
      "Buzz Aldrin",
      "Michael Collins"
    ],
    "correctAnswer": "Neil Armstrong"
  },
  {
    "question": "What is the name of the closest star to Earth?",
    "options": [
      "Proxima Centauri",
      "Alpha Centauri A",
      "Sirius",
      "Betelgeuse"
    ],
    "correctAnswer": "Proxima Centauri"
  },
  {
    "question": "Which space telescope was launched into orbit by NASA in 1990?",
    "options": [
      "Hubble Space Telescope",
      "James Webb Space Telescope",
      "Spitzer Space Telescope",
      "Chandra X-ray Observatory"
    ],
    "correctAnswer": "Hubble Space Telescope"
  },
  {
    "question": "What is the name of the largest volcano in our solar system, located on Mars?",
    "options": [
      "Olympus Mons",
      "Mauna Kea",
      "Mount Everest",
      "Vesuvius"
    ],
    "correctAnswer": "Olympus Mons"
  },
  {
    "question": "Which planet has the Great Red Spot, a massive storm that has been raging for centuries?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars",
      "Saturn"
    ],
    "correctAnswer": "Jupiter"
  },
  {
    "question": "What is the name of the spacecraft that landed on Mars in 2012 to explore its surface?",
    "options": [
      "Curiosity",
      "Spirit",
      "Opportunity",
      "Perseverance"
    ],
    "correctAnswer": "Curiosity"
  },
  {
    "question": "Which planet is known as the 'evening star' or 'morning star' because it is often visible at dawn and dusk?",
    "options": [
      "Venus",
      "Mars",
      "Mercury",
      "Jupiter"
    ],
    "correctAnswer": "Venus"
  },
  {
    "question": "What is the name of the first American astronaut to orbit the Earth?",
    "options": [
      "Alan Shepard",
      "John Glenn",
      "Neil Armstrong",
      "Buzz Aldrin"
    ],
    "correctAnswer": "John Glenn"
  },
  {
    "question": "Which spacecraft was the first to land humans on the Moon?",
    "options": [
      "Apollo 11",
      "Apollo 13",
      "Gemini 8",
      "Voyager 1"
    ],
    "correctAnswer": "Apollo 11"
  },
  {
    "question": "Which planet has a day longer than its year?",
    "options": [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "correctAnswer": "Venus"
  },
  {
    "question": "What is the name of the brightest star in the constellation Orion?",
    "options": [
      "Betelgeuse",
      "Rigel",
      "Sirius",
      "Aldebaran"
    ],
    "correctAnswer": "Rigel"
  },
  {
    "question": "Which moon of Saturn is known for its hydrocarbon lakes, making it one of the most Earth-like bodies in the solar system?",
    "options": [
      "Titan",
      "Enceladus",
      "Mimas",
      "Rhea"
    ],
    "correctAnswer": "Titan"
  },
  {
    "question": "What is the name of the brightest asteroid in the asteroid belt?",
    "options": [
      "Ceres",
      "Vesta",
      "Eris",
      "Juno"
    ],
    "correctAnswer": "Vesta"
  },
  {
    "question": "Which dwarf planet was demoted from full planet status in 2006?",
    "options": [
      "Eris",
      "Pluto",
      "Haumea",
      "Makemake"
    ],
    "correctAnswer": "Pluto"
  },
  {
    "question": "What is the name of the largest crater on the Moon, visible from Earth?",
    "options": [
      "Tycho",
      "Copernicus",
      "Clavius",
      "Aristarchus"
    ],
    "correctAnswer": "Tycho"
  },
  {
    "question": "Which mission successfully landed humans on the Moon for the first time?",
    "options": [
      "Apollo 8",
      "Apollo 11",
      "Apollo 13",
      "Apollo 14"
    ],
    "correctAnswer": "Apollo 11"
  },
  {
    "question": "What is the name of the spacecraft that visited Pluto in 2015, providing detailed images of the dwarf planet for the first time?",
    "options": [
      "Voyager 1",
      "New Horizons",
      "Cassini",
      "Galileo"
    ],
    "correctAnswer": "New Horizons"
  },
  {
    "question": "Which planet has the tallest volcano in the solar system, named Olympus Mons?",
    "options": [
      "Mars",
      "Venus",
      "Mercury",
      "Earth"
    ],
    "correctAnswer": "Mars"
  },
  {
    "question": "What is the name of the spacecraft that discovered water ice on Mercury in 2012?",
    "options": [
      "Messenger",
      "Mariner 10",
      "Voyager 2",
      "Pioneer 10"
    ],
    "correctAnswer": "Messenger"
  },
  {
    "question": "Which planet has the fastest winds in the solar system, reaching speeds of up to 1,100 miles per hour?",
    "options": [
      "Neptune",
      "Uranus",
      "Saturn",
      "Jupiter"
    ],
    "correctAnswer": "Neptune"
  },
  {
    "question": "What is the name of the largest moon of Neptune?",
    "options": [
      "Triton",
      "Miranda",
      "Proteus",
      "Nereid"
    ],
    "correctAnswer": "Triton"
  },
  {
    "question": "Which spacecraft was the first to fly by Pluto in 2015, providing detailed images of the dwarf planet for the first time?",
    "options": [
      "New Horizons",
      "Voyager 1",
      "Cassini",
      "Galileo"
    ],
    "correctAnswer": "New Horizons"
  },
  {
    "question": "What is the name of the only planet in our solar system known to support life?",
    "options": [
      "Mars",
      "Venus",
      "Earth",
      "Mercury"
    ],
    "correctAnswer": "Earth"
  },
  {
    "question": "Which planet is famous for its beautiful rings made of ice and dust particles?",
    "options": [
      "Jupiter",
      "Mars",
      "Saturn",
      "Uranus"
    ],
    "correctAnswer": "Saturn"
  },
  {
    "question": "What is the name of the first artificial satellite to orbit the Moon?",
    "options": [
      "Luna 1",
      "Explorer 1",
      "Sputnik 1",
      "Luna 2"
    ],
    "correctAnswer": "Luna 1"
  },
  {
    "question": "Which moon of Jupiter has active volcanoes that spew out sulfur-rich plumes into space?",
    "options": [
      "Io",
      "Europa",
      "Ganymede",
      "Callisto"
    ],
    "correctAnswer": "Io"
  },
  {
    "question": "What is the name of the spacecraft that successfully landed on Mars in February 2021 to search for signs of ancient life?",
    "options": [
      "Perseverance",
      "Curiosity",
      "Spirit",
      "Opportunity"
    ],
    "correctAnswer": "Perseverance"
  },
  {
    "question": "Which planet has the highest mountain in the solar system, named Olympus Mons?",
    "options": [
      "Mars",
      "Venus",
      "Mercury",
      "Earth"
    ],
    "correctAnswer": "Mars"
  },
  {
    "question": "What is the name of the spacecraft that orbited Saturn and its moons, sending back stunning images of the planet's rings and moons?",
    "options": [
      "Cassini",
      "Voyager 1",
      "New Horizons",
      "Galileo"
    ],
    "correctAnswer": "Cassini"
  },
  {
    "question": "Which spacecraft was the first to land on the far side of the Moon?",
    "options": [
      "Apollo 11",
      "Chang'e 4",
      "Luna 2",
      "Apollo 13"
    ],
    "correctAnswer": "Chang'e 4"
  },
  {
    "question": "What is the name of the first space telescope launched by NASA in 1990, which has provided stunning images of distant galaxies and nebulae?",
    "options": [
      "Hubble Space Telescope",
      "James Webb Space Telescope",
      "Spitzer Space Telescope",
      "Chandra X-ray Observatory"
    ],
    "correctAnswer": "Hubble Space Telescope"
  },
  {
    "question": "Which planet is known for its beautiful rings and many moons, including Titan, a moon with lakes of liquid methane and ethane?",
    "options": [
      "Jupiter",
      "Mars",
      "Saturn",
      "Uranus"
    ],
    "correctAnswer": "Saturn"
  },
  {
    "question": "What is the name of the largest moon in our solar system?",
    "options": [
      "Titan",
      "Ganymede",
      "Europa",
      "Callisto"
    ],
    "correctAnswer": "Ganymede"
  },
  {
    "question": "What is the name of the region in space where gravitational forces are so strong that nothing, not even light, can escape?",
    "options": [
      "Singularity",
      "Event Horizon",
      "Black Hole",
      "Neutron Star"
    ],
    "correctAnswer": "Black Hole"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn"
    ],
    "correctAnswer": "Mars"
  },
  {
    "question": "What galaxy is Earth located in?",
    "options": [
      "Andromeda",
      "Milky Way",
      "Triangulum",
      "Whirlpool"
    ],
    "correctAnswer": "Milky Way"
  },
  {
    "question": "What is the name of the first human to travel into space?",
    "options": [
      "Neil Armstrong",
      "Yuri Gagarin",
      "John Glenn",
      "Buzz Aldrin"
    ],
    "correctAnswer": "Yuri Gagarin"
  },
  {
    "question": "What is the term for a system of millions or billions of stars, together with gas and dust, held together by gravitational attraction?",
    "options": [
      "Galaxy",
      "Solar System",
      "Universe",
      "Nebula"
    ],
    "correctAnswer": "Galaxy"
  },
  {
    "question": "What is the name of the largest dwarf planet in the solar system?",
    "options": [
      "Pluto",
      "Eris",
      "Ceres",
      "Makemake"
    ],
    "correctAnswer": "Eris"
  },
  {
    "question": "What is the term for the boundary around a black hole beyond which no light or other radiation can escape?",
    "options": [
      "Event Horizon",
      "Singularity",
      "Photon Sphere",
      "Accretion Disk"
    ],
    "correctAnswer": "Event Horizon"
  },
  {
    "question": "What is the name of the second man to walk on the Moon?",
    "options": [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins",
      "Yuri Gagarin"
    ],
    "correctAnswer": "Buzz Aldrin"
  },
  {
    "question": "What is the name of the space probe that was the first to leave the Solar System?",
    "options": [
      "Voyager 1",
      "Voyager 2",
      "Pioneer 10",
      "New Horizons"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "What is the name of the phenomenon where the universe is expanding, causing galaxies to move away from each other?",
    "options": [
      "Big Bang",
      "Red Shift",
      "Cosmic Inflation",
      "Dark Energy"
    ],
    "correctAnswer": "Red Shift"
  },
  {
    "question": "What is the name of the largest asteroid in the asteroid belt?",
    "options": [
      "Vesta",
      "Pallas",
      "Hygiea",
      "Ceres"
    ],
    "correctAnswer": "Ceres"
  },
  {
    "question": "What is the name of the first woman in space?",
    "options": [
      "Sally Ride",
      "Valentina Tereshkova",
      "Mae Jemison",
      "Peggy Whitson"
    ],
    "correctAnswer": "Valentina Tereshkova"
  },
  {
    "question": "What is the name of the space telescope that will succeed the Hubble Space Telescope?",
    "options": [
      "James Webb Space Telescope",
      "Chandra X-ray Observatory",
      "Spitzer Space Telescope",
      "Kepler Space Telescope"
    ],
    "correctAnswer": "James Webb Space Telescope"
  },
  {
    "question": "What is the name of the process by which stars are born?",
    "options": [
      "Nuclear Fusion",
      "Stellar Nucleosynthesis",
      "Star Formation",
      "Accretion"
    ],
    "correctAnswer": "Star Formation"
  },
  {
    "question": "What is the name of the largest moon of Saturn?",
    "options": [
      "Titan",
      "Rhea",
      "Iapetus",
      "Enceladus"
    ],
    "correctAnswer": "Titan"
  },
  {
    "question": "What is the name of the theory that describes the early development of the Universe?",
    "options": [
      "Steady State Theory",
      "Big Bang Theory",
      "Pulsating Universe Theory",
      "Quantum Fluctuation Theory"
    ],
    "correctAnswer": "Big Bang Theory"
  },
  {
    "question": "What is the name of the force that keeps planets in orbit around the Sun?",
    "options": [
      "Electromagnetic Force",
      "Gravitational Force",
      "Centrifugal Force",
      "Nuclear Force"
    ],
    "correctAnswer": "Gravitational Force"
  },
  {
    "question": "Which exoplanet is known as the first Earth-size planet found in the habitable zone of its star?",
    "options": [
      "Kepler-22b",
      "Kepler-186f",
      "Proxima Centauri b",
      "TRAPPIST-1e"
    ],
    "correctAnswer": "Kepler-186f"
  },
  {
    "question": "What is the name of the mission that aims to study the Sun closer than any spacecraft before?",
    "options": [
      "Solar Probe Plus",
      "Parker Solar Probe",
      "SOHO",
      "STEREO"
    ],
    "correctAnswer": "Parker Solar Probe"
  },
  {
    "question": "Which telescope is designed to search for Earth-like exoplanets by monitoring their transits?",
    "options": [
      "Hubble Space Telescope",
      "James Webb Space Telescope",
      "TESS",
      "Kepler"
    ],
    "correctAnswer": "TESS"
  },
  {
    "question": "What is the name of the most massive neutron star discovered as of 2023?",
    "options": [
      "PSR J0348+0432",
      "PSR J0740+6620",
      "Cassiopeia A",
      "Vela Pulsar"
    ],
    "correctAnswer": "PSR J0740+6620"
  },
  {
    "question": "Which galaxy is on a collision course with the Milky Way?",
    "options": [
      "Andromeda Galaxy",
      "Triangulum Galaxy",
      "Whirlpool Galaxy",
      "Black Eye Galaxy"
    ],
    "correctAnswer": "Andromeda Galaxy"
  },
  {
    "question": "What is the name of the spacecraft that will explore Jupiter's icy moons Europa, Ganymede, and Callisto?",
    "options": [
      "Juno",
      "Galileo",
      "JUICE (JUpiter ICy moons Explorer)",
      "Cassini"
    ],
    "correctAnswer": "JUICE (JUpiter ICy moons Explorer)"
  },
  {
    "question": "Which exoplanet is known for raining molten glass sideways in its atmosphere?",
    "options": [
      "HD 189733b",
      "WASP-76b",
      "KELT-9b",
      "55 Cancri e"
    ],
    "correctAnswer": "HD 189733b"
  },
  {
    "question": "What phenomenon is believed to be the cause of the Universe's accelerated expansion?",
    "options": [
      "Dark Energy",
      "Dark Matter",
      "Black Holes",
      "Neutron Stars"
    ],
    "correctAnswer": "Dark Energy"
  },
  {
    "question": "Which planet is known as the \"Diamond Planet\" due to its composition?",
    "options": [
      "55 Cancri e",
      "WASP-12b",
      "Gliese 436 b",
      "HD 209458 b"
    ],
    "correctAnswer": "55 Cancri e"
  },
  {
    "question": "What is the term for the boundary around a black hole beyond which no light or other radiation can escape?",
    "options": [
      "Event Horizon",
      "Accretion Disk",
      "Singularity",
      "Photon Sphere"
    ],
    "correctAnswer": "Event Horizon"
  },
  {
    "question": "Which spacecraft was the first to land on a comet?",
    "options": [
      "Voyager 1",
      "Rosetta",
      "New Horizons",
      "Cassini"
    ],
    "correctAnswer": "Rosetta"
  },
  {
    "question": "What is the largest moon in the Solar System?",
    "options": [
      "Titan",
      "Ganymede",
      "Callisto",
      "Europa"
    ],
    "correctAnswer": "Ganymede"
  },
  {
    "question": "What is the name of the first known interstellar object to pass through our Solar System?",
    "options": [
      "Oumuamua",
      "Borisov",
      "Halley's Comet",
      "Shoemaker-Levy 9"
    ],
    "correctAnswer": "Oumuamua"
  },
  {
    "question": "Which planet has the most moons?",
    "options": [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    "correctAnswer": "Saturn"
  },
  {
    "question": "What is the name of the theory that describes the early development of the Universe?",
    "options": [
      "Big Bang Theory",
      "Steady State Theory",
      "Pulsating Universe Theory",
      "Quantum Fluctuation Model"
    ],
    "correctAnswer": "Big Bang Theory"
  },
  {
    "question": "Which of the following exoplanets is located in the habitable zone of its star?",
    "options": [
      "Kepler-452b",
      "Kepler-22b",
      "Proxima Centauri b",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "What is the primary method used to detect exoplanets?",
    "options": [
      "Transit Photometry",
      "Direct Imaging",
      "Astrometry",
      "Radial Velocity"
    ],
    "correctAnswer": "Transit Photometry"
  },
  {
    "question": "Which of these space telescopes is primarily designed to study dark energy and dark matter?",
    "options": [
      "Hubble Space Telescope",
      "Chandra X-ray Observatory",
      "Euclid",
      "Spitzer Space Telescope"
    ],
    "correctAnswer": "Euclid"
  },
  {
    "question": "What is the term for a supermassive black hole at the center of a galaxy?",
    "options": [
      "Quasar",
      "Pulsar",
      "Blazar",
      "Seyfert Galaxy"
    ],
    "correctAnswer": "Quasar"
  },
  {
    "question": "Which of these celestial events is caused by the Earth passing through the debris left by a comet?",
    "options": [
      "Solar Eclipse",
      "Lunar Eclipse",
      "Meteor Shower",
      "Aurora"
    ],
    "correctAnswer": "Meteor Shower"
  },
  {
    "question": "What is the name of the boundary around a black hole from which nothing, not even light, can escape?",
    "options": [
      "Event Horizon",
      "Photon Sphere",
      "Ergosphere",
      "Accretion Disk"
    ],
    "correctAnswer": "Event Horizon"
  },
  {
    "question": "Which mission is credited with taking the first close-up pictures of Pluto?",
    "options": [
      "Voyager 1",
      "Voyager 2",
      "New Horizons",
      "Pioneer 10"
    ],
    "correctAnswer": "New Horizons"
  },
  {
    "question": "What is the name of the largest volcano in the Solar System, located on Mars?",
    "options": [
      "Olympus Mons",
      "Mount Everest",
      "Mauna Loa",
      "Krakatoa"
    ],
    "correctAnswer": "Olympus Mons"
  },
  {
    "question": "Which of the following is a dwarf planet?",
    "options": [
      "Europa",
      "Pluto",
      "Mars",
      "Neptune"
    ],
    "correctAnswer": "Pluto"
  },
  {
    "question": "What phenomenon explains the acceleration of the universe's expansion?",
    "options": [
      "Dark Energy",
      "Dark Matter",
      "Black Holes",
      "The Big Bang"
    ],
    "correctAnswer": "Dark Energy"
  },
  {
    "question": "What is the name of Saturn's largest moon, which has a thick atmosphere?",
    "options": [
      "Europa",
      "Titan",
      "Ganymede",
      "Callisto"
    ],
    "correctAnswer": "Titan"
  },
  {
    "question": "Which of these objects is considered a \"failed star\"?",
    "options": [
      "Neutron Star",
      "White Dwarf",
      "Brown Dwarf",
      "Red Giant"
    ],
    "correctAnswer": "Brown Dwarf"
  },
  {
    "question": "What is the term for the spinning neutron star that emits beams of radiation?",
    "options": [
      "Quasar",
      "Pulsar",
      "Black Hole",
      "White Dwarf"
    ],
    "correctAnswer": "Pulsar"
  },
  {
    "question": "Which of the following is not a method used to detect exoplanets?",
    "options": [
      "Transit Photometry",
      "Direct Imaging",
      "Lunar Occultation",
      "Radial Velocity"
    ],
    "correctAnswer": "Lunar Occultation"
  },
  {
    "question": "What is the name of the telescope that succeeded the Hubble Space Telescope?",
    "options": [
      "James Webb Space Telescope",
      "Chandra X-ray Observatory",
      "Spitzer Space Telescope",
      "Kepler Space Telescope"
    ],
    "correctAnswer": "James Webb Space Telescope"
  },
  {
    "question": "What is the term used to describe a planet that orbits a star outside our solar system?",
    "options": [
      "Exoplanet",
      "Rogue Planet",
      "Dwarf Planet",
      "Gas Giant"
    ],
    "correctAnswer": "Exoplanet"
  },
  {
    "question": "What is the name of the telescope that has discovered thousands of exoplanets?",
    "options": [
      "Hubble Space Telescope",
      "James Webb Space Telescope",
      "Kepler Space Telescope",
      "Spitzer Space Telescope"
    ],
    "correctAnswer": "Kepler Space Telescope"
  },
  {
    "question": "Which galaxy is closest to the Milky Way?",
    "options": [
      "Andromeda Galaxy",
      "Triangulum Galaxy",
      "Magellanic Clouds",
      "Whirlpool Galaxy"
    ],
    "correctAnswer": "Andromeda Galaxy"
  },
  {
    "question": "What is the name of the most massive star known?",
    "options": [
      "Betelgeuse",
      "Rigel",
      "UY Scuti",
      "VY Canis Majoris"
    ],
    "correctAnswer": "UY Scuti"
  },
  {
    "question": "What phenomenon is theorized to occur when a massive star collapses under its own gravity at the end of its life cycle?",
    "options": [
      "Supernova",
      "Black Hole Formation",
      "Neutron Star Formation",
      "Pulsar Formation"
    ],
    "correctAnswer": "Black Hole Formation"
  },
  {
    "question": "Which planet in our solar system has the most complex system of rings?",
    "options": [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    "correctAnswer": "Saturn"
  },
  {
    "question": "What is the name of the largest asteroid in the asteroid belt?",
    "options": [
      "Ceres",
      "Vesta",
      "Pallas",
      "Hygiea"
    ],
    "correctAnswer": "Ceres"
  },
  {
    "question": "Which space mission was the first to land a rover on Mars?",
    "options": [
      "Viking 1",
      "Pathfinder",
      "Curiosity",
      "Perseverance"
    ],
    "correctAnswer": "Pathfinder"
  },
  {
    "question": "What is the name of the boundary around a black hole beyond which no light or other radiation can escape?",
    "options": [
      "Event Horizon",
      "Accretion Disk",
      "Singularity",
      "Photon Sphere"
    ],
    "correctAnswer": "Event Horizon"
  },
  {
    "question": "Which of the following is a famous comet that is visible from Earth every 75-76 years?",
    "options": [
      "Halley's Comet",
      "Comet Hale-Bopp",
      "Comet Hyakutake",
      "Comet Encke"
    ],
    "correctAnswer": "Halley's Comet"
  },
  {
    "question": "What is the name of the first human-made object to leave the solar system?",
    "options": [
      "Voyager 1",
      "Voyager 2",
      "Pioneer 10",
      "New Horizons"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "Which of the following exoplanets is located in the habitable zone of its star and is similar in size to Earth?",
    "options": [
      "Kepler-452b",
      "Proxima Centauri b",
      "TRAPPIST-1e",
      "LHS 1140 b"
    ],
    "correctAnswer": "Kepler-452b"
  },
  {
    "question": "What is the term for the point in the sky directly above an observer on Earth?",
    "options": [
      "Zenith",
      "Nadir",
      "Horizon",
      "Meridian"
    ],
    "correctAnswer": "Zenith"
  },
  {
    "question": "Which of the following is not a type of galaxy?",
    "options": [
      "Spiral",
      "Elliptical",
      "Irregular",
      "Hexagonal"
    ],
    "correctAnswer": "Hexagonal"
  },
  {
    "question": "What is the name of the spacecraft that provided the first close-up images of Pluto?",
    "options": [
      "New Horizons",
      "Voyager 1",
      "Cassini",
      "Galileo"
    ],
    "correctAnswer": "New Horizons"
  },
  {
    "question": "What is the name of the phenomenon where two galaxies come close and begin to merge into one?",
    "options": [
      "Galactic Collision",
      "Starburst",
      "Black Hole Merger",
      "Supernova"
    ],
    "correctAnswer": "Galactic Collision"
  },
  {
    "question": "Which of the following objects is the remnant core of a massive star that has undergone a supernova explosion?",
    "options": [
      "Black Hole",
      "Neutron Star",
      "White Dwarf",
      "Pulsar"
    ],
    "correctAnswer": "Neutron Star"
  },
  {
    "question": "Which of the following is a method used to detect exoplanets?",
    "options": [
      "Transit Method",
      "Radar Imaging",
      "Spectroscopy",
      "Pulsar Timing"
    ],
    "correctAnswer": "Transit Method"
  },
  {
    "question": "What is the name of the region of space beyond Neptune that is populated with many small icy bodies?",
    "options": [
      "Kuiper Belt",
      "Oort Cloud",
      "Asteroid Belt",
      "Scattered Disc"
    ],
    "correctAnswer": "Kuiper Belt"
  },
  {
    "question": "Which dwarf planet is located in the asteroid belt?",
    "options": [
      "Pluto",
      "Eris",
      "Ceres",
      "Makemake"
    ],
    "correctAnswer": "Ceres"
  },
  {
    "question": "What is the name of the first probe to land on a comet?",
    "options": [
      "Rosetta",
      "Philae",
      "Voyager 1",
      "Cassini"
    ],
    "correctAnswer": "Philae"
  },
  {
    "question": "Which of the following is a characteristic feature of a pulsar?",
    "options": [
      "Rapid Rotation",
      "High Temperature",
      "Strong Magnetic Field",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "What is the name of the theory that describes the early development of the Universe?",
    "options": [
      "Big Bang Theory",
      "Steady State Theory",
      "Pulsating Universe Theory",
      "Quantum Fluctuation Theory"
    ],
    "correctAnswer": "Big Bang Theory"
  },
  {
    "question": "Which planet is known for having the highest mountain and the deepest, longest canyon in the solar system?",
    "options": [
      "Mars",
      "Earth",
      "Venus",
      "Jupiter"
    ],
    "correctAnswer": "Mars"
  },
  {
    "question": "What is the name of the process by which stars are formed?",
    "options": [
      "Nuclear Fusion",
      "Stellar Nucleosynthesis",
      "Accretion",
      "Star Formation"
    ],
    "correctAnswer": "Star Formation"
  },
  {
    "question": "Which of the following is the largest type of star in the universe?",
    "options": [
      "Red Dwarf",
      "Neutron Star",
      "Supergiant",
      "White Dwarf"
    ],
    "correctAnswer": "Supergiant"
  },
  {
    "question": "What is the name of the dark, dense region found in the center of almost every large galaxy?",
    "options": [
      "Black Hole",
      "Neutron Star",
      "Dark Matter",
      "Singularity"
    ],
    "correctAnswer": "Black Hole"
  },
  {
    "question": "Which of the following is not a phase of the moon?",
    "options": [
      "Waxing Crescent",
      "Blue Moon",
      "Waning Gibbous",
      "First Quarter"
    ],
    "correctAnswer": "Blue Moon"
  },
  {
    "question": "What is the name of the spacecraft that was the first to perform a flyby of Mercury?",
    "options": [
      "Mariner 10",
      "Messenger",
      "Voyager 2",
      "Pioneer 10"
    ],
    "correctAnswer": "Mariner 10"
  },
  {
    "question": "What is the name of the largest galaxy in the Local Group?",
    "options": [
      "Milky Way",
      "Andromeda Galaxy",
      "Triangulum Galaxy",
      "Magellanic Clouds"
    ],
    "correctAnswer": "Andromeda Galaxy"
  },
  {
    "question": "What phenomenon is thought to be the driving force behind the expansion of the universe?",
    "options": [
      "Dark Energy",
      "Dark Matter",
      "Black Holes",
      "Supernovae"
    ],
    "correctAnswer": "Dark Energy"
  },
  {
    "question": "What is the name of the first known interstellar object to pass through our solar system?",
    "options": [
      "Oumuamua",
      "Borisov",
      "Halley's Comet",
      "Eris"
    ],
    "correctAnswer": "Oumuamua"
  },
  {
    "question": "What is the term for a small, icy body that, when passing close to the sun, warms and begins to release gases?",
    "options": [
      "Asteroid",
      "Meteor",
      "Comet",
      "Moon"
    ],
    "correctAnswer": "Comet"
  },
  {
    "question": "What is the name of the most distant object ever visited by a spacecraft?",
    "options": [
      "Pluto",
      "Eris",
      "Ultima Thule (Arrokoth)",
      "Sedna"
    ],
    "correctAnswer": "Ultima Thule (Arrokoth)"
  },
  {
    "question": "What is the term used to describe the point in the sky directly above an observer on Earth?",
    "options": [
      "Zenith",
      "Nadir",
      "Horizon",
      "Apex"
    ],
    "correctAnswer": "Zenith"
  },
  {
    "question": "What is the term for a star that suddenly increases greatly in brightness because of a catastrophic explosion that ejects most of its mass?",
    "options": [
      "Supernova",
      "Neutron Star",
      "Black Hole",
      "White Dwarf"
    ],
    "correctAnswer": "Supernova"
  },
  {
    "question": "What is the name of the spacecraft that has left the solar system, entering interstellar space?",
    "options": [
      "Voyager 1",
      "Voyager 2",
      "Pioneer 10",
      "New Horizons"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "What is the name of the theory that describes the early development of the universe?",
    "options": [
      "Big Bang Theory",
      "Steady State Theory",
      "Pulsating Universe Theory",
      "Quantum Fluctuation Model"
    ],
    "correctAnswer": "Big Bang Theory"
  },
  {
    "question": "What is the name of the boundary around a black hole from which nothing can escape, not even light?",
    "options": [
      "Event Horizon",
      "Singularity",
      "Photon Sphere",
      "Accretion Disk"
    ],
    "correctAnswer": "Event Horizon"
  },
  {
    "question": "What is the term for the remnants of a star that has collapsed under its own gravity, resulting in a very small, dense object?",
    "options": [
      "Neutron Star",
      "Black Hole",
      "White Dwarf",
      "Supernova"
    ],
    "correctAnswer": "Neutron Star"
  },
  {
    "question": "What is the name of the first human-made object to land on the moon?",
    "options": [
      "Luna 2",
      "Apollo 11",
      "Sputnik 1",
      "Voyager 1"
    ],
    "correctAnswer": "Luna 2"
  },
  {
    "question": "What is the term used to describe the alignment of three celestial bodies in a straight line, commonly the Earth, Moon, and Sun?",
    "options": [
      "Syzygy",
      "Eclipse",
      "Equinox",
      "Solstice"
    ],
    "correctAnswer": "Syzygy"
  },
  {
    "question": "What is the name of the region of space beyond the orbit of Neptune, populated by icy bodies and dwarf planets?",
    "options": [
      "Kuiper Belt",
      "Oort Cloud",
      "Asteroid Belt",
      "Scattered Disc"
    ],
    "correctAnswer": "Kuiper Belt"
  },
  {
    "question": "What is the name of the dwarf planet known for its heart-shaped glacier?",
    "options": [
      "Pluto",
      "Eris",
      "Ceres",
      "Makemake"
    ],
    "correctAnswer": "Pluto"
  },
  {
    "question": "What is the term for a rocky body that orbits the Sun, found mainly between Mars and Jupiter?",
    "options": [
      "Comet",
      "Asteroid",
      "Meteoroid",
      "Exoplanet"
    ],
    "correctAnswer": "Asteroid"
  },
  {
    "question": "What is the name of the phenomenon where a planet passes in front of its star, as seen from Earth, leading to a slight dimming of the star’s light?",
    "options": [
      "Eclipse",
      "Transit",
      "Opposition",
      "Conjunction"
    ],
    "correctAnswer": "Transit"
  },
  {
    "question": "What is the name of the largest volcano in the solar system, located on Mars?",
    "options": [
      "Olympus Mons",
      "Mauna Loa",
      "Mount Everest",
      "Krakatoa"
    ],
    "correctAnswer": "Olympus Mons"
  },
  {
    "question": "What is the term for the cloud of gas and dust that surrounds the nucleus of a comet?",
    "options": [
      "Asteroid Belt",
      "Kuiper Belt",
      "Coma",
      "Nebula"
    ],
    "correctAnswer": "Coma"
  },
  {
    "question": "What is the name of the mission that aims to capture the first photograph of a black hole’s event horizon?",
    "options": [
      "Voyager",
      "Hubble Space Telescope",
      "Event Horizon Telescope",
      "James Webb Space Telescope"
    ],
    "correctAnswer": "Event Horizon Telescope"
  },
  {
    "question": "What is the term for the smallest unit of a chemical element, consisting of a nucleus of protons and neutrons, with electrons orbiting this nucleus?",
    "options": [
      "Atom",
      "Molecule",
      "Particle",
      "Quark"
    ],
    "correctAnswer": "Atom"
  },
  {
    "question": "What is the name of the process by which heavier chemical elements are synthesized from lighter ones in the cores of stars?",
    "options": [
      "Fusion",
      "Fission",
      "Nucleosynthesis",
      "Photodisintegration"
    ],
    "correctAnswer": "Nucleosynthesis"
  },
  {
    "question": "What is the term for the time it takes for half of a radioactive substance to decay into a stable substance?",
    "options": [
      "Half-Life",
      "Decay Period",
      "Radiation Time",
      "Half-Time"
    ],
    "correctAnswer": "Half-Life"
  },
  {
    "question": "What is the name of the point in the orbit of a planet, asteroid, or comet at which it is closest to the sun?",
    "options": [
      "Aphelion",
      "Perihelion",
      "Apogee",
      "Perigee"
    ],
    "correctAnswer": "Perihelion"
  },
  {
    "question": "What is the term for a collection of stars, dust, and gas bound together by gravity?",
    "options": [
      "Galaxy",
      "Solar System",
      "Universe",
      "Nebula"
    ],
    "correctAnswer": "Galaxy"
  },
  {
    "question": "What is the name of the first artificial Earth satellite?",
    "options": [
      "Sputnik 1",
      "Explorer 1",
      "Vostok 1",
      "Apollo 11"
    ],
    "correctAnswer": "Sputnik 1"
  },
  {
    "question": "What is the term for the study of the universe and its contents outside of Earth’s atmosphere?",
    "options": [
      "Astrology",
      "Astronomy",
      "Cosmology",
      "Geology"
    ],
    "correctAnswer": "Astronomy"
  },
  {
    "question": "Which planet is known as the \"Evening Star\" when visible in the sky?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter",
      "Saturn"
    ],
    "correctAnswer": "Venus"
  },
  {
    "question": "What is the largest moon in the Solar System?",
    "options": [
      "Ganymede",
      "Titan",
      "Callisto",
      "Europa"
    ],
    "correctAnswer": "Ganymede"
  },
  {
    "question": "What is the main component of the Sun?",
    "options": [
      "Liquid Lava",
      "Solid Iron",
      "Plasma",
      "Gas"
    ],
    "correctAnswer": "Plasma"
  },
  {
    "question": "Which spacecraft made the first successful flyby of Mars?",
    "options": [
      "Mariner 4",
      "Viking 1",
      "Mars Pathfinder",
      "Spirit"
    ],
    "correctAnswer": "Mariner 4"
  },
  {
    "question": "What is the term for a small body made of rock and metal that orbits the Sun?",
    "options": [
      "Comet",
      "Asteroid",
      "Meteor",
      "Satellite"
    ],
    "correctAnswer": "Asteroid"
  },
  {
    "question": "What phenomenon causes a meteor shower?",
    "options": [
      "A comet passing by Earth",
      "The Earth passing through comet debris",
      "A solar flare",
      "A lunar eclipse"
    ],
    "correctAnswer": "The Earth passing through comet debris"
  },
  {
    "question": "What is the name of the largest volcano in the Solar System?",
    "options": [
      "Mount Everest",
      "Olympus Mons",
      "Mauna Loa",
      "Krakatoa"
    ],
    "correctAnswer": "Olympus Mons"
  },
  {
    "question": "Which of the following is not a dwarf planet?",
    "options": [
      "Pluto",
      "Eris",
      "Europa",
      "Haumea"
    ],
    "correctAnswer": "Europa"
  },
  {
    "question": "What is the name of Saturn's largest moon?",
    "options": [
      "Titan",
      "Ganymede",
      "Europa",
      "Callisto"
    ],
    "correctAnswer": "Titan"
  },
  {
    "question": "What is the term for the alignment of three celestial bodies?",
    "options": [
      "Eclipse",
      "Equinox",
      "Solstice",
      "Syzygy"
    ],
    "correctAnswer": "Syzygy"
  },
  {
    "question": "What is the name of the boundary where the solar wind is stopped by the interstellar medium?",
    "options": [
      "Kuiper Belt",
      "Oort Cloud",
      "Heliopause",
      "Astrophere"
    ],
    "correctAnswer": "Heliopause"
  },
  {
    "question": "Which of the following planets does not have rings?",
    "options": [
      "Jupiter",
      "Mars",
      "Saturn",
      "Uranus"
    ],
    "correctAnswer": "Mars"
  },
  {
    "question": "What is the name of the first human to walk on the Moon?",
    "options": [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins"
    ],
    "correctAnswer": "Neil Armstrong"
  },
  {
    "question": "What is the term used to describe the point in orbit farthest from the Earth?",
    "options": [
      "Perigee",
      "Apogee",
      "Aphelion",
      "Perihelion"
    ],
    "correctAnswer": "Apogee"
  },
  {
    "question": "Which of the following is a famous radio telescope located in Puerto Rico?",
    "options": [
      "Very Large Array",
      "Green Bank Telescope",
      "Arecibo Observatory",
      "FAST"
    ],
    "correctAnswer": "Arecibo Observatory"
  },
  {
    "question": "What is the name of the theory that proposes the Universe is expanding?",
    "options": [
      "Big Bang Theory",
      "Steady State Theory",
      "Pulsating Universe Theory",
      "Expanding Universe Theory"
    ],
    "correctAnswer": "Expanding Universe Theory"
  },
  {
    "question": "Which of the following objects is the densest?",
    "options": [
      "Neutron Star",
      "White Dwarf",
      "Black Hole",
      "Supernova"
    ],
    "correctAnswer": "Neutron Star"
  },
  {
    "question": "What is the name of the spacecraft that first landed humans on the Moon?",
    "options": [
      "Apollo 11",
      "Sputnik 1",
      "Vostok 1",
      "Challenger"
    ],
    "correctAnswer": "Apollo 11"
  },
  {
    "question": "What is the name of the galaxy that contains our Solar System?",
    "options": [
      "Andromeda Galaxy",
      "Whirlpool Galaxy",
      "Milky Way Galaxy",
      "Triangulum Galaxy"
    ],
    "correctAnswer": "Milky Way Galaxy"
  },
  {
    "question": "What is the term for a star that suddenly increases greatly in brightness because of a catastrophic explosion that ejects most of its mass?",
    "options": [
      "Neutron Star",
      "Black Hole",
      "Supernova",
      "White Dwarf"
    ],
    "correctAnswer": "Supernova"
  },
  {
    "question": "What is the name of the first probe to visit Saturn?",
    "options": [
      "Voyager 1",
      "Pioneer 11",
      "Cassini",
      "Galileo"
    ],
    "correctAnswer": "Pioneer 11"
  },
  {
    "question": "What is the name of the dark, flat regions on the Moon's surface?",
    "options": [
      "Craters",
      "Mare",
      "Highlands",
      "Rilles"
    ],
    "correctAnswer": "Mare"
  },
  {
    "question": "What is the name of the process by which heavier chemical elements are created within stars from hydrogen nuclei?",
    "options": [
      "Fusion",
      "Fission",
      "Nucleosynthesis",
      "Photodisintegration"
    ],
    "correctAnswer": "Nucleosynthesis"
  },
  {
    "question": "What is the name of the first space telescope?",
    "options": [
      "Hubble Space Telescope",
      "James Webb Space Telescope",
      "Chandra X-ray Observatory",
      "Spitzer Space Telescope"
    ],
    "correctAnswer": "Hubble Space Telescope"
  },
  {
    "question": "What is the name of the boundary around a black hole from which nothing, not even light, can escape?",
    "options": [
      "Event Horizon",
      "Photon Sphere",
      "Accretion Disk",
      "Singularity"
    ],
    "correctAnswer": "Event Horizon"
  },
  {
    "question": "What is the term for the study of the origin and evolution of the universe?",
    "options": [
      "Astrophysics",
      "Cosmology",
      "Astronomy",
      "Astrobiology"
    ],
    "correctAnswer": "Cosmology"
  },
  {
    "question": "What is the name of the first artificial satellite to orbit another planet, specifically Mars?",
    "options": [
      "Mariner 9",
      "Viking 1",
      "Mars Reconnaissance Orbiter",
      "Mars Express"
    ],
    "correctAnswer": "Mariner 9"
  },
  {
    "question": "What is the term for a comet's bright head?",
    "options": [
      "Nucleus",
      "Coma",
      "Tail",
      "Halley"
    ],
    "correctAnswer": "Coma"
  },
  {
    "question": "What is the name of the effect caused by the Earth's atmosphere scattering sunlight, making the sky appear blue?",
    "options": [
      "Rayleigh Scattering",
      "Doppler Effect",
      "Greenhouse Effect",
      "Coriolis Effect"
    ],
    "correctAnswer": "Rayleigh Scattering"
  },
  {
    "question": "What is the name of the first interstellar object detected passing through our Solar System?",
    "options": [
      "Oumuamua",
      "Borisov",
      "Halley's Comet",
      "Eris"
    ],
    "correctAnswer": "Oumuamua"
  },
  {
    "question": "What is the name of the spacecraft that provided the first close-up images of Jupiter?",
    "options": [
      "Galileo",
      "Juno",
      "Pioneer 10",
      "Voyager 1"
    ],
    "correctAnswer": "Pioneer 10"
  },
  {
    "question": "What is the name of the largest impact crater on Earth?",
    "options": [
      "Barringer Crater",
      "Chicxulub Crater",
      "Vredefort Crater",
      "Sudbury Basin"
    ],
    "correctAnswer": "Vredefort Crater"
  },
  {
    "question": "What is the name of the phenomenon where the moon appears larger and brighter because it is closer to the Earth?",
    "options": [
      "Blue Moon",
      "Supermoon",
      "Harvest Moon",
      "Blood Moon"
    ],
    "correctAnswer": "Supermoon"
  },
  {
    "question": "What is the name of the first country to launch a human into space?",
    "options": [
      "United States",
      "Soviet Union",
      "China",
      "France"
    ],
    "correctAnswer": "Soviet Union"
  },
  {
    "question": "What is the name of the space probe that has traveled farthest from Earth?",
    "options": [
      "Voyager 1",
      "Voyager 2",
      "Pioneer 10",
      "New Horizons"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "What is the name of the first successful mission to land on Mars?",
    "options": [
      "Viking 1",
      "Mariner 4",
      "Pathfinder",
      "Curiosity"
    ],
    "correctAnswer": "Viking 1"
  },
  {
    "question": "What is the name of the telescope that is considered the successor to the Hubble Space Telescope?",
    "options": [
      "James Webb Space Telescope",
      "Chandra X-ray Observatory",
      "Spitzer Space Telescope",
      "Kepler Space Telescope"
    ],
    "correctAnswer": "James Webb Space Telescope"
  },
  {
    "question": "What is the name of the phenomenon where a planet passes in front of its star, as seen from Earth, which can be used to discover exoplanets?",
    "options": [
      "Solar Flare",
      "Transit",
      "Eclipse",
      "Occultation"
    ],
    "correctAnswer": "Transit"
  },
  {
    "question": "What is the name of the first animal to orbit the Earth?",
    "options": [
      "Albert the monkey",
      "Félicette the cat",
      "Laika the dog",
      "Ham the chimpanzee"
    ],
    "correctAnswer": "Laika the dog"
  },
  {
    "question": "What is the name of the region of space that is thought to be the source of long-period comets?",
    "options": [
      "Kuiper Belt",
      "Oort Cloud",
      "Asteroid Belt",
      "Scattered Disk"
    ],
    "correctAnswer": "Oort Cloud"
  },
  {
    "question": "What is the name of the first human-made object to land on a celestial body other than Earth?",
    "options": [
      "Luna 2",
      "Apollo 11",
      "Sputnik 1",
      "Viking 1"
    ],
    "correctAnswer": "Luna 2"
  },
  {
    "question": "What is the name of the process by which a star maintains its energy output by converting hydrogen into helium?",
    "options": [
      "Nuclear Fusion",
      "Nuclear Fission",
      "Chemical Reaction",
      "Gravitational Contraction"
    ],
    "correctAnswer": "Nuclear Fusion"
  },
  {
    "question": "What is the name of the spacecraft that was the first to perform a soft landing on the Moon?",
    "options": [
      "Luna 9",
      "Apollo 11",
      "Surveyor 1",
      "Lunar Orbiter 1"
    ],
    "correctAnswer": "Luna 9"
  },
  {
    "question": "What is the name of the first artificial satellite launched by the United States?",
    "options": [
      "Explorer 1",
      "Sputnik 1",
      "Vanguard 1",
      "Telstar"
    ],
    "correctAnswer": "Explorer 1"
  },
  {
    "question": "What is the name of the phenomenon that describes the universe's rate of expansion accelerating?",
    "options": [
      "Big Bang",
      "Cosmic Inflation",
      "Dark Energy",
      "Hubble's Law"
    ],
    "correctAnswer": "Dark Energy"
  },
  {
    "question": "What is the name of the largest known star in the universe?",
    "options": [
      "Betelgeuse",
      "VY Canis Majoris",
      "Upsilon Andromedae",
      "Sirius"
    ],
    "correctAnswer": "VY Canis Majoris"
  },
  {
    "question": "What phenomenon is theorized to occur when a massive star collapses under its own gravity at the end of its life cycle?",
    "options": [
      "Supernova",
      "Black Hole Formation",
      "Neutron Star Formation",
      "White Dwarf Formation"
    ],
    "correctAnswer": "Black Hole Formation"
  },
  {
    "question": "What is the name of the first confirmed Earth-sized exoplanet found to orbit within the habitable zone of its star?",
    "options": [
      "Kepler-186f",
      "Kepler-452b",
      "Proxima Centauri b",
      "TRAPPIST-1e"
    ],
    "correctAnswer": "Kepler-186f"
  },
  {
    "question": "Which space mission was the first to land a man-made object on a comet?",
    "options": [
      "Rosetta",
      "Voyager 1",
      "New Horizons",
      "Cassini"
    ],
    "correctAnswer": "Rosetta"
  },
  {
    "question": "What is the name of the most massive black hole known in the universe?",
    "options": [
      "Sagittarius A*",
      "M87*",
      "TON 618",
      "Cygnus X-1"
    ],
    "correctAnswer": "TON 618"
  },
  {
    "question": "Which planet is known for having the most complex ring system in our solar system?",
    "options": [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    "correctAnswer": "Saturn"
  },
  {
    "question": "What is the term used to describe the shape of the Milky Way?",
    "options": [
      "Elliptical",
      "Irregular",
      "Spiral",
      "Lenticular"
    ],
    "correctAnswer": "Spiral"
  },
  {
    "question": "Which celestial event is caused by the Earth passing through the debris left by a comet?",
    "options": [
      "Solar Eclipse",
      "Lunar Eclipse",
      "Meteor Shower",
      "Aurora"
    ],
    "correctAnswer": "Meteor Shower"
  },
  {
    "question": "Which dwarf planet is known for having a heart-shaped glacier?",
    "options": [
      "Pluto",
      "Eris",
      "Ceres",
      "Makemake"
    ],
    "correctAnswer": "Pluto"
  },
  {
    "question": "What is the name of the phenomenon where a planet passes in front of its star, as seen from Earth, leading to a temporary dimming of the star’s light?",
    "options": [
      "Solar Eclipse",
      "Lunar Eclipse",
      "Transit",
      "Occultation"
    ],
    "correctAnswer": "Transit"
  },
  {
    "question": "Which of the following is a method used to detect exoplanets?",
    "options": [
      "Pulsar Timing",
      "Transit Photometry",
      "Astrobiology",
      "Celestial Navigation"
    ],
    "correctAnswer": "Transit Photometry"
  },
  {
    "question": "What is the name of the region around a star where conditions might be right for life?",
    "options": [
      "Goldilocks Zone",
      "Habitable Zone",
      "Frost Line",
      "Roche Limit"
    ],
    "correctAnswer": "Habitable Zone"
  },
  {
    "question": "Which of the following is a famous nebula visible from Earth?",
    "options": [
      "Orion Nebula",
      "Crab Nebula",
      "Horsehead Nebula",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "What is the name of the first interstellar object observed passing through our solar system?",
    "options": [
      "Oumuamua",
      "Borisov",
      "Halley’s Comet",
      "Eris"
    ],
    "correctAnswer": "Oumuamua"
  },
  {
    "question": "Which planet in our solar system has the most intense surface pressure?",
    "options": [
      "Venus",
      "Jupiter",
      "Saturn",
      "Neptune"
    ],
    "correctAnswer": "Venus"
  },
  {
    "question": "What is the name of the largest volcano in the solar system?",
    "options": [
      "Olympus Mons",
      "Mauna Loa",
      "Mount Everest",
      "Krakatoa"
    ],
    "correctAnswer": "Olympus Mons"
  },
  {
    "question": "Which of the following is not a type of galaxy?",
    "options": [
      "Spiral",
      "Elliptical",
      "Irregular",
      "Pentagonal"
    ],
    "correctAnswer": "Pentagonal"
  },
  {
    "question": "What is the name of the mission that aims to capture the first image of a black hole’s event horizon?",
    "options": [
      "Event Horizon Telescope",
      "Hubble Space Telescope",
      "James Webb Space Telescope",
      "Chandra X-ray Observatory"
    ],
    "correctAnswer": "Event Horizon Telescope"
  },
  {
    "question": "What is the term for the explosive death of a star?",
    "options": [
      "Nova",
      "Supernova",
      "Hypernova",
      "White Dwarf"
    ],
    "correctAnswer": "Supernova"
  },
  {
    "question": "Which of the following elements is primarily produced in the cores of massive stars?",
    "options": [
      "Hydrogen",
      "Helium",
      "Carbon",
      "Iron"
    ],
    "correctAnswer": "Iron"
  },
  {
    "question": "What is the name of the telescope that is considered the successor to the Hubble Space Telescope?",
    "options": [
      "Spitzer Space Telescope",
      "James Webb Space Telescope",
      "Kepler Space Telescope",
      "Chandra X-ray Observatory"
    ],
    "correctAnswer": "James Webb Space Telescope"
  },
  {
    "question": "Which celestial body is known as the \"Red Planet\"?",
    "options": [
      "Mars",
      "Venus",
      "Mercury",
      "Jupiter"
    ],
    "correctAnswer": "Mars"
  },
  {
    "question": "What is the name of Saturn’s largest moon, which has a thick atmosphere?",
    "options": [
      "Titan",
      "Europa",
      "Ganymede",
      "Callisto"
    ],
    "correctAnswer": "Titan"
  },
  {
    "question": "What phenomenon allows black holes to be detected by astronomers?",
    "options": [
      "Their emission of visible light",
      "The bending of light around them",
      "Their strong gravitational pull on nearby stars",
      "The radio waves they emit"
    ],
    "correctAnswer": "The bending of light around them"
  },
  {
    "question": "What is the name of the boundary beyond which a star’s gravitational pull is so strong that light cannot escape?",
    "options": [
      "Photon Sphere",
      "Event Horizon",
      "Accretion Disk",
      "Singularity"
    ],
    "correctAnswer": "Event Horizon"
  },
  {
    "question": "Which of the following is a potential sign of life on an exoplanet?",
    "options": [
      "Methane in its atmosphere",
      "Presence of water",
      "Oxygen in its atmosphere",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "What is the name of the first man-made object to leave the solar system?",
    "options": [
      "Voyager 1",
      "Pioneer 10",
      "New Horizons",
      "Voyager 2"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "What is the term for the study of the universe and its contents outside of Earth’s atmosphere?",
    "options": [
      "Astrobiology",
      "Astrophysics",
      "Astronomy",
      "Cosmology"
    ],
    "correctAnswer": "Astronomy"
  },
  {
    "question": "Which of the following is not a method used to detect exoplanets?",
    "options": [
      "Radial Velocity",
      "Transit Method",
      "Direct Imaging",
      "Spectral Analysis"
    ],
    "correctAnswer": "Spectral Analysis"
  },
  {
    "question": "What is the name of the hypothetical cloud of comets surrounding the outer Solar System?",
    "options": [
      "Kuiper Belt",
      "Asteroid Belt",
      "Oort Cloud",
      "Scattered Disc"
    ],
    "correctAnswer": "Oort Cloud"
  },
  {
    "question": "Which space mission first detected the cosmic microwave background radiation?",
    "options": [
      "COBE",
      "WMAP",
      "Planck",
      "ARNO"
    ],
    "correctAnswer": "ARNO"
  },
  {
    "question": "What is the process by which massive stars explode at the end of their lives?",
    "options": [
      "Nova",
      "Supernova",
      "Hypernova",
      "Kilonova"
    ],
    "correctAnswer": "Supernova"
  },
  {
    "question": "Which of these is not a type of galaxy?",
    "options": [
      "Elliptical",
      "Spiral",
      "Irregular",
      "Cubical"
    ],
    "correctAnswer": "Cubical"
  },
  {
    "question": "What is the name of the nearest known stellar-mass black hole to Earth?",
    "options": [
      "Cygnus X-1",
      "V616 Monocerotis",
      "HR 6819",
      "Gaia BH1"
    ],
    "correctAnswer": "Gaia BH1"
  },
  {
    "question": "Which space telescope is designed to detect gravitational waves?",
    "options": [
      "James Webb",
      "Hubble",
      "LISA",
      "Chandra"
    ],
    "correctAnswer": "LISA"
  },
  {
    "question": "What is the process of nuclear fusion that powers stars like our Sun?",
    "options": [
      "CNO cycle",
      "Triple-alpha process",
      "Proton-proton chain",
      "s-process"
    ],
    "correctAnswer": "Proton-proton chain"
  },
  {
    "question": "Which mission first landed a probe on a comet?",
    "options": [
      "Deep Impact",
      "Rosetta",
      "Stardust",
      "Hayabusa"
    ],
    "correctAnswer": "Rosetta"
  },
  {
    "question": "What is the name of the hypothetical ninth planet in our Solar System?",
    "options": [
      "Nibiru",
      "Tyche",
      "Planet X",
      "Planet Nine"
    ],
    "correctAnswer": "Planet Nine"
  },
  {
    "question": "Which of these is not a type of cosmic ray?",
    "options": [
      "Protons",
      "Electrons",
      "Neutrinos",
      "Photons"
    ],
    "correctAnswer": "Photons"
  },
  {
    "question": "What is the name of the region around a black hole from which light can still escape?",
    "options": [
      "Event horizon",
      "Photon sphere",
      "Ergosphere",
      "Schwarzschild radius"
    ],
    "correctAnswer": "Ergosphere"
  },
  {
    "question": "Which space mission first detected evidence of water on Mars?",
    "options": [
      "Viking 1",
      "Mars Pathfinder",
      "Mars Global Surveyor",
      "Mars Odyssey"
    ],
    "correctAnswer": "Mars Odyssey"
  },
  {
    "question": "What is the name of the largest known structure in the universe?",
    "options": [
      "Sloan Great Wall",
      "Hercules-Corona Borealis Great Wall",
      "Huge-LQG",
      "Boötes void"
    ],
    "correctAnswer": "Hercules-Corona Borealis Great Wall"
  },
  {
    "question": "Which of these is not a type of neutron star?",
    "options": [
      "Pulsar",
      "Magnetar",
      "Quark star",
      "Preon star"
    ],
    "correctAnswer": "Preon star"
  },
  {
    "question": "What is the name of the hypothetical star made entirely of dark matter?",
    "options": [
      "Black dwarf",
      "Dark star",
      "MACHO",
      "Electroweak star"
    ],
    "correctAnswer": "Dark star"
  },
  {
    "question": "Which space mission first detected the heliopause?",
    "options": [
      "Pioneer 10",
      "Voyager 1",
      "New Horizons",
      "IBEX"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "What is the name of the process by which a star sheds its outer layers at the end of its life?",
    "options": [
      "Stellar wind",
      "Planetary nebula",
      "Coronal mass ejection",
      "Stellar outburst"
    ],
    "correctAnswer": "Planetary nebula"
  },
  {
    "question": "Which of these is not a type of active galactic nucleus?",
    "options": [
      "Quasar",
      "Blazar",
      "Seyfert galaxy",
      "Pulsar"
    ],
    "correctAnswer": "Pulsar"
  },
  {
    "question": "What is the name of the theoretical lowest-energy state of the universe?",
    "options": [
      "Ground state",
      "Zero-point energy",
      "False vacuum",
      "True vacuum"
    ],
    "correctAnswer": "True vacuum"
  },
  {
    "question": "Which space mission first detected evidence of dark energy?",
    "options": [
      "WMAP",
      "Planck",
      "Hubble Space Telescope",
      "Chandra X-ray Observatory"
    ],
    "correctAnswer": "Hubble Space Telescope"
  },
  {
    "question": "What is the name of the hypothetical particle that could explain dark matter?",
    "options": [
      "Graviton",
      "Axion",
      "Tachyon",
      "Sterile neutrino"
    ],
    "correctAnswer": "Axion"
  },
  {
    "question": "Which of these is not a type of gravitational lens?",
    "options": [
      "Einstein ring",
      "Einstein cross",
      "Microlensing",
      "Macrolensing"
    ],
    "correctAnswer": "Macrolensing"
  },
  {
    "question": "What is the name of the process by which black holes lose mass over time?",
    "options": [
      "Hawking radiation",
      "Penrose process",
      "Frame-dragging",
      "Spaghettification"
    ],
    "correctAnswer": "Hawking radiation"
  },
  {
    "question": "Which space mission first detected gravitational waves?",
    "options": [
      "LIGO",
      "LISA",
      "Virgo",
      "GEO600"
    ],
    "correctAnswer": "LIGO"
  },
  {
    "question": "What is the name of the hypothetical body that collided with Earth to form the Moon?",
    "options": [
      "Theia",
      "Phoebe",
      "Rhea",
      "Dione"
    ],
    "correctAnswer": "Theia"
  },
  {
    "question": "Which of these is not a type of cosmic void?",
    "options": [
      "Supervoid",
      "Local Void",
      "Minivoid",
      "Microvoid"
    ],
    "correctAnswer": "Microvoid"
  },
  {
    "question": "What is the name of the process by which a white dwarf explodes?",
    "options": [
      "Type Ia supernova",
      "Electron capture",
      "Core collapse",
      "Pair instability"
    ],
    "correctAnswer": "Type Ia supernova"
  },
  {
    "question": "Which space mission first detected the cosmic web?",
    "options": [
      "Sloan Digital Sky Survey",
      "Planck",
      "Euclid",
      "Dark Energy Survey"
    ],
    "correctAnswer": "Sloan Digital Sky Survey"
  },
  {
    "question": "What is the name of the theoretical final stage of black hole evaporation?",
    "options": [
      "Planck star",
      "Primordial black hole",
      "Black hole remnant",
      "Naked singularity"
    ],
    "correctAnswer": "Black hole remnant"
  },
  {
    "question": "Which of these is not a type of stellar remnant?",
    "options": [
      "White dwarf",
      "Neutron star",
      "Black hole",
      "Brown dwarf"
    ],
    "correctAnswer": "Brown dwarf"
  },
  {
    "question": "What is the name of the process by which galaxies merge?",
    "options": [
      "Galactic cannibalism",
      "Tidal stripping",
      "Ram pressure stripping",
      "Dynamical friction"
    ],
    "correctAnswer": "Galactic cannibalism"
  },
  {
    "question": "Which space mission first detected the ionized bubbles in the early universe?",
    "options": [
      "WMAP",
      "Planck",
      "COBE",
      "EDGES"
    ],
    "correctAnswer": "EDGES"
  },
  {
    "question": "What is the name of the theoretical particle that could explain the matter-antimatter asymmetry in the universe?",
    "options": [
      "Sterile neutrino",
      "Majorana fermion",
      "Magnetic monopole",
      "Leptoquark"
    ],
    "correctAnswer": "Majorana fermion"
  },
  {
    "question": "Which of these is not a type of planetary nebula?",
    "options": [
      "Butterfly nebula",
      "Cat's Eye nebula",
      "Ring nebula",
      "Crab nebula"
    ],
    "correctAnswer": "Crab nebula"
  },
  {
    "question": "What is the name of the process by which a planet loses its atmosphere to space?",
    "options": [
      "Jeans escape",
      "Hydrodynamic escape",
      "Sputtering",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "Which space mission first detected the interstellar medium beyond our solar system?",
    "options": [
      "Voyager 1",
      "New Horizons",
      "IBEX",
      "Cassini"
    ],
    "correctAnswer": "IBEX"
  },
  {
    "question": "What is the name of the theoretical object that could exist at the center of a rotating black hole?",
    "options": [
      "Einstein-Rosen bridge",
      "Kerr singularity",
      "Cauchy horizon",
      "Firewall"
    ],
    "correctAnswer": "Kerr singularity"
  },
  {
    "question": "Which of these is not a type of interstellar dust?",
    "options": [
      "Silicate grains",
      "Graphite grains",
      "Ice grains",
      "Neutronium grains"
    ],
    "correctAnswer": "Neutronium grains"
  },
  {
    "question": "What is the name of the process by which a star's core collapses at the end of its life?",
    "options": [
      "Core collapse",
      "Gravitational collapse",
      "Stellar collapse",
      "Supernova implosion"
    ],
    "correctAnswer": "Core collapse"
  },
  {
    "question": "Which space mission first detected the cosmic infrared background?",
    "options": [
      "COBE",
      "Spitzer",
      "Herschel",
      "WISE"
    ],
    "correctAnswer": "COBE"
  },
  {
    "question": "What is the name of the theoretical particle that could explain the strong CP problem in quantum chromodynamics?",
    "options": [
      "Axion",
      "Graviton",
      "Tachyon",
      "Neutralino"
    ],
    "correctAnswer": "Axion"
  },
  {
    "question": "Which of these is not a type of galactic merger?",
    "options": [
      "Major merger",
      "Minor merger",
      "Wet merger",
      "Quantum merger"
    ],
    "correctAnswer": "Quantum merger"
  },
  {
    "question": "What is the name of the process by which a galaxy loses its gas to the intergalactic medium?",
    "options": [
      "Ram pressure stripping",
      "Tidal stripping",
      "Galactic wind",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "Which space mission first detected the cosmic neutrino background?",
    "options": [
      "IceCube",
      "Super-Kamiokande",
      "ANTARES",
      "None of the above"
    ],
    "correctAnswer": "None of the above"
  },
  {
    "question": "What is the name of the theoretical object that could exist at the boundary of a black hole's event horizon?",
    "options": [
      "Firewall",
      "Fuzzball",
      "Planckian",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "Which of these is not a type of cosmic string?",
    "options": [
      "Fundamental string",
      "Cosmic superstring",
      "Vorton",
      "Planck string"
    ],
    "correctAnswer": "Planck string"
  },
  {
    "question": "What is the name of the process by which a neutron star accretes matter from a companion star?",
    "options": [
      "Roche lobe overflow",
      "Bondi accretion",
      "Eddington accretion",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "Which space mission first detected the cosmic X-ray background?",
    "options": [
      "Uhuru",
      "ROSAT",
      "Chandra",
      "XMM-Newton"
    ],
    "correctAnswer": "Uhuru"
  },
  {
    "question": "What is the name of the theoretical particle that could explain the hierarchy problem in particle physics?",
    "options": [
      "Supersymmetric particle",
      "Kaluza-Klein particle",
      "String theory particle",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "Which of these is not a type of galaxy cluster?",
    "options": [
      "Poor cluster",
      "Rich cluster",
      "Fossil cluster",
      "Quantum cluster"
    ],
    "correctAnswer": "Quantum cluster"
  },
  {
    "question": "What is the name of the process by which a supermassive black hole affects its host galaxy?",
    "options": [
      "AGN feedback",
      "Quasar mode",
      "Radio mode",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "Which space mission first detected the cosmic gamma-ray background?",
    "options": [
      "SAS-2",
      "CGRO",
      "Fermi",
      "INTEGRAL"
    ],
    "correctAnswer": "SAS-2"
  },
  {
    "question": "What is the name of the theoretical object that could exist as an alternative to a black hole?",
    "options": [
      "Gravastar",
      "Boson star",
      "Quark star",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "Which of these is not a type of primordial black hole?",
    "options": [
      "Planck mass black hole",
      "Asteroid mass black hole",
      "Stellar mass black hole",
      "Supermassive black hole"
    ],
    "correctAnswer": "Supermassive black hole"
  },
  {
    "question": "What is the name of the hypothetical cloud of comets at the outer edge of the Solar System?",
    "options": [
      "Kuiper Belt",
      "Oort Cloud",
      "Scattered Disc",
      "Asteroid Belt"
    ],
    "correctAnswer": "Oort Cloud"
  },
  {
    "question": "What is the name of the effect where a star's spectrum appears to shift due to its motion relative to Earth?",
    "options": [
      "Doppler Effect",
      "Zeeman Effect",
      "Stark Effect",
      "Compton Effect"
    ],
    "correctAnswer": "Doppler Effect"
  },
  {
    "question": "Which of the following is not a type of cosmic ray?",
    "options": [
      "Protons",
      "Neutrinos",
      "Heavy Nuclei",
      "Gamma Rays"
    ],
    "correctAnswer": "Gamma Rays"
  },
  {
    "question": "What is the name of the point where an object orbiting Earth is neither falling towards nor away from the planet?",
    "options": [
      "Lagrange Point",
      "Roche Limit",
      "Schwarzschild Radius",
      "Chandrasekhar Limit"
    ],
    "correctAnswer": "Lagrange Point"
  },
  {
    "question": "Which space telescope is specifically designed to detect planets around other stars?",
    "options": [
      "Hubble",
      "James Webb",
      "TESS",
      "Chandra"
    ],
    "correctAnswer": "TESS"
  },
  {
    "question": "What is the term for the theoretical boundary around a black hole beyond which nothing can escape its gravitational pull?",
    "options": [
      "Event Horizon",
      "Singularity",
      "Photon Sphere",
      "Ergosphere"
    ],
    "correctAnswer": "Event Horizon"
  },
  {
    "question": "Which of these is not a type of galaxy?",
    "options": [
      "Elliptical",
      "Spiral",
      "Irregular",
      "Cylindrical"
    ],
    "correctAnswer": "Cylindrical"
  },
  {
    "question": "What is the name of the process by which heavier elements are created inside stars?",
    "options": [
      "Nuclear Fission",
      "Nuclear Fusion",
      "Radioactive Decay",
      "Pair Production"
    ],
    "correctAnswer": "Nuclear Fusion"
  },
  {
    "question": "Which spacecraft holds the record for the fastest human-made object?",
    "options": [
      "Voyager 1",
      "New Horizons",
      "Parker Solar Probe",
      "Juno"
    ],
    "correctAnswer": "Parker Solar Probe"
  },
  {
    "question": "What is the term for the theoretical form of matter that may exist in the core of neutron stars?",
    "options": [
      "Degenerate Matter",
      "Quark Matter",
      "Dark Matter",
      "Antimatter"
    ],
    "correctAnswer": "Quark Matter"
  },
  {
    "question": "Which of these is not a type of stellar remnant?",
    "options": [
      "White Dwarf",
      "Neutron Star",
      "Black Hole",
      "Brown Dwarf"
    ],
    "correctAnswer": "Brown Dwarf"
  },
  {
    "question": "What is the name of the hypothetical fifth fundamental force that might explain the accelerating expansion of the universe?",
    "options": [
      "Quintessence",
      "Dark Energy",
      "Cosmic Inflation",
      "Vacuum Energy"
    ],
    "correctAnswer": "Quintessence"
  },
  {
    "question": "Which space mission first landed humans on the Moon?",
    "options": [
      "Apollo 8",
      "Apollo 11",
      "Apollo 13",
      "Gemini 4"
    ],
    "correctAnswer": "Apollo 11"
  },
  {
    "question": "What is the name of the region around a star where liquid water could exist on the surface of an orbiting planet?",
    "options": [
      "Goldilocks Zone",
      "Habitable Zone",
      "Temperate Zone",
      "Liquid Belt"
    ],
    "correctAnswer": "Habitable Zone"
  },
  {
    "question": "Which of these is not a type of supernova?",
    "options": [
      "Type Ia",
      "Type II",
      "Type Ib/c",
      "Type IV"
    ],
    "correctAnswer": "Type IV"
  },
  {
    "question": "What is the name of the effect where light from a distant source is bent by the gravitational field of a massive object?",
    "options": [
      "Gravitational Lensing",
      "Cosmic Refraction",
      "Stellar Aberration",
      "Light Bending"
    ],
    "correctAnswer": "Gravitational Lensing"
  },
  {
    "question": "Which of these is not a moon of Jupiter?",
    "options": [
      "Io",
      "Europa",
      "Ganymede",
      "Titan"
    ],
    "correctAnswer": "Titan"
  },
  {
    "question": "What is the name of the theoretical particle that might explain the existence of dark matter?",
    "options": [
      "Higgs Boson",
      "Graviton",
      "WIMP",
      "Tachyon"
    ],
    "correctAnswer": "WIMP"
  },
  {
    "question": "What is the name of the theoretical multidimensional construct that might explain the behavior of strings in string theory?",
    "options": [
      "Calabi-Yau Manifold",
      "Einstein-Rosen Bridge",
      "Minkowski Space",
      "Euclidean Plane"
    ],
    "correctAnswer": "Calabi-Yau Manifold"
  },
  {
    "question": "What is the term for the theoretical process by which a black hole might lose mass over time?",
    "options": [
      "Hawking Radiation",
      "Penrose Process",
      "Frame Dragging",
      "Gravitational Redshift"
    ],
    "correctAnswer": "Hawking Radiation"
  },
  {
    "question": "Which of these is not a type of cosmic inflation theory?",
    "options": [
      "Chaotic Inflation",
      "Eternal Inflation",
      "Slow-roll Inflation",
      "Rapid Inflation"
    ],
    "correctAnswer": "Rapid Inflation"
  },
  {
    "question": "What is the name of the hypothetical boundary in the Solar System where the solar wind meets the interstellar medium?",
    "options": [
      "Heliopause",
      "Termination Shock",
      "Bow Shock",
      "Magnetopause"
    ],
    "correctAnswer": "Heliopause"
  },
  {
    "question": "Which spacecraft first visited Pluto?",
    "options": [
      "New Horizons",
      "Voyager 2",
      "Pioneer 10",
      "Cassini"
    ],
    "correctAnswer": "New Horizons"
  },
  {
    "question": "What is the term for the theoretical tunnels through space-time that might allow faster-than-light travel?",
    "options": [
      "Wormholes",
      "Quantum Tunnels",
      "Cosmic Strings",
      "Hyperspace Lanes"
    ],
    "correctAnswer": "Wormholes"
  },
  {
    "question": "Which of these is not a proposed solution to the Fermi Paradox?",
    "options": [
      "Great Filter",
      "Zoo Hypothesis",
      "Rare Earth Hypothesis",
      "Infinite Universe Theory"
    ],
    "correctAnswer": "Infinite Universe Theory"
  },
  {
    "question": "What is the name of the effect where time appears to pass more slowly for objects moving at high speeds?",
    "options": [
      "Time Dilation",
      "Gravitational Time Shift",
      "Relativistic Time Contraction",
      "Temporal Distortion"
    ],
    "correctAnswer": "Time Dilation"
  },
  {
    "question": "Which space telescope is designed to study dark energy and dark matter?",
    "options": [
      "Euclid",
      "Kepler",
      "Spitzer",
      "Fermi"
    ],
    "correctAnswer": "Euclid"
  },
  {
    "question": "What is the term for the theoretical limit to how much information can be stored in a given volume of space?",
    "options": [
      "Bekenstein Bound",
      "Shannon Limit",
      "Planck Density",
      "Quantum Capacity"
    ],
    "correctAnswer": "Bekenstein Bound"
  },
  {
    "question": "Which of these is not a type of active galactic nucleus?",
    "options": [
      "Quasar",
      "Blazar",
      "Seyfert Galaxy",
      "Pulsar"
    ],
    "correctAnswer": "Pulsar"
  },
  {
    "question": "What is the name of the boundary around a black hole where light orbits without falling in?",
    "options": [
      "Photon Sphere",
      "Light Ring",
      "Schwarzschild Radius",
      "Innermost Stable Circular Orbit"
    ],
    "correctAnswer": "Photon Sphere"
  },
  {
    "question": "Which space mission first landed a probe on a comet?",
    "options": [
      "Rosetta",
      "Deep Impact",
      "Stardust",
      "Hayabusa"
    ],
    "correctAnswer": "Rosetta"
  },
  {
    "question": "What is the term for the theoretical process by which a white dwarf might explode?",
    "options": [
      "Carbon Detonation",
      "Helium Flash",
      "Electron Capture",
      "Neutronization"
    ],
    "correctAnswer": "Carbon Detonation"
  },
  {
    "question": "Which of these is not a type of planetary nebula?",
    "options": [
      "Butterfly Nebula",
      "Ring Nebula",
      "Hourglass Nebula",
      "Crab Nebula"
    ],
    "correctAnswer": "Crab Nebula"
  },
  {
    "question": "What is the name of the hypothetical particle that might mediate the force of gravity?",
    "options": [
      "Graviton",
      "Gluon",
      "Higgs Boson",
      "Axion"
    ],
    "correctAnswer": "Graviton"
  },
  {
    "question": "Which space mission first detected methane in the atmosphere of Mars?",
    "options": [
      "Mars Express",
      "Curiosity Rover",
      "Maven",
      "ExoMars Trace Gas Orbiter"
    ],
    "correctAnswer": "Mars Express"
  },
  {
    "question": "What is the term for the theoretical process by which a star might collapse directly into a black hole without a supernova explosion?",
    "options": [
      "Failed Supernova",
      "Direct Collapse",
      "Quiet Implosion",
      "Dark Nova"
    ],
    "correctAnswer": "Failed Supernova"
  },
  {
    "question": "Which of these is not a proposed method for interstellar travel?",
    "options": [
      "Alcubierre Drive",
      "Light Sail",
      "Nuclear Pulse Propulsion",
      "Quantum Leap Drive"
    ],
    "correctAnswer": "Quantum Leap Drive"
  },
  {
    "question": "What is the name of the hypothetical state of matter that might exist in the core of a neutron star?",
    "options": [
      "Strange Matter",
      "Quark-Gluon Plasma",
      "Bose-Einstein Condensate",
      "Superfluid"
    ],
    "correctAnswer": "Strange Matter"
  },
  {
    "question": "Which space mission first detected the presence of water ice on Mercury?",
    "options": [
      "MESSENGER",
      "BepiColombo",
      "Mariner 10",
      "Arecibo Observatory"
    ],
    "correctAnswer": "MESSENGER"
  },
  {
    "question": "What is the term for the theoretical process by which a rotating black hole might release energy?",
    "options": [
      "Penrose Process",
      "Blandford-Znajek Process",
      "Kerr Effect",
      "Frame Dragging"
    ],
    "correctAnswer": "Penrose Process"
  },
  {
    "question": "Which of these is not a type of magnetar?",
    "options": [
      "Soft Gamma Repeater",
      "Anomalous X-ray Pulsar",
      "Rotating Radio Transient",
      "X-ray Dim Isolated Neutron Star"
    ],
    "correctAnswer": "X-ray Dim Isolated Neutron Star"
  },
  {
    "question": "What is the name of the effect where light from a distant galaxy appears brighter due to gravitational lensing by an intervening galaxy?",
    "options": [
      "Cosmic Magnification",
      "Einstein Ring",
      "Microlensing",
      "Gravitational Amplification"
    ],
    "correctAnswer": "Einstein Ring"
  },
  {
    "question": "Which spacecraft first detected the heliopause?",
    "options": [
      "Voyager 1",
      "Voyager 2",
      "Pioneer 10",
      "New Horizons"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "What is the term for the theoretical process by which primordial black holes might have formed in the early universe?",
    "options": [
      "Quantum Fluctuation",
      "Cosmic Inflation",
      "Baryogenesis",
      "Nucleosynthesis"
    ],
    "correctAnswer": "Quantum Fluctuation"
  },
  {
    "question": "Which of these is not a proposed dark matter candidate?",
    "options": [
      "WIMP",
      "Axion",
      "Neutralino",
      "Positron"
    ],
    "correctAnswer": "Positron"
  },
  {
    "question": "What is the name of the effect where a black hole's spin causes nearby space-time to rotate?",
    "options": [
      "Frame Dragging",
      "Gravitomagnetic Effect",
      "Lense-Thirring Precession",
      "Geodetic Effect"
    ],
    "correctAnswer": "Frame Dragging"
  },
  {
    "question": "Which space telescope is specifically designed to study the atmospheres of exoplanets?",
    "options": [
      "ARIEL",
      "CHEOPS",
      "PLATO",
      "TESS"
    ],
    "correctAnswer": "ARIEL"
  },
  {
    "question": "What is the term for the theoretical limit to how small a length can be?",
    "options": [
      "Planck Length",
      "String Length",
      "Quantum Limit",
      "Minimal Distance"
    ],
    "correctAnswer": "Planck Length"
  },
  {
    "question": "Which of these is not a type of cosmic void?",
    "options": [
      "Supervoid",
      "Local Void",
      "Boötes Void",
      "Dark Void"
    ],
    "correctAnswer": "Dark Void"
  },
  {
    "question": "What is the name of the theoretical process by which a neutron star might suddenly speed up its rotation?",
    "options": [
      "Glitch",
      "Starquake",
      "Spin-up",
      "Pulsar Kick"
    ],
    "correctAnswer": "Glitch"
  },
  {
    "question": "Which space mission first detected the presence of organic molecules on Mars?",
    "options": [
      "Viking 1",
      "Curiosity",
      "Phoenix",
      "Mars Express"
    ],
    "correctAnswer": "Viking 1"
  },
  {
    "question": "What is the term for the theoretical process by which the vacuum of space might spontaneously create particle-antiparticle pairs?",
    "options": [
      "Vacuum Polarization",
      "Pair Production",
      "Quantum Fluctuation",
      "Casimir Effect"
    ],
    "correctAnswer": "Vacuum Polarization"
  },
  {
    "question": "Which of these is not a type of gravitational wave source?",
    "options": [
      "Binary Black Hole Merger",
      "Neutron Star Collision",
      "Supernova Explosion",
      "Planetary Orbit"
    ],
    "correctAnswer": "Planetary Orbit"
  },
  {
    "question": "What is the name of the hypothetical particle that might explain the matter-antimatter asymmetry in the universe?",
    "options": [
      "Majorana Fermion",
      "Sterile Neutrino",
      "Magnetic Monopole",
      "Tachyon"
    ],
    "correctAnswer": "Majorana Fermion"
  },
  {
    "question": "Which space mission first detected evidence of plate tectonics on Europa?",
    "options": [
      "Galileo",
      "Voyager 2",
      "New Horizons",
      "Juno"
    ],
    "correctAnswer": "Galileo"
  },
  {
    "question": "What is the term for the theoretical process by which a star might pulsate due to changes in its opacity?",
    "options": [
      "Kappa Mechanism",
      "Eddington Valve",
      "Cepheid Pulsation",
      "Stellar Oscillation"
    ],
    "correctAnswer": "Kappa Mechanism"
  },
  {
    "question": "Which of these is not a proposed solution to the black hole information paradox?",
    "options": [
      "Holographic Principle",
      "Firewall",
      "Complementarity",
      "Dark Energy Emission"
    ],
    "correctAnswer": "Dark Energy Emission"
  },
  {
    "question": "What is the name of the theoretical structure that might connect parallel universes in M-theory?",
    "options": [
      "Brane",
      "Cosmic String",
      "Domain Wall",
      "Quantum Foam"
    ],
    "correctAnswer": "Brane"
  },
  {
    "question": "Which space mission first detected the presence of molecular oxygen in the Martian atmosphere?",
    "options": [
      "MAVEN",
      "ExoMars Trace Gas Orbiter",
      "Mars Reconnaissance Orbiter",
      "Mars Express"
    ],
    "correctAnswer": "ExoMars Trace Gas Orbiter"
  },
  {
    "question": "What is the term for the theoretical process by which a neutron star might convert entirely into strange quarks?",
    "options": [
      "Quark Nova",
      "Strangelet Cascade",
      "Hadron Collapse",
      "Neutron Drip"
    ],
    "correctAnswer": "Quark Nova"
  },
  {
    "question": "Which of these is not a type of stellar pulsation?",
    "options": [
      "RR Lyrae",
      "Cepheid",
      "Mira Variable",
      "Wolf-Rayet"
    ],
    "correctAnswer": "Wolf-Rayet"
  },
  {
    "question": "What is the name of the effect where the cosmic microwave background appears warmer in the direction of large-scale structures?",
    "options": [
      "Sunyaev-Zeldovich Effect",
      "Sachs-Wolfe Effect",
      "Silk Damping",
      "Baryon Acoustic Oscillation"
    ],
    "correctAnswer": "Sunyaev-Zeldovich Effect"
  },
  {
    "question": "Which spacecraft first detected the presence of a liquid water ocean beneath the surface of Enceladus?",
    "options": [
      "Cassini",
      "Voyager 2",
      "Galileo",
      "New Horizons"
    ],
    "correctAnswer": "Cassini"
  },
  {
    "question": "What is the term for the theoretical process by which a star might form directly from dark matter?",
    "options": [
      "Dark Star Formation",
      "Shadow Genesis",
      "Halo Collapse",
      "Primordial Nucleation"
    ],
    "correctAnswer": "Dark Star Formation"
  },
  {
    "question": "Which of these is not a proposed modified gravity theory?",
    "options": [
      "MOND",
      "f(R) Gravity",
      "TeVeS",
      "Quantum Chromodynamics"
    ],
    "correctAnswer": "Quantum Chromodynamics"
  },
  {
    "question": "What is the name of the effect where light from a distant quasar appears to split into multiple images due to an intervening galaxy?",
    "options": [
      "Strong Lensing",
      "Cosmic Mirage",
      "Quasar Multiplicity",
      "Gravitational Imaging"
    ],
    "correctAnswer": "Strong Lensing"
  },
  {
    "question": "Which space telescope is specifically designed to map the entire sky in X-rays?",
    "options": [
      "eROSITA",
      "Chandra",
      "XMM-Newton",
      "NuSTAR"
    ],
    "correctAnswer": "eROSITA"
  },
  {
    "question": "What is the term for the theoretical limit to how hot a temperature can be?",
    "options": [
      "Planck Temperature",
      "Hagedorn Temperature",
      "Absolute Hot",
      "Quantum Thermal Limit"
    ],
    "correctAnswer": "Planck Temperature"
  },
  {
    "question": "Which of these is not a type of galactic merger?",
    "options": [
      "Major Merger",
      "Minor Merger",
      "Wet Merger",
      "Quantum Merger"
    ],
    "correctAnswer": "Quantum Merger"
  },
  {
    "question": "What is the name of the theoretical process by which a supermassive black hole might be ejected from its host galaxy?",
    "options": [
      "Gravitational Wave Recoil",
      "Galactic Ejection",
      "Slingshot Effect",
      "Cosmic Expulsion"
    ],
    "correctAnswer": "Gravitational Wave Recoil"
  },
  {
    "question": "Which space mission first detected the presence of helium-3 in the lunar regolith?",
    "options": [
      "Apollo 11",
      "Luna 16",
      "Chang'e 5",
      "ARTEMIS"
    ],
    "correctAnswer": "Apollo 11"
  },
  {
    "question": "What is the term for the theoretical process by which dark matter might annihilate to produce detectable particles?",
    "options": [
      "WIMP Annihilation",
      "Dark Decay",
      "Shadow Interaction",
      "Halo Emission"
    ],
    "correctAnswer": "WIMP Annihilation"
  },
  {
    "question": "Which of these is not a type of cosmic ray detector?",
    "options": [
      "Air Shower Array",
      "Neutrino Telescope",
      "Cherenkov Detector",
      "Bose-Einstein Condenser"
    ],
    "correctAnswer": "Bose-Einstein Condenser"
  },
  {
    "question": "What is the name of the hypothetical particle that might explain the strong CP problem in quantum chromodynamics?",
    "options": [
      "Axion",
      "Neutralino",
      "Gravitino",
      "Sterile Neutrino"
    ],
    "correctAnswer": "Axion"
  },
  {
    "question": "Which space mission first detected evidence of subsurface lakes on Mars?",
    "options": [
      "Mars Express",
      "Mars Reconnaissance Orbiter",
      "Mars Global Surveyor",
      "ExoMars"
    ],
    "correctAnswer": "Mars Express"
  },
  {
    "question": "What is the term for the theoretical process by which a white dwarf might accrete enough mass to exceed the Chandrasekhar limit?",
    "options": [
      "Accretion-Induced Collapse",
      "Chandrasekhar Transgression",
      "Type Ia Progenitor",
      "Degenerate Overflow"
    ],
    "correctAnswer": "Accretion-Induced Collapse"
  },
  {
    "question": "Which of these is not a proposed explanation for the origin of ultra-high-energy cosmic rays?",
    "options": [
      "Active Galactic Nuclei",
      "Gamma-Ray Bursts",
      "Neutron Star Mergers",
      "Planetary Magnetic Fields"
    ],
    "correctAnswer": "Planetary Magnetic Fields"
  },
  {
    "question": "What is the largest planet in our Solar System?",
    "options": [
      "Mars",
      "Jupiter",
      "Saturn",
      "Earth"
    ],
    "correctAnswer": "Jupiter"
  },
  {
    "question": "Which planet is known as the \"Red Planet\"?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter",
      "Mercury"
    ],
    "correctAnswer": "Mars"
  },
  {
    "question": "What is the name of Earth's natural satellite?",
    "options": [
      "Sun",
      "Moon",
      "Star",
      "Comet"
    ],
    "correctAnswer": "Moon"
  },
  {
    "question": "Which planet is famous for its beautiful rings?",
    "options": [
      "Jupiter",
      "Mars",
      "Saturn",
      "Neptune"
    ],
    "correctAnswer": "Saturn"
  },
  {
    "question": "What is the hottest planet in our Solar System?",
    "options": [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "correctAnswer": "Venus"
  },
  {
    "question": "What do we call a rocky object in space that orbits the Sun?",
    "options": [
      "Planet",
      "Star",
      "Asteroid",
      "Galaxy"
    ],
    "correctAnswer": "Asteroid"
  },
  {
    "question": "Which planet is known as the \"Blue Planet\"?",
    "options": [
      "Earth",
      "Neptune",
      "Uranus",
      "Venus"
    ],
    "correctAnswer": "Earth"
  },
  {
    "question": "What is the name of the galaxy we live in?",
    "options": [
      "Andromeda",
      "Milky Way",
      "Sombrero",
      "Whirlpool"
    ],
    "correctAnswer": "Milky Way"
  },
  {
    "question": "What do we call a large group of stars, dust, and gas held together by gravity?",
    "options": [
      "Solar System",
      "Constellation",
      "Galaxy",
      "Nebula"
    ],
    "correctAnswer": "Galaxy"
  },
  {
    "question": "Which planet is closest to the Sun?",
    "options": [
      "Venus",
      "Earth",
      "Mars",
      "Mercury"
    ],
    "correctAnswer": "Mercury"
  },
  {
    "question": "What is the name of the force that pulls everything towards the center of the Earth?",
    "options": [
      "Magnetism",
      "Electricity",
      "Gravity",
      "Wind"
    ],
    "correctAnswer": "Gravity"
  },
  {
    "question": "What do we call a huge ball of gas in space that produces heat and light?",
    "options": [
      "Planet",
      "Moon",
      "Asteroid",
      "Star"
    ],
    "correctAnswer": "Star"
  },
  {
    "question": "Which planet is known as the \"Ice Giant\"?",
    "options": [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    "correctAnswer": "Uranus"
  },
  {
    "question": "What is the name of the first human to walk on the Moon?",
    "options": [
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Neil Armstrong",
      "John Glenn"
    ],
    "correctAnswer": "Neil Armstrong"
  },
  {
    "question": "What do we call the path a planet takes around the Sun?",
    "options": [
      "Revolution",
      "Rotation",
      "Orbit",
      "Axis"
    ],
    "correctAnswer": "Orbit"
  },
  {
    "question": "Which planet is known as Earth's \"sister planet\" because of its similar size?",
    "options": [
      "Mars",
      "Venus",
      "Mercury",
      "Jupiter"
    ],
    "correctAnswer": "Venus"
  },
  {
    "question": "What is the name of the spacecraft that carries astronauts to the International Space Station?",
    "options": [
      "Challenger",
      "Apollo",
      "Soyuz",
      "Gemini"
    ],
    "correctAnswer": "Soyuz"
  },
  {
    "question": "What do we call a space rock that enters Earth's atmosphere and burns up?",
    "options": [
      "Asteroid",
      "Comet",
      "Meteor",
      "Planet"
    ],
    "correctAnswer": "Meteor"
  },
  {
    "question": "Which planet has the Great Red Spot, a giant storm?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter",
      "Saturn"
    ],
    "correctAnswer": "Jupiter"
  },
  {
    "question": "What is the name of the imaginary line around the middle of the Earth?",
    "options": [
      "Tropic of Cancer",
      "Prime Meridian",
      "Equator",
      "Arctic Circle"
    ],
    "correctAnswer": "Equator"
  },
  {
    "question": "What is the name of the boundary where the solar wind meets the interstellar medium?",
    "options": [
      "Heliopause",
      "Magnetopause",
      "Termination Shock",
      "Bow Shock"
    ],
    "correctAnswer": "Heliopause"
  },
  {
    "question": "Which space mission first detected the presence of organic molecules in the atmosphere of an exoplanet?",
    "options": [
      "Hubble Space Telescope",
      "Kepler",
      "TESS",
      "James Webb Space Telescope"
    ],
    "correctAnswer": "James Webb Space Telescope"
  },
  {
    "question": "What is the term for the theoretical process by which a rotating neutron star loses energy?",
    "options": [
      "Magnetic Braking",
      "Gravitational Radiation",
      "Pulsar Wind",
      "Spindown"
    ],
    "correctAnswer": "Magnetic Braking"
  },
  {
    "question": "Which of these is not a type of galaxy interaction?",
    "options": [
      "Tidal Stripping",
      "Galactic Cannibalism",
      "Ram Pressure Stripping",
      "Quantum Entanglement"
    ],
    "correctAnswer": "Quantum Entanglement"
  },
  {
    "question": "What is the name of the effect where light from a distant galaxy appears stretched due to the expansion of the universe?",
    "options": [
      "Cosmic Redshift",
      "Doppler Effect",
      "Gravitational Lensing",
      "Time Dilation"
    ],
    "correctAnswer": "Cosmic Redshift"
  },
  {
    "question": "Which spacecraft first detected evidence of cryovolcanism on Enceladus?",
    "options": [
      "Cassini",
      "Voyager 2",
      "New Horizons",
      "Juno"
    ],
    "correctAnswer": "Cassini"
  },
  {
    "question": "What is the term for the theoretical process by which a black hole might lose information?",
    "options": [
      "Information Paradox",
      "Hawking Radiation",
      "Quantum Tunneling",
      "Event Horizon Breach"
    ],
    "correctAnswer": "Information Paradox"
  },
  {
    "question": "Which of these is not a proposed dark energy model?",
    "options": [
      "Quintessence",
      "Phantom Energy",
      "Cosmological Constant",
      "Dark Fluid"
    ],
    "correctAnswer": "Dark Fluid"
  },
  {
    "question": "What is the name of the largest known structure in the universe?",
    "options": [
      "Hercules-Corona Borealis Great Wall",
      "Sloan Great Wall",
      "Huge-LQG",
      "Boötes Void"
    ],
    "correctAnswer": "Hercules-Corona Borealis Great Wall"
  },
  {
    "question": "Which space telescope is designed to study the universe in infrared light?",
    "options": [
      "James Webb Space Telescope",
      "Hubble Space Telescope",
      "Chandra X-ray Observatory",
      "Fermi Gamma-ray Space Telescope"
    ],
    "correctAnswer": "James Webb Space Telescope"
  },
  {
    "question": "What is the smallest planet in our Solar System?",
    "options": [
      "Mercury",
      "Mars",
      "Venus",
      "Earth"
    ],
    "correctAnswer": "Mercury"
  },
  {
    "question": "Which planet is known as the \"Giant Blue Planet\"?",
    "options": [
      "Uranus",
      "Neptune",
      "Earth",
      "Venus"
    ],
    "correctAnswer": "Neptune"
  },
  {
    "question": "What do we call the boundary between Earth's atmosphere and space?",
    "options": [
      "Stratosphere",
      "Mesosphere",
      "Thermosphere",
      "Kármán Line"
    ],
    "correctAnswer": "Kármán Line"
  },
  {
    "question": "What is the name of the first artificial satellite launched into space?",
    "options": [
      "Explorer 1",
      "Vostok 1",
      "Sputnik 1",
      "Apollo 1"
    ],
    "correctAnswer": "Sputnik 1"
  },
  {
    "question": "Which planet has the most moons in our Solar System?",
    "options": [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    "correctAnswer": "Saturn"
  },
  {
    "question": "What do we call a group of stars that forms a pattern in the night sky?",
    "options": [
      "Galaxy",
      "Solar System",
      "Nebula",
      "Constellation"
    ],
    "correctAnswer": "Constellation"
  },
  {
    "question": "What is the name of the force that keeps planets in orbit around the Sun?",
    "options": [
      "Magnetic Force",
      "Centrifugal Force",
      "Gravitational Force",
      "Electric Force"
    ],
    "correctAnswer": "Gravitational Force"
  },
  {
    "question": "Which planet is known as the \"Morning Star\" or \"Evening Star\"?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter",
      "Mercury"
    ],
    "correctAnswer": "Venus"
  },
  {
    "question": "What do we call the study of the universe and everything in it?",
    "options": [
      "Astrology",
      "Astronomy",
      "Cosmology",
      "Astrophysics"
    ],
    "correctAnswer": "Astronomy"
  },
  {
    "question": "What is the name of the galaxy closest to the Milky Way?",
    "options": [
      "Andromeda",
      "Triangulum",
      "Centaurus A",
      "Magellanic Clouds"
    ],
    "correctAnswer": "Andromeda"
  },
  {
    "question": "What is the name of the hypothetical form of matter that might exist inside neutron stars?",
    "options": [
      "Quark-Gluon Plasma",
      "Bose-Einstein Condensate",
      "Degenerate Matter",
      "Strange Matter"
    ],
    "correctAnswer": "Strange Matter"
  },
  {
    "question": "Which space mission first detected gravitational waves from the merger of two neutron stars?",
    "options": [
      "LIGO/Virgo",
      "LISA Pathfinder",
      "KAGRA",
      "Einstein Telescope"
    ],
    "correctAnswer": "LIGO/Virgo"
  },
  {
    "question": "What is the term for the theoretical process by which a white dwarf might explode below the Chandrasekhar limit?",
    "options": [
      "Sub-Chandrasekhar Detonation",
      "Helium Flash",
      "Carbon Deflagration",
      "Electron Capture"
    ],
    "correctAnswer": "Sub-Chandrasekhar Detonation"
  },
  {
    "question": "Which of these is not a type of planetary migration in protoplanetary disks?",
    "options": [
      "Type I Migration",
      "Type II Migration",
      "Type III Migration",
      "Type IV Migration"
    ],
    "correctAnswer": "Type IV Migration"
  },
  {
    "question": "What is the name of the effect where a planet's orbit changes shape due to gravitational interactions with other planets?",
    "options": [
      "Kozai Mechanism",
      "Milankovitch Cycles",
      "Lidov-Kozai Mechanism",
      "Resonant Perturbation"
    ],
    "correctAnswer": "Lidov-Kozai Mechanism"
  },
  {
    "question": "Which space mission first detected the presence of a magnetosphere around Ganymede?",
    "options": [
      "Galileo",
      "Juno",
      "Cassini",
      "New Horizons"
    ],
    "correctAnswer": "Galileo"
  },
  {
    "question": "What is the term for the theoretical process by which a star might collapse directly into a black hole without a supernova explosion?",
    "options": [
      "Direct Collapse",
      "Failed Supernova",
      "Black Hole Birth",
      "Stellar Implosion"
    ],
    "correctAnswer": "Failed Supernova"
  },
  {
    "question": "Which of these is not a proposed solution to the cosmic lithium problem?",
    "options": [
      "Stellar Depletion",
      "Non-Standard BBN",
      "Axion Cooling",
      "Dark Matter Decay"
    ],
    "correctAnswer": "Dark Matter Decay"
  },
  {
    "question": "What is the name of the largest known reionization-era galaxy discovered to date?",
    "options": [
      "GN-z11",
      "EGSY8p7",
      "EGS-zs8-1",
      "MACS0647-JD"
    ],
    "correctAnswer": "GN-z11"
  },
  {
    "question": "Which space telescope is specifically designed to study the epoch of reionization?",
    "options": [
      "JWST",
      "SKA",
      "HERA",
      "WFIRST"
    ],
    "correctAnswer": "HERA"
  },
  {
    "question": "What is the name of the first woman to go to space?",
    "options": [
      "Sally Ride",
      "Valentina Tereshkova",
      "Eileen Collins",
      "Mae Jemison"
    ],
    "correctAnswer": "Valentina Tereshkova"
  },
  {
    "question": "Which planet in our Solar System spins backwards compared to the others?",
    "options": [
      "Uranus",
      "Venus",
      "Mars",
      "Neptune"
    ],
    "correctAnswer": "Venus"
  },
  {
    "question": "What do we call the point in a planet's orbit when it is closest to the Sun?",
    "options": [
      "Aphelion",
      "Perihelion",
      "Zenith",
      "Nadir"
    ],
    "correctAnswer": "Perihelion"
  },
  {
    "question": "What is the name of the space station that orbits Earth?",
    "options": [
      "Mir",
      "Skylab",
      "International Space Station",
      "Tiangong"
    ],
    "correctAnswer": "International Space Station"
  },
  {
    "question": "Which planet is known for its Great Dark Spot?",
    "options": [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ],
    "correctAnswer": "Neptune"
  },
  {
    "question": "What do we call a star that suddenly increases in brightness and then slowly returns to its original state?",
    "options": [
      "Supernova",
      "Nova",
      "Pulsar",
      "Quasar"
    ],
    "correctAnswer": "Nova"
  },
  {
    "question": "What is the name of the first rover to explore Mars?",
    "options": [
      "Curiosity",
      "Opportunity",
      "Spirit",
      "Sojourner"
    ],
    "correctAnswer": "Sojourner"
  },
  {
    "question": "Which layer of the Sun is visible during a total solar eclipse?",
    "options": [
      "Photosphere",
      "Chromosphere",
      "Corona",
      "Core"
    ],
    "correctAnswer": "Corona"
  },
  {
    "question": "What do we call the process by which a star produces energy?",
    "options": [
      "Fission",
      "Fusion",
      "Combustion",
      "Ionization"
    ],
    "correctAnswer": "Fusion"
  },
  {
    "question": "Which dwarf planet is located in the Kuiper Belt?",
    "options": [
      "Ceres",
      "Eris",
      "Pluto",
      "Makemake"
    ],
    "correctAnswer": "Pluto"
  },
  {
    "question": "What is the name of the cloud of comets that surrounds our Solar System?",
    "options": [
      "Kuiper Belt",
      "Oort Cloud",
      "Asteroid Belt",
      "Scattered Disc"
    ],
    "correctAnswer": "Oort Cloud"
  },
  {
    "question": "Which type of galaxy is characterized by a central bulge and spiral arms?",
    "options": [
      "Elliptical",
      "Spiral",
      "Irregular",
      "Lenticular"
    ],
    "correctAnswer": "Spiral"
  },
  {
    "question": "What is the name of the boundary where the solar wind slows abruptly?",
    "options": [
      "Heliopause",
      "Termination Shock",
      "Bow Shock",
      "Magnetopause"
    ],
    "correctAnswer": "Termination Shock"
  },
  {
    "question": "What is the term for the point in a satellite's orbit when it is farthest from Earth?",
    "options": [
      "Apogee",
      "Perigee",
      "Zenith",
      "Nadir"
    ],
    "correctAnswer": "Apogee"
  },
  {
    "question": "Which spacecraft holds the record for the farthest distance from Earth?",
    "options": [
      "Voyager 1",
      "Voyager 2",
      "New Horizons",
      "Pioneer 10"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "What is the term for the alignment of three celestial bodies?",
    "options": [
      "Conjunction",
      "Opposition",
      "Syzygy",
      "Transit"
    ],
    "correctAnswer": "Syzygy"
  },
  {
    "question": "Which of these moons is known for its subsurface ocean and potential habitability?",
    "options": [
      "Titan",
      "Europa",
      "Phobos",
      "Charon"
    ],
    "correctAnswer": "Europa"
  },
  {
    "question": "What is the name of the point where an object orbiting Earth is neither falling towards nor away from the planet?",
    "options": [
      "Lagrange Point",
      "Roche Limit",
      "Schwarzschild Radius",
      "Hill Sphere"
    ],
    "correctAnswer": "Lagrange Point"
  },
  {
    "question": "Which space telescope is specifically designed to search for potentially habitable exoplanets?",
    "options": [
      "Kepler",
      "Hubble",
      "TESS",
      "Spitzer"
    ],
    "correctAnswer": "TESS"
  },
  {
    "question": "What is the term for the theoretical tunnels through space-time that might allow faster-than-light travel?",
    "options": [
      "Wormholes",
      "Black Holes",
      "White Holes",
      "Einstein-Rosen Bridges"
    ],
    "correctAnswer": "Wormholes"
  },
  {
    "question": "Which of these is not a type of cosmic ray?",
    "options": [
      "Protons",
      "Electrons",
      "Heavy Nuclei",
      "Photons"
    ],
    "correctAnswer": "Photons"
  },
  {
    "question": "What is the name of the effect where light from a distant source is bent by the gravitational field of a massive object?",
    "options": [
      "Gravitational Lensing",
      "Refraction",
      "Diffraction",
      "Interference"
    ],
    "correctAnswer": "Gravitational Lensing"
  },
  {
    "question": "Which of these is not a phase of stellar evolution for a Sun-like star?",
    "options": [
      "Red Giant",
      "White Dwarf",
      "Neutron Star",
      "Planetary Nebula"
    ],
    "correctAnswer": "Neutron Star"
  },
  {
    "question": "Which of these is not a type of galaxy interaction?",
    "options": [
      "Merger",
      "Collision",
      "Cannibalism",
      "Fission"
    ],
    "correctAnswer": "Fission"
  },
  {
    "question": "What is the name of the process by which stars fuse hydrogen into helium?",
    "options": [
      "Proton-proton chain",
      "CNO cycle",
      "Triple-alpha process",
      "r-process"
    ],
    "correctAnswer": "Proton-proton chain"
  },
  {
    "question": "Which space mission first detected evidence of water plumes on Europa?",
    "options": [
      "Galileo",
      "Juno",
      "Hubble Space Telescope",
      "New Horizons"
    ],
    "correctAnswer": "Hubble Space Telescope"
  },
  {
    "question": "What is the term for the theoretical process by which a black hole might lose mass over time?",
    "options": [
      "Hawking radiation",
      "Penrose process",
      "Frame dragging",
      "Gravitational redshift"
    ],
    "correctAnswer": "Hawking radiation"
  },
  {
    "question": "What is the name of the hypothetical form of matter that might comprise dark matter?",
    "options": [
      "WIMPs",
      "Axions",
      "Neutrinos",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "Which spacecraft first detected the heliopause?",
    "options": [
      "Voyager 1",
      "Voyager 2",
      "New Horizons",
      "Pioneer 10"
    ],
    "correctAnswer": "Voyager 1"
  },
  {
    "question": "What is the term for the theoretical limit to how small a length can be?",
    "options": [
      "Planck length",
      "String length",
      "Quantum limit",
      "Minimal distance"
    ],
    "correctAnswer": "Planck length"
  },
  {
    "question": "Which of these is not a type of galactic nucleus?",
    "options": [
      "Seyfert nucleus",
      "LINER",
      "Quasar",
      "Pulsar"
    ],
    "correctAnswer": "Pulsar"
  },
  {
    "question": "What is the name of the largest known void in the universe?",
    "options": [
      "Boötes Void",
      "Giant Void",
      "KBC Void",
      "CMB Cold Spot"
    ],
    "correctAnswer": "KBC Void"
  },
  {
    "question": "Which space telescope is designed to study dark energy and dark matter?",
    "options": [
      "Euclid",
      "WFIRST",
      "JWST",
      "LISA"
    ],
    "correctAnswer": "Euclid"
  },
  {
    "question": "What is the name of the star closest to our Solar System?",
    "options": [
      "Alpha Centauri",
      "Proxima Centauri",
      "Sirius",
      "Betelgeuse"
    ],
    "correctAnswer": "Proxima Centauri"
  },
  {
    "question": "Which planet in our Solar System has the shortest day?",
    "options": [
      "Mercury",
      "Venus",
      "Jupiter",
      "Saturn"
    ],
    "correctAnswer": "Jupiter"
  },
  {
    "question": "What is the term for a star that pulsates regularly, changing in brightness?",
    "options": [
      "Variable star",
      "Pulsar",
      "Quasar",
      "Blazar"
    ],
    "correctAnswer": "Variable star"
  },
  {
    "question": "Which spacecraft was the first to orbit Mercury?",
    "options": [
      "Mariner 10",
      "MESSENGER",
      "BepiColombo",
      "None of the above"
    ],
    "correctAnswer": "MESSENGER"
  },
  {
    "question": "What is the name of the largest asteroid in the asteroid belt?",
    "options": [
      "Vesta",
      "Pallas",
      "Ceres",
      "Hygiea"
    ],
    "correctAnswer": "Ceres"
  },
  {
    "question": "Which moon in our Solar System is the only one known to have a thick atmosphere?",
    "options": [
      "Io",
      "Europa",
      "Titan",
      "Triton"
    ],
    "correctAnswer": "Titan"
  },
  {
    "question": "What is the term for the point in a planet's orbit when it is farthest from the Sun?",
    "options": [
      "Aphelion",
      "Perihelion",
      "Apogee",
      "Perigee"
    ],
    "correctAnswer": "Aphelion"
  },
  {
    "question": "Which space agency launched the first artificial satellite?",
    "options": [
      "NASA",
      "ESA",
      "Soviet Space Program",
      "JAXA"
    ],
    "correctAnswer": "Soviet Space Program"
  },
  {
    "question": "What is the name of the theory that explains how the universe began and evolved?",
    "options": [
      "Steady State Theory",
      "Big Bang Theory",
      "Inflation Theory",
      "Multiverse Theory"
    ],
    "correctAnswer": "Big Bang Theory"
  },
  {
    "question": "Which planet in our Solar System has the most volcanoes?",
    "options": [
      "Earth",
      "Mars",
      "Venus",
      "Io (a moon of Jupiter)"
    ],
    "correctAnswer": "Venus"
  }
]

export default questions;