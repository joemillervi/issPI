var w = window.innerWidth;
var h = window.innerHeight;

// elements are named item 1, 2, 3

function changeDisplayed() {
  var count = 1;
  setNext();
  function setNext() {
    var currentItem = document.getElementById('item' + count);
    // find other two items,
    var otherItem1 = document.getElementById('item' + ((count - 1) === 0 ? 3 : count - 1));
    console.log(count - 1 ===  0 ? 3 : count - 1)
    console.log(otherItem1)
    var otherItem2 = document.getElementById('item' + ((count + 1) > 3 ? 1 : count + 1));
    // toggle displays
    currentItem.style.display = 'block';
    otherItem1.style.display = 'none';
    otherItem2.style.display = 'none';
    // set height and width
    currentItem.style.height = h + 'px';
    otherItem1.style.height = h + 'px';
    otherItem2.style.height = h + 'px';
    currentItem.style.width = w + 'px';
    otherItem1.style.width = w + 'px';
    otherItem2.style.width = w + 'px';

    if (count === 3) {
      window.setTimeout(setNext, 6000);
    }
    else { window.setTimeout(setNext, 1000);
    }

    // loop
    if (count === 3) count = 0;
    count++;

  }
}

changeDisplayed();
