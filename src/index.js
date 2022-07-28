module.exports = towelSort = (arr) =>
    !arr || !arr.length
        ? []
        : arr.reduce((a, b, i) =>
              i % 2 == 0 ? a.concat(b) : a.concat(b.reverse())
          );
