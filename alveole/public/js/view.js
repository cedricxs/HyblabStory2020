class ViewHeader {
    constructor() {
      this.main = document.querySelector("main");
      let header = document.createElement('header');

      this.div = document.createElement('div');
      this.div.setAttribute('id', 'header_brand');

      header.appendChild(this.div);

      Snap.load('data/header_brand.svg', function(data) {
        let snap = Snap('#header_brand');
        snap.append(data);
      });

      this.main.appendChild(header);
    }
}

class ViewFooter {

  constructor() {
    this.main = document.querySelector('main');
    let footer = document.createElement('footer');

    this.div = document.createElement('div');
    this.div.setAttribute('id', 'footer_ellipse');

    footer.appendChild(this.div);

    Snap.load('data/footer_ellipse.svg', function(data) {

      // Adding the ellipse to the div
      let snap = Snap('#footer_ellipse');
      snap.append(data);
    });

    this.main.appendChild(footer);
  }
}

class ViewLeft {

  constructor() {
    this.main = document.querySelector('main');
    let left = document.createElement('div');
    left.setAttribute('id', 'left');

    this.main.appendChild(left);
  }
}

class ViewCenter {

  constructor() {
    this.main = document.querySelector('main');
    let center = document.createElement('div');
    center.setAttribute('id', 'center');

    this.main.appendChild(center);
  }
}

class ViewRight {

  constructor() {
    this.main = document.querySelector('main');
    let right = document.createElement('div');
    right.setAttribute('id', 'right');

    this.main.appendChild(right);
  }
}

class ViewStupidButtons {

  constructor() {
    this.right = document.querySelector('main');
    let right = document.createElement('div');
  }
}
