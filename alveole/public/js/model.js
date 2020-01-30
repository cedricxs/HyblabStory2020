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
      "1": "Slide 1",
      "2": "Slide 2",
      "3": "Slide 3",
      "4": "Conclusion",
      "length": 5
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
    if (this.value < 0) {
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
        footValues[2] = this.obj[this.value];
        footValues[3] = this.obj[this.value + 1];
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
