class Model extends Observable {

  // Model value
  value;

  constructor() {
    super();
    this.value;
  }

  setValue(value) {
    if (value != this.value) {
      this.value = value;
      console.log("Model value has been changed");
      this.setChanged();
      this.notifyObservers();
    }
  }
}

class ModelSlide extends Observable {

  // Model value
  obj;
  value;

  constructor() {
    super();
    this.obj = {
      "0": "Introduction",
      "1": "Lieu",
      "2": "Micro",
      "3": "Voix",
      "4": "Tournage",
      "5": "Dérushage",
      "6": "Mixage",
      "7": "Podcast ou Capsule ?",
      "8": "Capsule",
      "9": "Conclusion",
      "length": 10
    };
    this.value;
  }

  setValue(value) {
    if (value >= 0 && value < this.obj.length) {
      if (value != this.value) {
        this.value = value;
        console.log("Slide has changed: " + this.obj[this.value]);
        this.setChanged();
        this.notifyObservers();
      }
    } else {
      console.log("err: index value not permitted");
    }

  }

  // Get the slide position
  getValue() {
    return this.value;
  }

  // Change to next slide (meaning animate the footer and make the transitions)
  nextSlide() {
    if (this.value < this.obj.length - 1) {
      this.setValue(this.value + 1);
    } else {
      console.log("err: out of range");
    }
  }

  // Change to previous slide (meaning animate the footer and make the transitions) ! most likely useless
  prevSlide() {
    if (this.value > 0) {
      this.setValue(this.value - 1);
    } else {
      console.log("err: out of range");
    }
  }

  getFooterValues() {
    let footValues = {
      "1": null,
      "2": null,
      "3": null
    }
    if (this.value != undefined) {
      if (this.value == 0) {
        // if first slide return empty object
      } else if (this.value == this.obj.length - 1) {
        footValues[1] = this.obj[this.value - 1];
        footValues[2] = this.obj[this.value];
      } else {
        footValues[1] = this.obj[this.value - 1];
        footValues[2] = this.obj[this.value];
        footValues[3] = this.obj[this.value + 1];
      }
    }
    return footValues;
  }
}

class ModelSlide1 extends Observable {

  // value
  bool;
  choice;
  answer;
  instanciated;
  hotel;
  studio;

  constructor() {
    super();
    this.bool = false;
    this.choice;
    this.answer = 'studio';
    this.instanciated = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }

  destroyHotel() {
    if (this.instanciated == true) {
      this.hotel.destroy();
    } else {
      console.log('err : not instanciated');
    }
  }

  destroyStudio() {
    if (this.instanciated == true) {
      this.studio.destroy();
    } else {
      console.log('err : not instanciated');
    }
  }

  loadHotel() {
    this.hotel = bodymovin.loadAnimation({
      container : document.getElementById('center'),
      renderer: 'svg',
      name: 'animation1',
      loop: true,
      autoplay: false,
      path: 'data/hotel.json',
      rendererSettings: {
        className: 'slide1',
        id: 'svg_hotel'
      }
    });
    this.instanciated = true;
    return this.hotel;
  }

  loadStudio() {
    this.studio = bodymovin.loadAnimation({
      container : document.getElementById('center'),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/studio.json',
      rendererSettings: {
        className: 'slide1',
        id: 'svg_studio'
      }
    });
    this.instanciated = true;
    return this.studio;
  }

}
