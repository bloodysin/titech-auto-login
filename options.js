// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

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

function clear() {
  let table = document.querySelectorAll("input");
  for(let i =0; i < table.length; i++) {
    table[i].value = "";
  }
}

document.getElementById("save").addEventListener("click", savePwtable);
document.getElementById("clear").addEventListener("click", clear);
chrome.storage.sync.get(['pw'], function(result) {
  // for(let i = 0; i < result.pw.length; i++) {
    // console.log('Value currently is ' + result.pw[i]);
  // }
  let table = document.querySelectorAll("input");
  for(let i =0; i < table.length; i++) {
    table[i].value = result.pw[i];
  }
});
