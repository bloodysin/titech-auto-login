// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    document.getElementById("buttonDiv").appendChild(button);
  }
}
// constructOptions(kButtonColors);

function savePwtable() {
  let inputs = document.getElementsByTagName("input");
  let table = [];
  for(let i = 0; i < inputs.length; i++) {
    table[i] = inputs[i].value;
    console.log(table[i]);
  }
  chrome.storage.sync.set({pw: table}, function() {
    alert("Saved!");
  });
}

document.getElementById("save").addEventListener("click", savePwtable);
chrome.storage.sync.get(['pw'], function(result) {
  for(let i = 0; i < result.pw.length; i++) {
    console.log('Value currently is ' + result.pw[i]);
  }
});
