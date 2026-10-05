
# Appliance Energy Consumption
LIVE DEMO: https://mainguyenn25.github.io/COS30045-Demo1/ 

Appliance Energy Consumption is a small educational website. I built it for COS30045 Data
Visualisation. It uses HTML, CSS and JavaScript to present a three-page guide
to appliance energy consumption in the Australian market

The website was developed using:

- HTML
- CSS
- JavaScript

No external JavaScript libraries or frameworks are used.

## Pages

The website contains three HTML pages:

1. Home: Overview for project
2. Televisions: A data story about what drives television power use, built from the Australian Government Energy Rating data set, plus a yearly-use estimator.
3. About Us: Project context

## How to Run

1. Download or copy all project files.
3. Open `index.html` in a web browser.

The website does not require a server or additional dependencies.

---


### Audience

This story is written for Australian consumers who are about to buy a
television. They are not technical. They are comparing models in a shop or
online. They have seen the Energy Rating Label, but they are not sure what it
means for their electricity bill.

What they want is simple. They want to know what to look for. They do not want
to hear about how the data was processed.

### What they want to know


Questions directly affect the buying choice:

- How does screen size affect power use?
- How is screen size and Star2 rating related?
- How is Star2 rating and average mode power related?


Other questions

- Which screen type uses most average mode power?
- Which brands dominate the TV markets in Australia?
- Which brand is the most sufficient energy-savings?


## About the data

### Data source

The data comes from the Australian Government Energy Rating register,
published on data.gov.au as "Energy Rating Data for household appliances -
Labelled Products".

The file used was `tv_2026_09_28.csv`, which held 5,340 rows before cleaning.

### Data processing

The data was cleaned and transformed in KNIME.

### Privacy

The data set holds no personal information. Every row describes a registered
product, not a person. The fields cover brand, model number, screen size,
screen technology, power use and star rating.

The only identifiable parties are the manufacturers, and their details are
published on a public government register as a condition of selling these
products in Australia. So there is no privacy risk in using or republishing it.

### Accuracy 

The figures are self-reported by manufacturers to the regulator. They are
measured under a standard test procedure, not in a real living room. So the
power figures are useful for comparing models against each other, but they will
not match what a household actually uses. Screen brightness, content and
viewing hours all change the real figure.



## AI Declaration

### Tools used


- **Claude (Anthropic)** - Generative AI was used to assist with website development, including
HTML structure, CSS styling, JavaScript functionality and placeholder
content. The final website was reviewed and adapted by the student.

