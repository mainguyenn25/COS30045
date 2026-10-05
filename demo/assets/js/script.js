// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// FAQ accordion (hidden by default, toggled on click)
document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });
});

// Appliance energy calculator
const form = document.getElementById('calc-form');
if (form) {
  const fields = ['watts', 'hours', 'price'].map(id => document.getElementById(id));
  const results = document.getElementById('results');
  const item = (label, value) => '<div><dt>' + label + '</dt><dd>' + value + '</dd></div>';

  function readField(input, max) {
    const err = document.getElementById(input.id + '-err');
    const raw = input.value.trim();
    const v = Number(raw);
    let msg = '';
    if (raw === '') msg = 'Please enter a value.';
    else if (!Number.isFinite(v) || v < 0) msg = 'Enter a number of 0 or more.';
    else if (max !== undefined && v > max) msg = 'Must be ' + max + ' or less.';
    err.textContent = msg;
    input.classList.toggle('invalid', msg !== '');
    return msg ? null : v;
  }

  function calculate() {
    const watts = readField(fields[0]);
    const hours = readField(fields[1], 24);
    const price = readField(fields[2]);
    if (watts === null || hours === null || price === null) {
      results.innerHTML = '<p>Fix the highlighted fields to see your results.</p>';
      return;
    }
    const daily = watts * hours / 1000;       // kWh per day
    const yearly = daily * 365;               // kWh per year
    const yearlyCost = yearly * price / 100;  // dollars
    results.innerHTML = '<dl>' +
      item('Estimated cost per year', '$' + yearlyCost.toFixed(2)) + '</dl>';
  }

  form.addEventListener('submit', e => { e.preventDefault(); calculate(); });
  fields.forEach(f => f.addEventListener('input', () => { if (results.querySelector('dl')) calculate(); }));
}
