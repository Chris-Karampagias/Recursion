#!/usr/bin/env node

/* Iteration */

function fibs(n) {
  let F1 = 0;
  let F2 = 1;
  const array = [0, 1];
  if (n == 1) {
    return [1];
  } else if (n == 2) {
    return [1, 2];
  } else {
    let steps = 2;
    while (steps != n) {
      let next = F1 + F2;
      array.push(next);
      F1 = F2;
      F2 = next;
      steps += 1;
    }
    return array;
  }
}

/* Recursion */

function fibsRec(n) {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
  }
}
