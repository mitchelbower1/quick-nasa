import { Component, OnInit } from "@angular/core";
import { Planets } from "../interfaces/planets";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.css"]
})
export class PlanetsComponent implements OnInit {
  planets: Planets[] = [
    {
      name: "Mercury",
      planetType: "Terrestrial",
      size:
        "Mercury is the smallest planet in our solar system—only slightly larger than Earth's Moon. ",
      distance:
        "It is the closest planet to the Sun at a distance of about 36 million miles (58 million kilometers) or 0.39 AU.",
      orbit:
        "One day on Mercury (the time it takes for Mercury to rotate or spin once with respect to the stars) takes 59 Earth days. One day-night cycle on Mercury takes 175.97 Earth days. Mercury makes a complete orbit around the Sun (a year in Mercury time) in just 88 Earth days.",
      surface:
        "Mercury is a rocky planet, also known as a terrestrial planet. Mercury has a solid, cratered surface, much like the Earth's moon.",
      atmosphere:
        "Mercury's thin atmosphere, or exosphere, is composed mostly of oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and potassium (K). Atoms that are blasted off the surface by the solar wind and micrometeoroid impacts create Mercury's exosphere.",
      livability:
        "No evidence for life has been found on Mercury. Daytime Temperatures can reach 430 degrees Celsius (800 degrees Fahrenheit) and drop to -180 degrees Celsius (-290 degrees Fahrenheit) at night. It is unlikely life (as we know it) could survive on this planet.",
      moons: "Mercury has no moons.", image: "../assets/mercury.jpg"
    },
    {
      name: "Venus",
      planetType: "Terrestrial",
      size:
        "If the sun were as tall as a typical front door, the Earth and Venus would each be about the size of a nickel.  ",
      distance:
        "Venus orbits our Sun, a star. Venus is the second closest planet to the sun at a distance of about 67 million miles (108 million km).",
      orbit:
        "One day on Venus lasts 243 Earth days because Venus spins backwards, with its sun rising in the west and setting in the east.",
      surface:
        "Venus' solid surface is a volcanic landscape covered with extensive plains featuring high volcanic mountains and vast ridged plateaus.",
      atmosphere:
        "While the surface rotates slowly, the winds blow at hurricane force, sending clouds completely around the planet every five days.",
      livability:
        "The planet’s surface temperature is about 900 degrees Fahrenheit (465 degrees Celsius)—hot enough to melt lead.",
      moons: "Venus has no moons and no rings.", image: "../assets/mercury.jpg"
    },
    {
      name: "Earth",
      planetType: "Terrestrial",
      size:
        "If the Sun were as tall as a typical front door, Earth would be the size of a nickel.",
      distance:
        "Earth orbits our Sun, a star. Earth is the third planet from the Sun at a distance of about 93 million miles (150 million km).",
      orbit:
        "A day on Earth is 24 hours. Earth makes a complete orbit around the sun (a year in Earth time) in about 365 days.",
      surface:
        "Earth is a rocky planet with a solid and dynamic surface of mountains, canyons, plains and more. Most of our planet is covered in water.",
      atmosphere:
        "Our atmosphere protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface.",
      livability: "Earth is the perfect place for life as we know it.",
      moons: "Earth has one moon.", image: "../assets/mercury.jpg"
    },
    {
      name: "Mars",
      planetType: "Terrestrial",
      size:
        "If the Sun were as tall as a typical front door, Earth would be the size of a dime, and Mars would be about as big as an aspirin tablet.",
      distance:
        "Mars orbits our Sun, a star. Mars is the fourth planet from the Sun at an average distance of about 228 million km (142 million miles) or 1.52 AU.",
      orbit:
        "One day on Mars takes a little over 24 hours. Mars makes a complete orbit around the Sun (a year in Martian time) in 687 Earth days.",
      surface:
        "Mars is a rocky planet. Its solid surface has been altered by volcanoes, impacts, winds, crustal movement and chemical reactions.",
      atmosphere:
        "Mars has a thin atmosphere made up mostly of carbon dioxide (CO2), argon (Ar), nitrogen (N2), and a small amount of oxygen and water vapor.",
      livability:
        "At this time, Mars' surface cannot support life as we know it. Current missions are determining Mars' past and future potential for life.",
      moons: "Mars has two moons named Phobos and Deimos.", image: "../assets/mercury.jpg"
    },
    {
      name: "Jupiter",
      planetType: "Gas Giant",
      size:
        "Eleven Earths could fit across Jupiter’s equator. If Earth were the size of a grape, Jupiter would be the size of a basketball.",
      distance:
        "Jupiter orbits about 484 million miles (778 million kilometers) or 5.2 Astronomical Units (AU) from our Sun (Earth is one AU from the Sun).",
      orbit:
        "Jupiter rotates once about every 10 hours (a Jovian day), but takes about 12 Earth years to complete one orbit of the Sun (a Jovian year).",
      surface:
        "Jupiter is a gas giant and so lacks an Earth-like surface. If it has a solid inner core at all, it’s likely only about the size of Earth.",
      atmosphere:
        "Jupiter's atmosphere is made up mostly of hydrogen (H2) and helium (He).",
      livability:
        "Jupiter cannot support life as we know it. But some of Jupiter's moons have oceans beneath their crusts that might support life.",
      moons: "Jupiter has more than 75 moons.", image: "../assets/mercury.jpg"
    },
    {
      name: "Saturn",
      planetType: "Gas Giant",
      size:
        "Nine Earths side by side would almost span Saturn’s diameter. That doesn’t include Saturn’s rings.",
      distance:
        "Saturn is the sixth planet from our Sun (a star) and orbits at a distance of about 886 million miles (1.4 billion kilometers) from the Sun.",
      orbit:
        "Saturn takes about 10.7 hours (no one knows precisely) to rotate on its axis once—a Saturn “day”—and 29 Earth years to orbit the sun.",
      surface:
        "Saturn is a gas-giant planet and therefore does not have a solid surface like Earth’s. But it might have a solid core somewhere in there.",
      atmosphere:
        "Saturn's atmosphere is made up mostly of hydrogen (H2) and helium (He).",
      livability:
        "Saturn cannot support life as we know it, but some of Saturn's moons have conditions that might support life.",
      moons:
        "Saturn has 53 known moons with an additional 29 moons awaiting confirmation of their discovery—that is a total of 82 moons.", image: "../assets/mercury.jpg"
    },
    {
      name: "Uranus",
      planetType: "Ice Giant",
      size:
        "Uranus is about four times wider than Earth. If Earth were a large apple, Uranus would be the size of a basketball.",
      distance:
        "Uranus orbits our Sun, a star, and is the seventh planet from the Sun at a distance of about 1.8 billion miles (2.9 billion kilometers).",
      orbit:
        "Uranus takes about 17 hours to rotate once (a Uranian day), and about 84 Earth years to complete an orbit of the Sun (a Uranian year).",
      surface:
        "Uranus is an ice giant. Most of its mass is a hot, dense fluid of 'icy' materials – water, methane and ammonia – above a small rocky core.",
      atmosphere:
        "Uranus has an atmosphere made mostly of molecular hydrogen and atomic helium, with a small amount of methane.",
      livability: "Uranus cannot support life as we know it.",
      moons:
        "Uranus has 27 known moons, and they are named after characters from the works of William Shakespeare and Alexander Pope.", image: "../assets/mercury.jpg"
    },
    {
      name: "Neptune",
      planetType: "Ice Giant",
      size:
        "Neptune is about four times wider than Earth. If Earth were a large apple, Neptune would be the size of a basketball.",
      distance:
        "Neptune orbits our Sun, a star, and is the eighth planet from the Sun at a distance of about 2.8 billion miles (4.5 billion kilometers).",
      orbit:
        "Neptune takes about 16 hours to rotate once (a Neptunian day), and about 165 Earth years to orbit the sun (a Neptunian year).",
      surface:
        "eptune is an ice giant. Most of its mass is a hot, dense fluid of 'icy' materials – water, methane and ammonia – above a small rocky core.",
      atmosphere:
        "Neptune's atmosphere is made up mostly of molecular hydrogen, atomic helium and methane.",
      livability: "Neptune cannot support life as we know it.",
      moons:
        "Neptune has 14 known moons which are named after sea gods and nymphs in Greek mythology.", image: "../assets/mercury.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  showPlanetInfo(index: number) {
    console.log(this.planets[index]);
  }
}
