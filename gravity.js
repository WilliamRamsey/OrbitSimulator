class vector {
    // Repersents x and y magnitudes
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class planet {
    constructor(mass, position, velocity, acceleration) {
        // k
        this.mass = mass;
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
    }
}

class universe {
    constructor() {
        this.planets = [];
        this.time = 0;
        this.timeStep = 1;
    }

    update() {
        this.time += this.timeStep;
        for (let planet of this.planets) {
            planet.velocity.x += planet.acceleration.x * this.timeStep;
            planet.velocity.y += planet.acceleration.y * this.timeStep;
            planet.position.x += planet.velocity.x * this.timeStep;
            planet.position.y += planet.velocity.y * this.timeStep;
        }
    }

    addPlanet(planet) {
        this.planets.push(planet);
    }
}

function toViewport(position) {
    let planet_div = document.getElementById("planet");
    planet_div.style.top = position.y + "px";
    planet_div.style.left = position.x + "px";
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function bigBang () {
    const home = new universe();
    const earth = new planet(5.972e24, new vector(400, 245), new vector(0, 0), new vector(1, -1));
    home.addPlanet(earth);
    console.log("Its starting")

    while (true) {
        sleep(1000)
        home.update();
        toViewport(earth.position);
        console.log(earth.position.x, earth.position.y);
    }
}