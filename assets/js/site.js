/*
  Site-wide client JS for the redesign.

  Responsibilities:
    1. Chip filter — scoped to each `.filters` container. Match a chip's
       `data-filter` against each filterable element's `data-kind` or
       `data-tags` (pipe-delimited).
    2. Group-label hiding — when chip filter empties a group, hide the
       `.group-label` that precedes it.
    3. View toggle — visual-only "Editorial / Index" toggle on the
       Beyond Research filterbar.
    4. Scroll-spy — highlight nav links whose `data-target` matches
       the currently visible section on the homepage.
*/

(function () {
  'use strict';

  // ---- 1 + 2. Chip filter (scoped) + group-label hiding ----
  document.querySelectorAll('.filters').forEach(function (group) {
    var chips = group.querySelectorAll('.chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        applyFilter(chip.dataset.filter || 'all');
      });
    });
  });

  function applyFilter(filter) {
    var items = document.querySelectorAll('[data-kind], [data-tags]');
    items.forEach(function (el) {
      var match = false;
      if (filter === 'all') {
        match = true;
      } else if (el.dataset.kind === filter) {
        match = true;
      } else if (el.dataset.tags) {
        var tags = el.dataset.tags.split('|').map(function (t) { return t.trim(); });
        match = tags.indexOf(filter) !== -1;
      }
      el.style.display = match ? '' : 'none';
    });

    document.querySelectorAll('.group-label').forEach(function (g) {
      var anyVisible = false;
      var n = g.nextElementSibling;
      while (n && !n.classList.contains('group-label')) {
        if (n.style.display !== 'none') { anyVisible = true; break; }
        n = n.nextElementSibling;
      }
      g.style.display = anyVisible ? '' : 'none';
    });
  }

  // ---- 3. View toggle (visual only) ----
  document.querySelectorAll('.filterbar .view a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.querySelectorAll('.filterbar .view a').forEach(function (x) {
        x.classList.remove('active');
      });
      a.classList.add('active');
    });
  });

  // ---- 4. Scroll-spy for nav links with data-target ----
  var navLinks = Array.from(
    document.querySelectorAll('header.site .nav a[data-target]')
  );
  var targets = navLinks
    .map(function (a) {
      var el = document.getElementById(a.dataset.target);
      return el ? { link: a, el: el } : null;
    })
    .filter(Boolean);

  if (targets.length) {
    var onScroll = function () {
      var y = window.scrollY + 120;
      var active = targets[0];
      targets.forEach(function (t) {
        if (t.el.offsetTop <= y) { active = t; }
      });
      navLinks.forEach(function (a) {
        a.classList.toggle('active', a === active.link);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
